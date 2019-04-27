import PropTypes from "prop-types";
import React from "react";
import NavMenu from './NavMenu';

function Header({ className }) {
  return (
    <nav className={className}>
      <NavMenu />
    </nav>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ``
};

export default Header;
