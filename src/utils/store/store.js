import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import liveChatSlice from "./slices/liveChatSlice";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        liveChat: liveChatSlice,
        theme: themeSlice
    }
})

export default store