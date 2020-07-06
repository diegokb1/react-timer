const React = require('react');
const NavBar = require('NavBar');

const Main = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
