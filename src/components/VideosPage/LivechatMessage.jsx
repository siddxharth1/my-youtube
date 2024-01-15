import React from "react";

const LivechatMessage = ({name, message}) => {
    console.log(name);
    console.count(message);
  return (
    <div className="flex gap-2 items-center mb-2 p-1 border border-gray-600 rounded-md">
      <img
        className="h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div>
        <span className="mr-2 font-semibold">{name}</span>
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default LivechatMessage;
