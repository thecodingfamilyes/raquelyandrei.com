import { Link } from "gatsby";
import React, { useState } from "react";

function HeaderMenu() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-end mx-auto p-4 md:p-8 uppercase">
      <button
        className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-primary"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } md:block md:flex md:items-center w-full md:w-auto`}
      >
        <div className="text-base">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-primary"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-primary"
          >
            Nosotros
          </Link>

          <Link
            to="/contact"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-primary"
          >
            Libro de firmas
          </Link>

          <Link
            to="/contact"
            className="block md:inline-block mt-4 md:mt-0 no-underline text-primary"
          >
            Pregúntanos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
