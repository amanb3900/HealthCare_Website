import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Forgot from "./Components/forgot/Forgot"
import Login from "./Components/Log in/Login";
import Home from "./Components/Home/Home";
import CaseOverview from "./Components/CaseOverview/CaseOverview";
import Diseases from "./Components/diseases/diseases/Diseases";
import Pathies from "./Components/pathies/Pathies";
import DirectPageTestimonials from './Components/pathies/DirectPageTestimonials/DirectPageTestimonials'
import YoutubePageTestimonials from "./Components/pathies/YoutubePageTestimonials/YoutubePageTestimonials";
export default function App() {
  return (
    <Router>

      <Switch>
      <Route path="/" element={<Home />}/>
      <Route path="/forgot" element={<Forgot />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/pathy/homeopathy/" element={<Pathies />}/>
      <Route path="/disease/migraine/" element={<Diseases />}/>
      <Route path="/pathy/homeopathy/direct-testimonials" element={<DirectPageTestimonials />}/>
      <Route path="/pathy/homeopathy/youtube-testimonials" element={<YoutubePageTestimonials />}/>
      <Route path="/pathy/homeopathy/direct-testimonials/case1" element={<CaseOverview />}/>
      </Switch>
      {/* <Diseases/> */}
      {/* <Home /> */}
      {/* <CaseOverview /> */}
    </Router>
  );
}
