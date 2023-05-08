import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageDoctors = () => {
   const { data: doctors } = useQuery({
      queryKey: ["doctors"],
      queryFn: async () => {
         try {
            const res = await fetch("http://localhost:5000/doctors", {
               headers: {
                  authorization: `bearer ${localStorage.getItem(
                     "accessToken"
                  )}`,
               },
            });
            const data = await res.json();
            return data;
         } catch (error) {}
      },
   });

   return (
      <div>
         <h2 className="text-2xl mb-6">Manage Doctors : {doctors?.length}</h2>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Avatar</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Specialty</th>
                  </tr>
               </thead>
               <tbody>
                  {doctors.map((doctor , i) => (
                     <tr className="hover" key={doctor._id}>
                        <th>{i+1}</th>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img
                                       src={`${doctor.image}`}
                                       alt=""
                                    />
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td className="font-bold">{doctor.name}</td>
                        <td>{doctor.email}</td>
                        <td>{doctor.specialty}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageDoctors;
