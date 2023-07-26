import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllUsers = () => {
   const [deletingUser, setDeletingUser] = useState(null);
   console.log(deletingUser);
   const closeModal = () => {
      setDeletingUser(null);
   };

   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/users");
         const data = await res.json();
         return data;
      },
   });

   const handelMakeAdmin = (id) => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
         method: "PUT",
         headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               toast.success("Make admin successful.");
               refetch();
            }
         });
   };

   const handelDeleteUser = (user) => {
      fetch(`http://localhost:5000/users/${user._id}`, {
         method: "DELETE",
         headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if(data.deletedCount > 0){
               refetch()
               toast.success( `User ${user.name} deleted successfully`)
            }
         });
   };

   return (
      <div>
         <div className="mb-5">
            <h2 className="text-2xl mb-6">All Users</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Admin</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, i) => (
                     <tr key={user._id}>
                        <th>{i + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                           {user?.role !== "admin" && (
                              <button
                                 onClick={() => handelMakeAdmin(user._id)}
                                 className="btn btn-xs btn-primary"
                              >
                                 Make Admin
                              </button>
                           )}
                        </td>
                        <td>
                           <label
                              className="btn btn-xs btn-warning"
                              htmlFor="confirmation_modal"
                              onClick={() => setDeletingUser(user)}
                           >
                              Delete
                           </label>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {deletingUser && (
            <ConfirmationModal
               title={"Are you sure? You want to DELETE?"}
               message={`If you Delete ${deletingUser.name}. It can't be undone.`}
               successButtonName="Delete"
               closeModal={closeModal}
               successAction={handelDeleteUser}
               modalData={deletingUser}
            ></ConfirmationModal>
         )}
      </div>
   );
};

export default AllUsers;
