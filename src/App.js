import "./App.css";
import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

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
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* 
      1. Header
        1. Logo
        2. SearchBar
      2. Body
          1. Sidebar
            1. MenuItems
          2.MainContainer
            1. ButtonList
            2. VideoContainer
              1.VideoCard  
       */}
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
