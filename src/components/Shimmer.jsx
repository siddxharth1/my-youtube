import React from "react";

const Shimmer = () => {
  return  Array(10).fill("").map((item) => {
    return <div className="m-2 mx-5 p-2" key={Math.random()}>
      <div className="w-80 mb-2 h-40 bg-slate-300 rounded-xl animate-pulse"></div>
      <div className="h-4 w-64 mb-2 bg-slate-300 rounded-xl animate-pulse"></div>
      <div className="w-16 h-4 mb-2 bg-slate-300 rounded-xl animate-pulse"></div>
      <div className="w-16 h-4 bg-slate-300 rounded-xl animate-pulse"></div>
    </div>;
  });
};

export default Shimmer;
