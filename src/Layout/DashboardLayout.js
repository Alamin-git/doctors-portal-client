import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   const [isAdmin] = useAdmin(user?.email);
   console.log(isAdmin);
   return (
      <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
            <input
               id="dashboard-drawer"
               type="checkbox"
               className="drawer-toggle"
            />
            <div className="drawer-content flex flex-col mx-8">
               <Outlet></Outlet>
            </div>
            <div className="drawer-side">
               <label
                  htmlFor="dashboard-drawer"
                  className="drawer-overlay"
               ></label>
               <ul className="menu p-4 w-80 text-base-content">
                  <li>
                     <Link to="/dashboard">My Appointment</Link>
                  </li>
                  {isAdmin && (
                     <>
                        <li>
                           <Link to="/dashboard/all-users">All Users</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/add-doctor">Add Doctor</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;
