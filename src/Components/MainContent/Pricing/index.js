import React from "react";
import PricingTab from "./PricingComponents/PricingTab";
import PricingTitle from "./PricingComponents/PricingTitle";

const index = () => {
  return (
    <div id="pricing" className="lg:grid lg:grid-cols-3 scroll-m-40">
      <PricingTitle />
      <div className="col-span-2">
        <PricingTab />
      </div>
    </div>
  );
};

export default index;
