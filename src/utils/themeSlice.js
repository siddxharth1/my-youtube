import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    // Check if the theme is stored in local storage
    const storedTheme = localStorage.getItem("theme");
    
    // If theme is stored, return it; otherwise, return the system theme
    return storedTheme ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: getInitialTheme()
    },
    reducers:{
        toggleTheme: (state)=>{
            state.isDarkTheme = !state.isDarkTheme;
            localStorage.setItem("theme", JSON.stringify(state.isDarkTheme));
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;