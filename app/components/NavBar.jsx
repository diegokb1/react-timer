const React = require('react');
const { Link, IndexLink } = require('react-router');

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Timer App</li>
            <li>
              <IndexLink activeClassName="active-link" to="/">Timer</IndexLink>
            </li>
            <li>
              <Link activeClassName="active-link" to="/countdown">CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by Diego
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
