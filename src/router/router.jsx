import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Register from "../pages/home/shared/Register";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
