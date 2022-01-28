import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Desc from "./Desc";
import ImageAbs from "./ImageAbs";
import "./MainTitle.css";
import ReactType from "./ReactType";
import SkillButtons from "./SkillButtons";
import Social from "./Social";
import SocialButtons from "./SocialButtons";
import Title from "./Title";

const MainTitle = () => {
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
    {
      key: 4,
      image:
        "https://inbio-react.netlify.app/static/27bcf2059d533d3e63cab931682364bf/b529c/icons-01.webp",
      yonlendir: "",
    },
    {
      key: 5,
      image:
        "https://inbio-react.netlify.app/static/75c0b7c01df1ddb420d9dcad9cd7ea30/71e7c/icons-02.webp",
      yonlendir: "",
    },
    {
      key: 6,
      image:
        "https://inbio-react.netlify.app/static/79d576fbc92699097ecb8d44396d0d31/fa9ef/icons-03.webp",
      yonlendir: "",
    },
  ];

  return (
    <div className="mt-24 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Title />
        <ReactType />
        <Desc />
        <Social Buttons={Buttons} />
      </div>
      <ImageAbs />
    </div>
  );
};

export default MainTitle;
