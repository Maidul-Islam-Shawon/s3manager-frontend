import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import TopNav from "./common/TopNav";
import BulkSanctionPage from "./pages/BulkSanctionPage";
import HomePage from "./pages/HomePage";
import SanctionTypePage from "./pages/SanctionTypePage";

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sanction-type-list" component={SanctionTypePage} />
        <Route exact path="/bulk-sanction" component={BulkSanctionPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
