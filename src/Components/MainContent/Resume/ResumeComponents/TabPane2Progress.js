import React from "react";
import TabPane2ProgressElements from "./TabPane2ProgressElements";

const TabPane2Progress = ({ data }) => {
  return (
    <div className="flex flex-col mb-10">
      <span className="text-[#f9004d] font-bold text-sm tracking-widest">
        Features
      </span>
      <span className="text-[#c4cfde] font-bold text-4xl mt-2 mb-2">
        Web Development
      </span>
      {data.map((e) => {
        return (
          <React.Fragment Key={e.Key}>
            {" "}
            <TabPane2ProgressElements data={e} />{" "}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TabPane2Progress;
