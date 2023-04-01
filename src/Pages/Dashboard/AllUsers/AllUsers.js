import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
   const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/users");
         const data = await res.json();
         return data;
      },
   });
   return (
      <div>
         <div className="mb-5">
            <h2 className="text-2xl">All Users</h2>
         </div>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Job</th>
                     <th>Favorite Color</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, i) => (
                     <tr key={user._id}>
                        <th>{i + 1}</th>
                        <td>{user.name}</td>
                        <td>{<user className="email"></user>}</td>
                        <td>Blue</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllUsers;
