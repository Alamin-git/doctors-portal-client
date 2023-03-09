import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
   const { signIn } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/';

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const [loginError, setLoginError] = useState("");
   const handleLogin = (data) => {
      console.log(data);
      setLoginError("");
      signIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
         })
         .catch((error) => {
            console.log(error.messages);
            setLoginError(error.message);
         });
   };

   return (
      <div className="min-h-screen hero">
         <div>
            <div className="card w-full md:w-96 max-w-sm shadow-2xl">
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
                              minLength: {
                                 value: 6,
                                 message:
                                    "password must be 6 characters or longer",
                              },
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
                     {loginError && (
                           <p className="text-red-600" role="alert">
                              {loginError}
                           </p>
                        )}
                  </form>
                  <div className="mt-6">
                     <p>
                        New to Doctors Portal? {""}
                        <Link
                           to="/signUp"
                           className="link link-hover text-secondary"
                        >
                           Create new account
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

export default Login;
