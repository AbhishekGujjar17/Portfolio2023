import React from "react";

import Typewriter from "typewriter-effect";
import Seo from "../SEO/Seo";

const Type = () => {
  return (
    <>
      <Seo />
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Cloud Engineer",
            "Full Stack Developer",
            "Tech Enthusiast",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
        }}
      />
    </>
  );
};

export default Type;
