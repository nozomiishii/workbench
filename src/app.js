import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenceDashboardPage = () => (
  <div>this is from my dashboard component</div>
);

const AddExpencePage = () => <div>Add ExpencePage</div>;
const EditExpencePage = () => <div>Edit ExpencePage</div>;
const HelpPage = () => <div>Help Page</div>;
const NotFoundpage = () => (
  <div>
    404!! - <Link to="/">go home</Link>
  </div>
);

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

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenceDashboardPage} exact={true} />
        <Route path="/create" component={AddExpencePage} />
        <Route path="/edit" component={EditExpencePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundpage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
