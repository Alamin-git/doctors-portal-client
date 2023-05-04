import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";


const AddDoctor = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();
   const handleAddDoctors = (data) => {
      console.log(data);
   };

   const { data: specialties , isLoading} = useQuery({ //data: new name
      queryKey: ["specialty"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/appointmentSpecialty");
         const data = await res.json();
         return data;
      },
   });
   if (isLoading){
    return <Loading></Loading>
   }

   return (
      <div className="w-96 p-7">
         <h2 className="text-2xl mb-6">Add a Doctor</h2>
         <form onSubmit={handleSubmit(handleAddDoctors)}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Name</span>
               </label>
               <input
                  type="text"
                  {...register("name", {
                     required: "Name is required",
                  })}
                  className="input input-bordered"
               />
               {errors.name && (
                  <p className="text-red-600" role="alert">
                     {errors.name?.message}
                  </p>
               )}
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input
                  type="email"
                  {...register("email", {
                     required: "Email is required",
                  })}
                  className="input input-bordered"
               />
               {errors.email && (
                  <p className="text-red-600" role="alert">
                     {errors.email?.message}
                  </p>
               )}
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Specialty</span>
               </label>
               <select
                  {...register("specialty")}
                   className="select select-bordered w-full">
                  {
                    specialties.map( specialty => <option
                        key={specialty._id}
                        value={specialty.name}
                    >{specialty.name}</option>)
                  }
               </select>
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Photo</span>
               </label>
               <input
                  type="file"
                  {...register("img", {
                     required: "Photo is required",
                  })}
                  className="input input-bordered"
               />
               {errors.file && (
                  <p className="text-red-600" role="alert">
                     {errors.file?.message}
                  </p>
               )}
            </div>
            <div className="form-control mt-6">
               <input
                  className="btn btn-accent"
                  value="Add Doctor"
                  type="submit"
               />
            </div>
         </form>
      </div>
   );
};

export default AddDoctor;
