import React from "react";
import SocialButtons from "./SocialButtons";

const SkillButtons = ({ data, title }) => {
  return (
    <div className="text-[#c4cfde] mt-14 tracking-wider flex flex-col ">
      <span>{title}</span>
      <div className="flex gap-10  ">
        {data.map((e) => {
          return (
            <React.Fragment key={e.key}>
              <SocialButtons props={e} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillButtons;
