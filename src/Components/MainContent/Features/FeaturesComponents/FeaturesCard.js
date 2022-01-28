import React from "react";
import "./FeaturesCard.css";

const FeaturesCard = ({ data }) => {
  return (
    <div className="">
      <a href="#!">
        <div className="features-card w-full h-full py-6 px-8">
          <div className="features-incard p-4 w-[100%] h-full">
            <div
              dangerouslySetInnerHTML={{ __html: data.Icon }}
              className=""
            ></div>

            <div className="mt-4 mb-6">
              <span className="text-[#c4cfde] font-bold text-2xl">
                {data.Title}
              </span>
            </div>
            <span className="text-[#c4cfde] font-medium text-base">
              {data.Desc}
            </span>
            <div className="mt-10">
              <span className="text-[#ff014f] text-xl chevron-opacity">
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturesCard;
