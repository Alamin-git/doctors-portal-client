import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
   const [deletingDoctor, setDeletingDoctor] = useState(null);

   const closeModal = () =>{
      setDeletingDoctor(null)
   }

   const handelDeleteDoctor = doctor =>{
      console.log(doctor);
   }

   const { data: doctors, isLoading } = useQuery({
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
   if (isLoading) {
      return <Loading />;
   }

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
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {doctors.map((doctor, i) => (
                     <tr className="hover" key={doctor._id}>
                        <th>{i + 1}</th>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={`${doctor.image}`} alt="" />
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td className="font-bold">{doctor.name}</td>
                        <td>{doctor.email}</td>
                        <td>{doctor.specialty}</td>
                        <td>
                           <label
                              className="btn btn-xs btn-error"
                              htmlFor="confirmation_modal"
                              onClick={()=> setDeletingDoctor(doctor)}
                           >
                              Delete
                           </label>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         
         { 
            deletingDoctor && <ConfirmationModal
            title={'Are you sure you want to DELETE?'}
            message={`If you DELETE ${deletingDoctor.name}. It can't be undone`}
            closeModal={closeModal}
            successAction={handelDeleteDoctor}
            modalData={deletingDoctor}
            >
            </ConfirmationModal>
         }
      </div>
   );
};

export default ManageDoctors;
