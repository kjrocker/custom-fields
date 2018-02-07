import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import build from 'redux-object';
import { Table } from 'semantic-ui-react';

import { requireAuthentication } from '../helpers';
import { getFields, getValidations, getTags } from './getData';

class FieldList extends React.Component<any, any> {
  componentWillMount() {
    this.props.actions.getFields();
    this.props.actions.getValidations();
    this.props.actions.getTags();
  }

  renderField = (field, key) => (
    <Table.Row key={key}>
      <Table.Cell>{field.id}</Table.Cell>
      <Table.Cell>{field.name}</Table.Cell>
      <Table.Cell>{field.validations.length}</Table.Cell>
    </Table.Row>
  );

  render() {
    const fields = this.props.fields === undefined || this.props.fields === null ? [] : this.props.fields;
    return (
      <Table celled={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{fields.map(this.renderField)}</Table.Body>
      </Table>
    );
  }
}

const mapState = state => ({
  fields: build(state.data, 'fields', null)
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators({ getFields, getValidations, getTags }, dispatch)
});

export default requireAuthentication(connect(mapState, mapDispatch)(FieldList));
