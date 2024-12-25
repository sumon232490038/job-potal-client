import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Register from "../pages/home/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/home/shared/JobDetails";
import PrivateRoute from "./PrivateRoute";
import Jobapply from "../pages/home/shared/Jobapply";
import MyApplications from "../pages/home/shared/MyApplications";
import Addjob from "../pages/addJobs/Addjob";
import MyPostedJob from "../myPostedJob/MyPostedJob";
import ViewApplications from "../pages/ViewApplicaitons/ViewApplications";

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
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/viewApplications/${params.job_id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <Jobapply></Jobapply>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/apply/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
