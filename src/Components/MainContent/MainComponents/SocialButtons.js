import React from "react";

const SocialButtons = ({ props }) => {
  return (
    <button className="social-button p-4 w-14  font-bold mt-4  ">
      <a href={props.yonlendir}>
        <img
          className="opacity-80 h-6 w-6 object-contain "
          src={props.image}
          alt=""
        />
      </a>
    </button>
  );
};

export default SocialButtons;
