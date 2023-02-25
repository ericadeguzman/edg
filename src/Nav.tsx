import React from "react";
import { Link } from "react-router-dom";


function MyNav() {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/">
            <button
              style={{ backgroundColor: "rgba(129, 101, 71, .1)" }}
              type="button"
            >
              home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button
              style={{ backgroundColor: "rgba(129, 101, 71, .2)" }}
              type="button"
            >
              projects
            </button>
          </Link>
        </li>
        <li>
          <Link to="/photography">
            <button
              style={{ backgroundColor: "rgba(129, 101, 71, .4)" }}
              type="button"
            >
              photography
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MyNav;
