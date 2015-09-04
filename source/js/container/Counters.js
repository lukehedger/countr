import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../component/counter';
import * as CounterActions from '../action/counter';

class CounterContainer extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {

    const { fetchCountersIfNeeded, userData } = this.props;

    fetchCountersIfNeeded(userData.id)
      .then(() => {
        // data fetched OK
      });

  }

  render() {

    const { increment, decrement, counters } = this.props;

    return (
      <Counter onIncrement={increment} onDecrement={decrement} counters={counters} />
    );

  }

}

function mapStateToProps(state) {

  const { countersByUser, user } = state;
  const { isFetching, lastUpdated, items: counters } = countersByUser;
  const { data: userData } = user;

  return {
    counters,
    isFetching,
    lastUpdated,
    userData
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
