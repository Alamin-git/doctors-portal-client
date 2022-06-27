import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Login = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


   return (
      <div className="mt-16 h-screen">
         <div className="mx-auto max-w-sm p-5 border rounded-lg">
            <h2 className="text-2xl text-center mb-5 ">Login</h2>
            <div>
               <form action="">
                  <div class="form-control w-full ">
                     <label class="label">
                        <span class="label-text text-sm">Email</span>
                     </label>
                     <input type="email" class="input input-bordered w-full " />
                  </div>
                  <div class="form-control w-full ">
                     <label class="label">
                        <span class="label-text  text-sm">Password</span>
                     </label>
                     <input
                        type="password"
                        class="input input-bordered w-full "
                     />
                     <label class="label">
                        <span class="label-text-alt text-[.625rem]">
                           Forgot Password ?
                        </span>
                     </label>
                  </div>
                  <input
                     className="btn btn-accent w-full my-5 text-white"
                     type="submit"
                     value="LOGIN"
                  />
                  <p className="text-xs">
                     New to Doctors Portal?{" "}
                     <span className="text-primary my-3">
                        Create new account
                     </span>
                  </p>
               </form>
               <div class="divider">OR</div>
               <button onClick={() => signInWithGoogle()} className="btn w-full btn-outline">
                  CONTINUE WITH GOOGLE
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
