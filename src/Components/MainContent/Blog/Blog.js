import React from "react";
import BlogCard from "./BlogComponents/BlogCard";
import BlogTitle from "./BlogComponents/BlogTitle";

const cardData = [
  {
    Key: 1,
    Image:
      "https://inbio-react.netlify.app/static/953f09919eb224ffd8d5ada9ac38150b/d0f18/blog-big-01.webp",
    Category: "CANADA",
    Title: "T-shirt design is the part of design",
    ReadTime: "2 min read",
  },
  {
    Key: 2,
    Image:
      "https://inbio-react.netlify.app/static/24178887690433586b7481f2588d4cad/d0f18/blog-02.webp",
    Category: "DEVELOPMENT",
    Title: "The services provide for design",
    ReadTime: "3 min read",
  },
  {
    Key: 3,
    Image:
      "https://inbio-react.netlify.app/static/4302dce3a785c626c0756545d42f860c/d0f18/blog-03.webp",
    Category: "APPLICATION",
    Title: "Mobile app landing design & app maintain",
    ReadTime: "2 min read",
  },
];

const Blog = () => {
  return (
    <div>
      <BlogTitle />
      <div className="lg:grid lg:grid-cols-3 justify-center gap-10">
        {cardData.map((e) => {
          return (
            <React.Fragment key={e.Key}>
              <BlogCard data={e} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
