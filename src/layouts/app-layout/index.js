import React from "react";
import Header from "Components/Header";
import MainContent from "Components/MainContent";
import Footer from "Components/Footer";
import Sticky from "react-sticky-el";

const AppLayout = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="w-full flex  justify-center">
        <div className="      w-8/12">
          <MainContent />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
