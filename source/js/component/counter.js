import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

  constructor(props) {

    super(props);

    const { onIncrement, onDecrement } = this.props;

    // bind action triggers for use in map callback
    this.onIncrement = onIncrement.bind(this);
    this.onDecrement = onDecrement.bind(this);

  }

  render() {

    const { counters } = this.props;
    const renderCounter = this.renderCounter;

    return (
      <div>
        <h1>Counters</h1>
        {/* render each counter */}
        {counters.map(renderCounter.bind(this))}
      </div>
    );

  }

  renderCounter(counter, i) {

    return (
      <div key={counter.id}>
        <h2>{counter.title} - {counter.value}</h2>
        <button onClick={e => this.onIncrement(i)}>+</button>
        <button onClick={e => this.onDecrement(i)}>-</button>
      </div>
    );

  }

}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  counters: PropTypes.array.isRequired
};
