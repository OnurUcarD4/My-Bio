import React from "react";
import { Progress } from "antd";

const TabPane2ProgressElements = ({ data }) => {
  return (
    <div>
      <div className="mt-2 justify-between flex">
        <span className="tracking-widest text-[#c3cedd]">{data.Title}</span>
        <span className="tracking-widest text-[#c3cedd]">{data.Percent}</span>
      </div>
      <Progress
        showInfo={false}
        strokeColor={{
          from: "#c81901",
          to: "#f02981",
        }}
        percent={data.AntdPercent}
        trailColor="#0e0e0e96"
        status="active"
      />
    </div>
  );
};

export default TabPane2ProgressElements;
