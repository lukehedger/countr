import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  constructor(props, ctx) {

    super(props, ctx);

  }

  render() {

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
