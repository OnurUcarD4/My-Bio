import { Divider } from "antd";
import React from "react";
import "./ClientsCard.css";

const ClientsCard = ({ data }) => {
  return (
    <div className="tab-card  w-full  mt-6 h-full mb-6 flex flex-col justify-center items-center clients-card">
      <div className="items-center flex justify-center w-full h-full">
        <img className="" src={data.Image} alt="" />
      </div>
      <Divider className="bg-[#121415]" />
      <div className="mb-4">
        <span className="text-[#7c838e] text-lg clients">{data.Title}</span>
      </div>
    </div>
  );
};

export default ClientsCard;
