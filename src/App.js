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
import Diseases from "./Components/diseases/diseases/Diseases";

export default function App() {
  return (
    <Router>

      <Switch>
      <Route path="/" element={<Home />}/>
      <Route path="/pathy/homeopathy/" element={<Pathy />}/>
      <Route path="/disease/migraine/" element={<Diseases />}/>
      </Switch>
      {/* <Diseases/> */}
      {/* <Home /> */}
      {/* <Pathy />
      <CaseOverview /> */}
    </Router>
  );
}
