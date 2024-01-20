import React, { useState } from "react";

const VideoDescription = ({ desc }) => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div className="relative ">
      {showMore ? (
        <button
          aria-label="showmore"
          role="button"
          className={
            "absolute right-0 bottom-0 text-gray-500 mr-6 px-2 py-1 dark:bg-zinc-700 bg-slate-200 hover:text-black "
          }
          onClick={() => setShowMore(false)}
        >
          show more..
        </button>
      ) : (
        <button
          aria-label="showless"
          role="button"
          className={
            "absolute bottom-0 text-gray-500 ml-3 px-2 py-1 bg-slate-200 dark:bg-zinc-700 hover:text-black"
          }
          onClick={() => setShowMore(true)}
        >
          show less
        </button>
      )}
      <p
        className={`w-[928px] my-3 px-5 p-1 rounded-lg text-zinc-300 bg-slate-200 dark:bg-zinc-700 ${
          showMore ? ` overflow-hidden line-clamp-2` : `pb-7`
        }  `}
      >
        {desc}
      </p>
    </div>
  );
};

export default VideoDescription;
