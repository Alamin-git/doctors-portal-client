import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
   const { name, slots } = appointmentOption;
   return (
      <div className="card w-auto bg-base-100 shadow-xl">
         <div className="card-body items-center text-center">
            <h2 className="card-title text-xl text-secondary font-semibold">
               {name}
            </h2>
            <p>
               {slots.length > 0 ? slots[0] : "Try Another Day"}
               {/* jodi 1 ta length / space o na thake tahole try another day dekhabe */}
            </p>
            <p>
               {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
            {/* length jodi 1 er beshi hoi tahole spaces dekhabe ar jodi 1 ba tar kom hoi tahole space dekhabe*/}
            <div className="card-actions mt-10">
               <label
                  disabled ={slots.length === 0}
                  onClick={() => setTreatment(appointmentOption)}
                  htmlFor="booking-modal"
                  className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm"
               >
                  Book Appointment
               </label>
            </div>
         </div>
      </div>
   );
};

export default AppointmentOption;
