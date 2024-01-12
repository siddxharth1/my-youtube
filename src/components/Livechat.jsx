import React, { useEffect, useRef } from "react";
import LivechatMessage from "./LivechatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import store from "../utils/store";

const Livechat = () => {
  const dispatch = useDispatch();
  let counter = 0;
  useEffect(() => {
    // const i = setInterval(() => {
    //   dispatch(
    //     addMessage({
    //       name: "sidharth" + counter,
    //       message: "shadhsadi" + counter,
    //     })
    //   );
    //   counter++;
    // }, 1000);
    // return () => clearInterval(i);
  }, []);

  const liveChatData = useSelector((store) => store.liveChat.messages);

  const chatMessage = useRef()

  const handleAddLiveChat=()=>{
    dispatch(addMessage({name: "Me", message: chatMessage.current.value}))
    chatMessage.current.value = ""
  }

  return (
    <div className="border border-gray-400 bg-gray-100  rounded-lg w-full ">
      <h1 className="font-bold text-xl border-b-[1px] p-3 border-gray-400">
        live chat
      </h1>

      <div className="p-2 h-[450px] overflow-auto flex flex-col-reverse">
        {liveChatData.map((chat) => {
          return <LivechatMessage {...chat} />;
        })}
      </div>

      <div className="m-1 p-1 pl-3 bg-gray-200 border border-gray-600 rounded-lg flex">
        <input
          type="text"
          className=" w-full bg-transparent outline-none "
          name=""
          id=""
          ref={chatMessage}
        />
        <button className="border border-gray-700 p-1 rounded bg-slate-400" onClick={()=>handleAddLiveChat()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Livechat;
