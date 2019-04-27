import PropTypes from "prop-types";
import React from "react";
import HeaderMenu from './headerMenu';

function Header({ className }) {
  return (
    <nav className={className}>
      <HeaderMenu />
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
