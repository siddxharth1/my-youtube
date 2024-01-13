import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResult from "./components/SearchResult";
import Playlist from "./components/Playlist";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage/>
        },
        {
          path: "results",
          element: <SearchResult/>
        },
        {
          path: "playlist",
          element: <Playlist/>
        }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </Provider>
  );
}

export default App;
