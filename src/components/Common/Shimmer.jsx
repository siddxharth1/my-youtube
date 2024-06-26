import React from "react";

const Shimmer = () => {
  return  Array(4).fill("").map((item) => {
    return <div className="m-2 p-2" key={Math.random()}>
      <div className="w-[19rem] mb-2 h-[170px] bg-slate-300 rounded-lg animate-pulse"></div>
      <div className="h-4 w-64 mb-2 bg-slate-300 rounded-xl animate-pulse"></div>
      <div className="w-20 h-4 mb-2 bg-slate-300 rounded-xl animate-pulse"></div>
      <div className="w-24 h-4 bg-slate-300 rounded-xl animate-pulse"></div>
    </div>;
  });
};

export default Shimmer;
