import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({selected, setSelected}) => {
   return (
      <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-cover">
         <div class="hero-content flex-col lg:flex-row-reverse gap-32">
            <img
               src={chair}
               class="w-[37.125rem] rounded-lg shadow-2xl"
               alt=""
            />
            <div>
               <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
               />
            </div>
         </div>
      </div>
   );
};

export default AppointmentBanner;
