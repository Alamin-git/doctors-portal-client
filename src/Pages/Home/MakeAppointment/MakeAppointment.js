import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
   return (
      <section className="mt-40" style={{ 
        backgroundImage: `url(${appointment})`,
        }}>
         <div className="hero lg:px-20">
            <div className="hero-content gap-6 flex-col lg:flex-row p-0">
               <img
                  src={doctor}
                  alt=""
                  className="lg:w-1/2 -mt-28 hidden lg:block"
               />
               <div className="w-1/2 py-14 lg:py-5">
                  <h4 className="text-xl text-primary font-bold mb-5">Appointment</h4>
                  <h1 className="text-4xl font-semibold text-white">
                     Make an appointment Today
                  </h1>
                  <p className="py-6 text-white">
                     It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking
                     at its layout. The point of using Lorem Ipsum is that it has
                     a more-or-less normal distribution of letters,as opposed to
                     using 'Content here, content here', making it look like
                     readable English. Many desktop publishing packages and web
                     page
                  </p>
                  <PrimaryButton>Get Started</PrimaryButton>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MakeAppointment;
