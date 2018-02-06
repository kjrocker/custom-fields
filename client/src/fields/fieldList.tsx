import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import build from 'redux-object';

import { requireAuthentication } from '../helpers';
import getFields from './getFields';

class FieldList extends React.Component<any, any> {
  componentWillMount() {
    this.props.actions.getFields();
  }

  renderField = (field, key) => (
    <div key={key}>
      {field.id} - {field.name} has {field.validations.length} validation(s){' '}
      {field.validationCount > 0 ? `with type ${field.validations[0].type}` : ''}
    </div>
  );

  render() {
    const fields = this.props.fields === undefined || this.props.fields === null ? [] : this.props.fields;
    return (
      <div>
        {fields.map(this.renderField)}
        <button onClick={e => this.props.actions.getFields()}>Click ME!</button>
      </div>
    );
  }
}

const mapState = state => ({
  fields: build(state.data, 'fields', null)
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators({ getFields }, dispatch)
});

export default requireAuthentication(connect(mapState, mapDispatch)(FieldList));
