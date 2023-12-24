import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Header from "./Header";
import { createBrowserHistory } from 'history';

import "./RoutesApp.css";

const RoutesApp = () => {
  const history = createBrowserHistory();
  return (
    <>
    {/* agrego un comentario */}
      <Router history={history}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="blur-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-3/5 h-3/5 lg:w-2/5 lg:h-2/5"></div>
      </Router>
    </>
  );
};

export default RoutesApp;
