import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";

// import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
// import Components from "views/Components/Components.js";
import Home from "views/Home/Home";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
