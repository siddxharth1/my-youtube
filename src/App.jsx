import { useState } from "react";
import Header from "./components/Common/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/VideosPage/WatchPage";
import MainContainer from "./components/Home/MainContainer";
import SearchResult from "./components/SearchResultPage/SearchResult";
import Playlist from "./components/PlaylistPage/Playlist";

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
