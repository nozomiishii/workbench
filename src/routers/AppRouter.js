import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFoundpage from "../components/NotFoundpage";
import HelpPage from "../components/HelpPage";
import EditExpencePage from "../components/EditExpencePage";
import AddExpencePage from "../components/AddExpencePage";
import ExpenceDashboardPage from "../components/ExpenceDashboardPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenceDashboardPage} exact={true} />
        <Route path="/create" component={AddExpencePage} />
        <Route path="/edit/:id" component={EditExpencePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundpage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
