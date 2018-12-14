import React from "react";
import { Link, NavLink } from "react-router-dom";
import withRouter from "react-router-dom/withRouter";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper nav flat teal darken-3">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
