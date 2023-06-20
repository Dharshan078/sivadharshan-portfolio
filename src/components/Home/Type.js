import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Web Developer",
          "Electrical & Electronics Engineer",
          "UX-UI Designer",
          "Open Source Contributor",
          "Embedded Coder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
