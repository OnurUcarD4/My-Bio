import React from "react";
import SkillButtons from "./SkillButtons";

const Social = ({ Buttons }) => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <SkillButtons title="FIND WITH ME" data={Buttons.slice(0, 3)} />
      <SkillButtons title="BEST SKILL ON" data={Buttons.slice(3, 6)} />
    </div>
  );
};

export default Social;
