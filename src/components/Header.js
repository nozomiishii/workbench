import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expencify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expence
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expence
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      HelpPage
    </NavLink>
  </header>
);

export default Header;
