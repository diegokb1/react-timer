const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const testUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  it('exists', () => {
    expect(Clock).toExist();
  });

  describe('Render', () => {
    it('renders clock output', () => {
      const clock = testUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('FormatSeconds', () => {
    it('formats seconds', () => {
      const clock = testUtils.renderIntoDocument(<Clock/>);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
    it('formats seconds when min/sec are less than 10', () => {
      const clock = testUtils.renderIntoDocument(<Clock/>);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
