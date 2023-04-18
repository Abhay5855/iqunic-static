import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <div>
      <Router>
        <Suspense>
          <Switch></Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default Routes;
