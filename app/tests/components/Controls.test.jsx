const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Controls = require('Controls');

describe('Controls', () => {
  it('exists', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('renders paused when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('renders start when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });

});
