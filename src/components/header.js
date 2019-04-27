import PropTypes from "prop-types";
import React from "react";
import NavMenu from './NavMenu';

import LanguageSelector from './LanguageSelector';

function Header({ className, pageContext }) {
  return (
    <div className={className}>
      <LanguageSelector pageContext={pageContext} />
      <NavMenu />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ``
};

export default Header;
