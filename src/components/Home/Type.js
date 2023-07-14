import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Electrical & Electronics Engineer",
          "UX-UI Designer",
          "Content Creator",
          "Embedded Coder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
