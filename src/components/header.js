import PropTypes from "prop-types";
import React, { useState } from "react";
import HeaderMenu from './headerMenu';

function Header({ siteTitle }) {
  return (
    <nav>
      <HeaderMenu/>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
