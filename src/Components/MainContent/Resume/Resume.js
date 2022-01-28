import React from "react";
import ResumeTabs from "./ResumeComponents/ResumeTabs";
import Title from "./ResumeComponents/Title";

const Resume = () => {
  return (
    <div className="lg:flex lg:flex-col lg:gap-5">
      <Title />
      <ResumeTabs />
    </div>
  );
};

export default Resume;
