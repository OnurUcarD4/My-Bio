import React from "react";
import FeaturesCard from "./FeaturesComponents/FeaturesCard";
import FeaturesTitle from "./FeaturesComponents/FeaturesTitle";

const FeaturesData = [
  {
    Key: 1,
    Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className=""><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    Title: "Business Strategy",
    Desc: `I Throw myself down among the tall grass by the stream as I lie
  close to the earth.`,
  },
  {
    Key: 2,
    Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className=""><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    Title: "App Development",
    Desc: `It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.`,
  },
  {
    Key: 3,
    Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className=""><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>`,
    Title: "App Development",
    Desc: `I throw myself down among the tall grass by the stream as I lie close to the earth.`,
  },
  {
    Key: 4,
    Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className=""><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>`,
    Title: "Mobile App",
    Desc: `There are many variations of passages of Lorem Ipsum available, but the majority.`,
  },
  {
    Key: 5,
    Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
    Title: "CEO Marketing",
    Desc: `Always free from repetition, injected humour, or non-characteristic words etc.`,
  },
  {
    Key: 6,
    Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff014f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>`,
    Title: "Mobile App",
    Desc: `It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.`,
  },
];

const Features = () => {
  return (
    <div className="feature mb-24" id="features">
      <FeaturesTitle />
      <div className="mb-6 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {FeaturesData.map((e) => {
          return (
            <React.Fragment key={e.Key}>
              {" "}
              <FeaturesCard data={e} />{" "}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
