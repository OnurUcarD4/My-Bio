import React from "react";
import ResumeCard from "./ResumeCard";

const TabPane1 = ({ data }) => {
  return (
    <div className="mt-4 flex flex-col">
      <ResumeCard data={data} />
    </div>
  );
};

export default TabPane1;
