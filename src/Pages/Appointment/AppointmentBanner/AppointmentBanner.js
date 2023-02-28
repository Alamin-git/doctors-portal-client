import React from "react";
import { DayPicker } from "react-day-picker";
import chairBg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

   return (
      <header
         style={{
            backgroundImage: `url(${chairBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
      >
         <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-28">
               <img
                  src={chair}
                  className="lg:w-1/2 sm:mb-6 md:mb-6 rounded-lg shadow-2xl"
                  alt=""
               />
               <div>
                  <DayPicker
                     mode="single"
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                  />
               </div>
            </div>
         </div>
      </header>
   );
};

export default AppointmentBanner;
