import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import build from 'redux-object';

import { requireAuthentication, getEndpoint } from '../helpers';

class FieldList extends Component {
  componentWillMount() {
    console.log('Yo');
    this.props.actions.getEndpoint('/fields');
  }
  render() {
    const fields = this.props.fields === undefined || this.props.fields === null ? [] : this.props.fields;
    return (
      <div>
        {fields.map(field => field.id)}
        <button onClick={e => this.props.actions.getEndpoint('/fields', {})}>Click ME!</button>
      </div>
    );
  }
}

const mapState = state => ({
  fields: build(state.data, 'fields', null)
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators({ getEndpoint }, dispatch)
});

export default requireAuthentication(connect(mapState, mapDispatch)(FieldList));
