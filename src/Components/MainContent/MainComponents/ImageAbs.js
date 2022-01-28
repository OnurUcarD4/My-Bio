import React from "react";

const ImageAbs = () => {
  return (
    <div className="xl:relative xl:block hidden  img-abs  xl:col-span-4  xl:h-full xl:mx-5  ">
      <div className="w-full mt-32 bg-[#212428] rounded-md h-[23rem] "></div>
      <img
        className="absolute bottom-0 left-0 object-cover rounded-md  w-full h-[38rem]"
        src="https://i.hizliresim.com/fdcsgca.png"
        alt=""
      />
    </div>
  );
};

export default ImageAbs;
