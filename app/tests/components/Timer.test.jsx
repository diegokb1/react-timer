const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Timer = require('Timer');

describe('Timer', () => {
  it('exists', () => {
    expect(Timer).toExist();
  });

  describe('Counter status', () => {
    it('increments the counter on startTimer', done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.startTimer();

      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      }, 3001);
    });

    it('resets the counter on stopped', done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({ count: 20 })

      expect(timer.state.count).toBe(20);
      
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 1001);
    });

    it('pauses the counter on paused', done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({ count: 20 })

      expect(timer.state.count).toBe(20);
      
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(20);
        done();
      }, 1001);
    });
  });

  describe('handleStatusChange', () => {
    it('updates the countdownStatus', () => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);

      expect(timer.state.countdownStatus).toBe('stopped');

      timer.handleStatusChange('foo');

      expect(timer.state.countdownStatus).toBe('foo');
    });
  });

});
