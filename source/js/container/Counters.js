import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../component/counter';
import * as CounterActions from '../action/counter';

class CounterContainer extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {
    console.log('componentDidMount', this.props);

    const { fetchCounters } = this.props;

    // TODO - need to get current user before here and pass to func
    fetchCounters(0);

  }

  render() {

    // const { increment, decrement } = this.props;
    const { counters } = this.props;

    return (
      // <Counter onIncrement={increment} onDecrement={decrement} />
      <Counter counters={counters} />
    );

  }

}

function mapStateToProps(state) {
  const { countersByUser } = state;
  const { isFetching, lastUpdated, items: counters } = countersByUser;

  return {
    counters,
    isFetching,
    lastUpdated
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
