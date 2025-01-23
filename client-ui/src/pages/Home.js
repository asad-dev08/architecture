import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
