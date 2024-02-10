import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Userdetails from "../components/Userdetails/Userdetails";
import Notfound from "../components/Error404/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Userdetails></Userdetails>,
      },
      {
        path: "/*",
        element: <Notfound></Notfound>,
      },
    ],
  },
]);

export default router;
