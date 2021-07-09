import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Navbar from "../components/Navbar";
import DetailPage from "../components/DetailPage";

import React from "react";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/cartPage" component={CartPage} />
        <Route path="/detailPage" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
