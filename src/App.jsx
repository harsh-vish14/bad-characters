import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NamePage from "./pages/namePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: "calc(100vh - 50px)" }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:name">
              <NamePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
