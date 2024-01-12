import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: []
    },
    reducers:{
        addMessage: (state, action)=>{
            // if(state.messages.length>100){
            //     state.messages.pop()
            // }

            state.messages.splice(LIVE_CHAT_COUNT,1)
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMessage} = liveChatSlice.actions
export default liveChatSlice.reducer;