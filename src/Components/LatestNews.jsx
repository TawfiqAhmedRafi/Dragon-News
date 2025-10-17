import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex gap-6 ">
          <p className="font-bold">Lorem ipsum dolor sit amet.</p>
          <p className="font-bold">Lorem ipsum dolor sit amet.</p>
          <p className="font-bold">Lorem ipsum dolor sit amet.</p>
          <p className="font-bold">Lorem ipsum dolor sit amet.</p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
