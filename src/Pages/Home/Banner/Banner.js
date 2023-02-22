import React from "react";
import chairBg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
   return (
      <div
         className="hero min-h-screen"
         style={{
            backgroundImage: `url(${chairBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
      >
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img
               src={chair}
               className="lg:w-1/2 sm:mb-6 md:mb-6 rounded-lg shadow-2xl"
               alt=""
            />
            <div>
               <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
               <p className="py-6">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
               </p>
               <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
         </div>
      </div>
   );
};

export default Banner;
