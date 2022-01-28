import React from "react";
import "./BlogCard.css";

const BlogCard = ({ data }) => {
  return (
    <div className="mt-12">
      <div className="blog-card cursor-pointer  w-full h-full rounded-2xl p-8">
        <div className="w-full h-64 img-hover-zoom relative ">
          <img
            className="rounded-2xl absolute w-full h-full blog-img"
            src={data.Image}
            alt=""
          />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-xs font-semibold text-[#f9004d] tracking-wider">
            {data.Category}
          </span>
          <span className="text-xs font-medium text-[#878e99] ">
            <i class="far fa-clock"></i> {data.ReadTime}
          </span>
        </div>
        <div className="mt-2 text-2xl font-semibold text-[#c4cfde] mb-4   group">
          <span className="group-hover:text-[#f9004d] transition-all duration-500">
            {data.Title}
          </span>
          <span className="text-sm ml-1  opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#f9004d] ">
            <i class="fas fa-arrow-right  opacity-0 group-hover:opacity-100 -rotate-45 group-hover:scale-150 scale transition-all duration-[0.6s] "></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
