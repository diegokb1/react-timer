const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    }
  },
  handleCountdown: function (count) {
    this.setState({ count });
  },
  render: function () {
    const { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
