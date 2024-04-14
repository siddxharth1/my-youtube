import { Suspense, lazy, useState } from "react";
import Header from "./components/Common/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/VideosPage/WatchPage";
import MainContainer from "./components/Home/MainContainer";
import Error from "./components/Error";
// import SearchResult from "./components/SearchResultPage/SearchResult";
// import Playlist from "./components/PlaylistPage/Playlist";

const SearchResult = lazy(() =>
  import("./components/SearchResultPage/SearchResult")
);
const Playlist = lazy(() => import("./components/PlaylistPage/Playlist"));
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: (
            <Suspense>
              <SearchResult />
            </Suspense>
          ),
        },
        {
          path: "playlist",
          element: (
            <Suspense>
              <Playlist />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
