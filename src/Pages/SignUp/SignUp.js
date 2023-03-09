import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
   const { createUser,updateUser } = useContext(AuthContext);
   const [signUpError, setSignUpError] = useState('');

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const handleSignUp = (data) => {
      setSignUpError('')
      console.log(data);
      createUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            toast('User created successfully')
            console.log(user);
            const userInfo = {
               displayName:data.name
            }
            updateUser(userInfo)
            .then(() =>{})
            .catch((err) => console.log(err))
         })
         .catch((error) => {
            setSignUpError(error.message)
            console.log(error)});
   };

   

   return (
      <div className="min-h-screen hero">
         <div>
            <div className="card w-full md:w-96 max-w-sm shadow-2xl">
               <div className="card-body">
                  <h2 className="text-center text-xl font-bold">Sign Up</h2>
                  <form onSubmit={handleSubmit(handleSignUp)}>
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
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           {...register("password", {
                              required: "Password is required",
                              minLength: {
                                 value: 8,
                                 message:
                                    "password must be 8 characters or longer",
                              },
                              pattern: {
                                 value: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}/,
                                 message: "Password have to be strong",
                              },
                           })}
                           className="input input-bordered"
                        />
                        {errors.password && (
                           <p className="text-red-600" role="alert">
                              {errors.password?.message}
                           </p>
                        )}
                     </div>
                     <div className="form-control mt-6">
                        <input
                           className="btn btn-accent"
                           value="Sign Up"
                           type="submit"
                        />
                     </div>
                     {signUpError && (
                           <p className="text-red-600" role="alert">
                              {signUpError}
                           </p>
                        )}
                  </form>
                  <div className="mt-6">
                     <p>
                        Already have an account? {""}
                        <Link
                           to="/login"
                           className="link link-hover text-secondary"
                        >
                           Login
                        </Link>
                     </p>
                  </div>
                  <div className="divider">OR</div>
                  <button className="btn btn-outline">
                     CONTINUE WITH GOOGLE
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
