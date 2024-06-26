import React, { useEffect, useRef, useState } from "react";
import LivechatMessage from "./LivechatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/store/slices/liveChatSlice";
import store from "../../utils/store/store";

const Livechat = () => {
  const dispatch = useDispatch();
  const [startLiveChat, setStartLiveChat] = useState(true);
  const [showLiveChat, setShowLiveChat] = useState(true);
  let counter = useRef(0);
  useEffect(() => {
    if (startLiveChat) {
      const i = setInterval(() => {
        dispatch(
          addMessage({
            name: "sidharth" + counter.current,
            message: "shadhsadi" + counter.current,
          })
        );
        counter.current++;
      }, 1000);
      return () => clearInterval(i);
    }
  }, [startLiveChat]);

  const liveChatData = useSelector((store) => store.liveChat.messages);
  const chatMessage = useRef();

  const handleAddLiveChat = (e) => {
    e.preventDefault();
    if (chatMessage.current.value !== "") {
      dispatch(addMessage({ name: "Me", message: chatMessage.current.value }));
      chatMessage.current.value = "";
    }
  };

  const toggleShowChat = () => {
    setShowLiveChat(!showLiveChat);
  };

  const liveChatHandler = () => {
    setStartLiveChat(!startLiveChat);
  };

  return (
    <div className=" border border-gray-400 bg-gray-100  rounded-lg w-full dark:bg-zinc-900">
      <div className=" p-3 border-b-[1px] border-gray-400 flex justify-between">
        <h1 className="font-bold text-xl">live chat</h1>
        {startLiveChat ? (
          <button
            aria-label="livechat"
            role="button"
            className="border border-black rounded px-2"
            onClick={() => liveChatHandler()}
          >
            Stop live chat
          </button>
        ) : (
          <button
            aria-label="livechat"
            role="button"
            className="border border-black rounded px-2"
            onClick={() => liveChatHandler()}
          >
            Start live chat
          </button>
        )}
      </div>

      {showLiveChat && (
        <>
          <div className="p-2 h-[450px] overflow-auto flex flex-col-reverse">
            {liveChatData.map((chat) => {
              return <LivechatMessage {...chat} />;
            })}
          </div>

          <form
            className="m-1 p-1 pl-3 bg-gray-200 border border-gray-600 rounded-lg flex dark:bg-zinc-700"
            onSubmit={handleAddLiveChat}
          >
            <input
              type="text"
              className=" w-full bg-transparent outline-none"
              name=""
              id=""
              ref={chatMessage}
            />
            <button
              aria-label="send"
              role="button"
              className="border border-gray-700 p-1 rounded bg-slate-400"
            >
              Send
            </button>
          </form>
        </>
      )}
      <div className="m-2">
        <button
          className="p-1 rounded-full w-full border border-white hover:bg-zinc-800"
          onClick={toggleShowChat}
        >
          Show live chat
        </button>
      </div>
    </div>
  );
};

export default Livechat;
