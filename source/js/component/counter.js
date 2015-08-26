import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  constructor(props, ctx) {

    super(props, ctx);

  }

  render() {

    // TODO - this is where we'd render ALL the counters by iterating over this.props.counters (which would be fetched from the DB in container/Counters and assigned to state.counters = [])
    // {this.props.counters.map(renderCounter)} -> where renderCounter() is a function returning some JSX markup
    // see for example: https://gist.github.com/chantastic/fc9e3853464dffdb1e3c

    const { increment, decrement, counter } = this.props;

    return (
      <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );

  }

}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
