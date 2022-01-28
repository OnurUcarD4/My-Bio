import React from "react";
import "./Pricing.css";
import { Tabs } from "antd";
import Tab1 from "./Tabs/Tab1";

const { TabPane } = Tabs;

const pricingtabData = [
  {
    Key: 1,
    TabTitle: "Basic",
    Title: "Make Your Single Page",
    Price: "$30.00",
    Category: "Elementor",
    Desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
  },
  {
    Key: 2,
    TabTitle: "Standard",
    Title: "Design Make This Page",
    Price: "$50.00",
    Category: "Elementor",
    Desc: "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.",
  },
  {
    Key: 3,
    TabTitle: "Premium",
    Title: "Customize Your Single Page",
    Price: "$90.00",
    Category: "Elementor",
    Desc: "I will install your desire theme and made like Theme demo and customize your single page (Homepage)",
  },
];

const PricingTab = () => {
  return (
    <div className="pricing-tab rounded-lg">
      <Tabs
        tabBarGutter={-3}
        defaultActiveKey={pricingtabData[0].Key}
        className="w-full rounded-lg"
      >
        {pricingtabData.map((e) => {
          return (
            <React.Fragment>
              <TabPane className="p-4 pl-8" tab={e.TabTitle} key={e.Key}>
                <Tab1 data={e} />
              </TabPane>
            </React.Fragment>
          );
        })}
      </Tabs>
    </div>
  );
};

export default PricingTab;
