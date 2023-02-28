import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
   return (
      <div
         className="hero py-16"
         style={{
            backgroundImage: `url(${appointment})`,
         }}
      >
         <div className="hero-content mx-5">
            <div className="card w-full  max-w-md">
               <div className="text-center">
                  <h4 className="text-primary text-xl font-bold">Contact Us</h4>
                  <h2 className="text-4xl text-white">
                     Stay connected with us
                  </h2>
               </div>
               <div className="card-body p-0 mt-10">
                  <div className="form-control">
                     <input
                        type="text"
                        placeholder="Email Address"
                        className="input input-bordered"
                     />
                  </div>
                  <div className="form-control">
                     <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered"
                     />
                  </div>
                  <div className="form-control">
                     <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Your message"
                     ></textarea>
                  </div>
                  <div className="form-control">
                     <PrimaryButton>Submit</PrimaryButton>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
