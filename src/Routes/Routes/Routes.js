import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signUp",
            element: <SignUp />,
         },
         {
            path: "/appointment",
            element: <Appointment />,
         },
      ],
   },
   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <DashboardLayout></DashboardLayout>
         </PrivateRoute>
      ),
      children: [
         {
            path: "/dashboard",
            element: <MyAppointment></MyAppointment>,
         },
         {
            path: "/dashboard/all-users",
            element: (
               <AdminRoute>
                  <AllUsers></AllUsers>
               </AdminRoute>
            ),
         },
         {
            path: "/dashboard/add-doctor",
            element: (
               <AdminRoute>
                  <AddDoctor></AddDoctor>
               </AdminRoute>
            ),
         },
      ],
   },
]);

// export default router; we can export like this.
