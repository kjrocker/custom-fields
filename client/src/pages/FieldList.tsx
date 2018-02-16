import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import build from 'redux-object';
import { Table } from 'semantic-ui-react';

import { requireAuthentication } from '../helpers';
import { getFields, getValidations, getTags } from '../redux/actions';

class FieldList extends React.Component<any, any> {
  componentWillMount() {
    this.props.actions.getFields([1]);
    // this.props.actions.getValidations();
    // this.props.actions.getTags();
  }

  renderField = (field, key) => (
    <Table.Row key={key}>
      <Table.Cell>{field.id}</Table.Cell>
      <Table.Cell>{field.name}</Table.Cell>
      <Table.Cell>{field.tags.map(t => t.id).join(', ')}</Table.Cell>
      {/* <Table.Cell>{field.validations[0] ? field.validations[0].name : 'No Validations'}</Table.Cell> */}
    </Table.Row>
  );

  render() {
    const fields = this.props.fields === undefined || this.props.fields === null ? [] : this.props.fields;
    return (
      <Table celled={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Field ID</Table.HeaderCell>
            <Table.HeaderCell>Field Name</Table.HeaderCell>
            <Table.HeaderCell># of Validations</Table.HeaderCell>
            {/* <Table.HeaderCell>First Validation Name</Table.HeaderCell> */}
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

const ConnectedFieldList = connect(mapState, mapDispatch)(FieldList);

export default requireAuthentication(ConnectedFieldList);
