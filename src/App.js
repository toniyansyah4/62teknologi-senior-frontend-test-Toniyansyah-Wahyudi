import React from "react";
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "./Pages/HomePage";
import { Search } from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
