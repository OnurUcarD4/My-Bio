import React from "react";

const ListData = [
  {
    Key: 1,
    Title: "1 Page with Elementor",
    IsTrue: true,
  },
  {
    Key: 2,
    Title: "multipage Elementor",
    IsTrue: true,
  },
  {
    Key: 3,
    Title: "Design Customization",
    IsTrue: true,
  },
  {
    Key: 4,
    Title: "Design Figma",
    IsTrue: false,
  },
  {
    Key: 5,
    Title: "Responsive Design",
    IsTrue: true,
  },
  {
    Key: 6,
    Title: "Maintaine Design",
    IsTrue: true,
  },
  {
    Key: 7,
    Title: "Content Upload",
    IsTrue: true,
  },
  {
    Key: 8,
    Title: "Content Design",
    IsTrue: false,
  },
  {
    Key: 9,
    Title: "Design Customization",
    IsTrue: true,
  },
  {
    Key: 10,
    Title: "Design With XD",
    IsTrue: false,
  },
  {
    Key: 11,
    Title: "2 Plugins/Extensions",
    IsTrue: true,
  },
  {
    Key: 12,
    Title: "8 Plugins/Extensions",
    IsTrue: false,
  },
];

const Tab1 = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-[#c4cfde] text-3xl font-bold">{data.Title}</span>
        <div className="price shadow-md px-6 py-3 rounded-md">
          <span className="text-[#ff014f] font-bold text-3xl">
            {data.Price}
          </span>
        </div>
      </div>
      <div className="text-lg w-4/5 gap-3 flex flex-col tracking-wide text-[#7c838e]">
        <span>{data.Category}</span>
        <span>{data.Desc}</span>
      </div>
      <div className="mt-4 mb-16 text-lg text-[#c4cfde] grid grid-cols-2 gap-4">
        {ListData.map((e) => {
          return (
            <div className="flex">
              {e.IsTrue ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
              <span>{e.Title}</span>
            </div>
          );
        })}
      </div>
      <a className="text-current hover:text-current" href="">
        <div className="flex text-[#ff014f] text-lg font-semibold justify-center  rounded-md py-4 cursor-pointer order mb-2">
          <span>ORDER NOW</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-xs text-[#9ca5b1]">
          <i class="far fa-clock"></i>
          <span>2 Days Delivery</span>
          <i class="fas fa-bolt"></i>
          <span>Unlimited Revission</span>
        </div>
      </a>
    </div>
  );
};

export default Tab1;
