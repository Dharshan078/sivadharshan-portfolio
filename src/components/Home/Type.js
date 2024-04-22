import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Electrical & Electronics Engineer",
          "UX-UI Designer",
          "Graphics Designer",
          "Data Analyst",
          "Visual Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 140,
      }}
    />
  );
}

export default Type;
