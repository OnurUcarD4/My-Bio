import React from "react";
import TabPane2Progress from "./TabPane2Progress";

const ProgressData = [
  {
    Key: 1,
    Title: "HTML",
    Percent: "%90",
    AntdPercent: 90,
  },
  {
    Key: 2,
    Title: "CSS",
    Percent: "%80",
    AntdPercent: 80,
  },
  {
    Key: 3,
    Title: "JAVASCRIPT",
    Percent: "%40",
    AntdPercent: 40,
  },
  {
    Key: 4,
    Title: "REACT",
    Percent: "%70",
    AntdPercent: 70,
  },
  {
    Key: 5,
    Title: "TAILWINDCSS",
    Percent: "%95",
    AntdPercent: 95,
  },
];

const TabPane2 = () => {
  return (
    <div className="mt-4 grid grid-cols-2">
      <TabPane2Progress data={ProgressData} />
    </div>
  );
};

export default TabPane2;
