const React = require('react');
const NavBar = require('NavBar');

const Main = ({ children }) => {
  return (
    <div>
      <div>
        <div>
          <NavBar/>
          {children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
