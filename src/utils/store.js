import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        liveChat: liveChatSlice,
        theme: themeSlice
    }
})

export default store