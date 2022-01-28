import React from "react";
import { Divider } from "antd";

const ResumeCard = ({ data }) => {
  return (
    <div className="tab-card w-[90%] ml-4 mt-6 h-full mb-6 p-10 flex flex-col">
      <span className="text-[#c4cfde] text-lg font-bold">{data.Title}</span>
      <span className="mt-2 text-[#7c838e] text-xs">{data.Desc}</span>
      <Divider className="bg-[#121415] opacity-75" />
      <span className="text-[#878e99] text-base font-medium">
        {data.Paragraph}
      </span>
    </div>
  );
};

export default ResumeCard;
