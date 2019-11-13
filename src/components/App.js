import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import { dispatch } from 'rxjs/internal/observable/range';
class App extends Component {
  state = {
    step: 10,
  };

  increment = () => {
    this.props.incrementCount(this.state.step);
  };
  decrement = () => {
    this.props.decrementCount(this.state.step);
  };

  render() {
    console.log(this.props);
    const { defaultCount } = this.props;
    // const { count } = this.state;

    return (
      <div style={{ width: '300px', margin: 'auto' }}>
        <button onClick={this.increment}>INCREMENT</button>
        <h2>{defaultCount}</h2>
        <button onClick={this.decrement}>DECREMENT</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  defaultCount: state.count,
});

const m = dis => ({
  incrementCount: value => dis(increment(value)),
  decrementCount: value => dis(decrement(value)),
});

export default connect(
  mapStateToProps,
  m,
)(App);
