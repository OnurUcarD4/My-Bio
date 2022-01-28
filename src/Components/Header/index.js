import React, { useState } from "react";
import Sticky from "react-sticky-el";
import "./header.css";

const navmenu = [
  {
    key: 1,
    title: "HOME",
    href: "#home",
  },
  {
    key: 2,
    title: "FEATURES",
    href: "#features",
  },
  {
    key: 3,
    title: "PORTFOLIO",
    href: "#portfolio",
  },
  {
    key: 4,
    title: "RESUME",
    href: "#resume",
  },
  {
    key: 5,
    title: "CLIENTS",
    href: "#clients",
  },
  {
    key: 6,
    title: "PRICING",
    href: "#pricing",
  },
  {
    key: 7,
    title: "BLOG",
    href: "#blog",
  },
  {
    key: 8,
    title: "CONTACT",
    href: "#contact",
  },
];
const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Sticky onFixedToggle={(e) => setIsToggle(!isToggle)}>
      <div className={`header-css  ${isToggle ? "header-shadow" : ""}`}>
        <div className="flex items-center ">
          <div
            className={`${
              isToggle ? "w-14 h-14  " : "w-16 h-16"
            } relative transition-all duration-500  rounded-full border-[3px] border-zinc-700  `}
          >
            <img
              className={`absolute rounded-full w-full h-full object-cover`}
              src="https://i.hizliresim.com/yfrascw.png"
              alt=""
            />
          </div>

          <span className="name">ONUR UÇAR</span>
        </div>
        <div className="hidden xl:flex xl:gap-10 text-gray-400  text-xs tracking-widest items-center">
          {navmenu.map((e) => {
            return (
              <a
                className="hover:text-white text-current transition-colors duration-200"
                key={e.key}
                href={e.href}
              >
                {e.title}
              </a>
            );
          })}
          <a href="#pricing">
            <button className="buy-button p-4 w-10 lg:w-40 text-[#ff014f] font-bold px-8  ">
              BUY NOW
            </button>
          </a>
        </div>
        <div className="xl:hidden "></div>
      </div>
    </Sticky>
  );
};

export default Header;
