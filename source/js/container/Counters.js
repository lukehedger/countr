import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../component/counter';
import * as CounterActions from '../action/counter';

export default class Counters extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    // TODO - how to change this to display multiple counters... this is for later ;)

    return (
      <div>
        <h1>Counters</h1>
      </div>
    );

  }

}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
