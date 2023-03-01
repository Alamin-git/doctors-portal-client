import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const handleLogin = (data) => {
      console.log(data);
   };
   return (
      <div className="min-h-screen hero">
         <div>
            <div className="card w-full max-w-sm shadow-2xl">
               <div className="card-body">
                  <h2 className="text-center text-xl font-bold">Login</h2>
                  <form onSubmit={handleSubmit(handleLogin)}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           {...register("email", {
                              required: "email is required",
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
                              required: "password is required",
                              minLength: {value:6, message:'password must be 6 characters or longer'},
                           })}
                           className="input input-bordered"
                        />
                        {errors.password && (
                           <p className="text-red-600" role="alert">
                              {errors.password?.message}
                           </p>
                        )}
                        <label className="label">
                           <a
                              href="/"
                              className="label-text-alt link link-hover"
                           >
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <input
                           className="btn btn-accent"
                           value="Login"
                           type="submit"
                        />
                     </div>
                  </form>
                  <div className="mt-6">
                     <p>
                        New to Doctors Portal? {""}
                        <a href="/" className="link link-hover text-secondary">
                           Create new account
                        </a>
                     </p>
                  </div>
                  <div className="divider">OR</div>
                  <button>CONTINUE WITH GOOGLE</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
