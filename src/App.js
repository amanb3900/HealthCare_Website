import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Pathy from "./Components/Pathy/Pathy";
import CaseOverview from "./Components/CaseOverview/CaseOverview";

export default function App() {
  return (
    <Router>
      {/* <Switch>
      <Route path="/" element={<Home />}/>
      <Route path="/pathy" element={<Pathy />}/>
      </Switch> */}
      <Home />
      {/* <Pathy />
      <CaseOverview /> */}
    </Router>
  );
}
