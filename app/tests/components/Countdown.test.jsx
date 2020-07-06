const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Countdown = require('Countdown');

describe('Countdown', () => {
  it('exists', () => {
    expect(Countdown).toExist();
  });

  describe('handleCountdown', () => {
    it('sets the state to started and countdown', done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('does not set the count to less than 0 when finishing the countdown', done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000);
    });
  })

});
