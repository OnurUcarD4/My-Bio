import SocialButtons from "Components/MainContent/MainComponents/SocialButtons";
import React from "react";

const Buttons = [
  {
    key: 1,
    image: "https://i.hizliresim.com/oyw2sbn.png",
    yonlendir: "https://www.facebook.com/onur.ucar61",
  },
  {
    key: 2,
    image: "https://i.hizliresim.com/1azi613.png",
    yonlendir: "https://www.instagram.com/d4nwyn",
  },
  {
    key: 3,
    image: "https://i.hizliresim.com/cr26fwy.png",
    yonlendir: "https://www.linkedin.com/in/onur-uçar-024b421b4/",
  },
];

const ContactCard = () => {
  return (
    <div>
      <div className="blog-card cursor-pointer  w-full h-full rounded-2xl p-8">
        <div className="w-full h-64 img-hover-zoom relative ">
          <img
            className="rounded-2xl absolute w-full h-full blog-img"
            src="https://inbio-react.netlify.app/static/5930a183f9be0c913e9d25b1318416f9/3a710/contact1.webp"
            alt=""
          />
        </div>
        <div className="mt-4 text-2xl flex flex-col font-semibold text-[#c4cfde] mb-4">
          <span className=" transition-all duration-500">Onur Uçar</span>
          <span className="text-base text-[#878e99] font-medium mt-2">
            Front-End Developer
          </span>
          <span className="text-base text-[#878e99] font-medium mt-2">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </span>
          <span className="text-base text-[#878e99] font-medium mt-2">
            Phone:{" "}
            <a
              className="text-current hover:text-current"
              href="tel:+905538563761"
            >
              <span className="hover:text-[#ff014f] text-[#c4cfde] duration-300  hover:scale-95">
                +905538563761
              </span>
            </a>
          </span>
          <span className="text-base text-[#878e99] font-medium mt-2">
            E-Mail:{" "}
            <a
              className="text-current hover:text-current"
              href="mailto:bauo.joe@gmail.com"
            >
              <span className="hover:text-[#ff014f] text-[#c4cfde] duration-300  hover:scale-95">
                bauo.joe@gmail.com
              </span>
            </a>
          </span>
          <span className="text-base text-[#878e99] font-medium mt-6">
            FIND WITH ME
          </span>
          <div className="flex gap-4">
            {Buttons.map((e) => {
              return <SocialButtons props={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
