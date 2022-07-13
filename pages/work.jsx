import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const Work = () => {
  return (
    <div>
      <Hero
        heading="My work"
        message="This is some of my work travelling the world"
      />
      <Portfolio />
    </div>
  );
};

export default Work;
