import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    // const { onIncrement, onDecrement } = this.props;
    const { counters } = this.props;
    const renderCounter = this.renderCounter;

    return (
      <div>
        <h1>Counters</h1>
        {counters.map(renderCounter)}
        {/*
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
        */}
      </div>
    );

  }

  renderCounter(counter, i) {

    return (
      <div key={counter.id}>
        <h2>{counter.title} - {counter.value}</h2>
      </div>
    );

  }

}

Counter.propTypes = {
  // onIncrement: PropTypes.func.isRequired,
  // onDecrement: PropTypes.func.isRequired,
  counters: PropTypes.array.isRequired
};
