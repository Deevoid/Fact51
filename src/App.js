import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Sugar } from "react-preloaders";

import Homepage from "./pages/Homepage/Homepage";
import SingleFact from "./pages/SingleFact";
import Daily from "./pages/Daily/Daily";
import SubmitFact from "./pages/Submitfact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchFact from "./pages/SearchFact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/top10" exact component={Daily} />
          <Route path="/submitFact" exact component={SubmitFact} />
          <Route path="/search" exact component={SearchFact} />
          <Route path="/:factId" exact component={SingleFact} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
      {/* <Sugar color={"#FF6584"} animation="slide" time={1000} /> */}
    </React.Fragment>
  );
}

export default App;
