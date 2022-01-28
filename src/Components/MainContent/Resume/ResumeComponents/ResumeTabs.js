import React from "react";
import { Tabs } from "antd";
import "./ResumeTabs.css";
import TabPane1 from "./TabPane1";
import TabPane1Title from "./TabPane1Title";
import TabPane2 from "./TabPane2";
import TabPane3 from "./TabPane3";
import TabPane3Title from "./TabPane3Title";
import TabPane4Title from "./TabPane4Title";

const { TabPane } = Tabs;

const ResumeCardData = [
  {
    Key: 1,
    Title: "Computer Programming",
    Desc: "University Of Akdeniz (2021-2023)",
    Paragraph:
      "Education should be very interactive. I am progressing by improving this education with my studies. I spend a lot of my time developing on the Web.",
  },
  {
    Key: 2,
    Title: "Laboratory Information",
    Desc: "University Of Akdeniz (2019-2020)",
    Paragraph:
      "The university department I studied before considering a computer related job. Even if I don't have a diploma, I have knowledge.",
  },
];

const ResumeTabs = () => {
  return (
    <div className="mt-4">
      <Tabs tabBarGutter={-3} defaultActiveKey="1" className="w-full">
        <TabPane tab="Education" key="1">
          <TabPane1Title />
          <div className="lg:grid lg:grid-cols-2">
            {ResumeCardData.map((e) => {
              return (
                <React.Fragment key={e.Key}>
                  <TabPane1 data={e} />
                </React.Fragment>
              );
            })}
          </div>
        </TabPane>
        <TabPane tab="Professional Skills" key="2">
          <TabPane2 />
        </TabPane>
        <TabPane tab="Experience" key="3">
          <TabPane3Title />
          <div className="lg:grid lg:grid-cols-2">
            {ResumeCardData.map((e) => {
              return (
                <React.Fragment key={e.Key}>
                  <TabPane1 data={e} />
                </React.Fragment>
              );
            })}
          </div>
        </TabPane>
        <TabPane tab="Interview" key="4">
          <TabPane4Title />
          <div className="lg:grid lg:grid-cols-2">
            {ResumeCardData.map((e) => {
              return (
                <React.Fragment key={e.Key}>
                  <TabPane1 data={e} />
                </React.Fragment>
              );
            })}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ResumeTabs;
