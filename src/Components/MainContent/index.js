import React from "react";
import MainTitle from "./MainComponents/MainTitle";
import { Divider } from "antd";
import Features from "./Features/Features";
import { BackTop } from "antd";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import ClientsTab from "./ClientsTab";
import Pricing from "./Pricing";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

const index = () => {
  return (
    <div>
      <div className="mb-40 ">
        <MainTitle />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-40">
        <Features />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-40 ">
        <Portfolio />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-24">
        <Resume />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-24">
        <ClientsTab />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-24">
        <Pricing />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-24">
        <Blog />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mt-24 mb-24">
        <Contact />
      </div>
      <BackTop />
    </div>
  );
};

export default index;
