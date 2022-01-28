import React, { useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

const ReactType = () => {
  return (
    <div id="type-effect" className="lg:text-6xl font-bold mt-2 text-white ">
      a{" "}
      <ReactTypingEffect
        speed={150}
        typingDelay={150}
        eraseSpeed={150}
        eraseDelay={150}
        text={["Designer.", "Web Developer.", "Programmer."]}
      />
    </div>
  );
};

export default ReactType;
