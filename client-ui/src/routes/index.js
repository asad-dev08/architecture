import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Works from "../pages/Works";
import Process from "../pages/Process";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Career from "../pages/Career";
import ServiceDetails from "../pages/ServiceDetails";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import WorkDetails from "../pages/WorkDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:type" element={<ServiceDetails />} />
      <Route path="/works" element={<Works />} />
      <Route path="/work/:id" element={<WorkDetails />} />
      <Route path="/process" element={<Process />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/career" element={<Career />} />
      <Route path="/about/news" element={<News />} />
      <Route path="/about/news/:slug" element={<NewsDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
