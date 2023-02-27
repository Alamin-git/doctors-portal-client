import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption/AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
   const [appointmentOptions, setAppointmentOptions] = useState([]);
   useEffect(() => {
      fetch("appointmentOptions.json")
         .then((res) => res.json())
         .then((data) => setAppointmentOptions(data));
   }, []);
   return (
      <section className="mt-20 ">
         <p className="text-center text-xl text-secondary">
            Available Services on {format(selectedDate, "PPP")}
         </p>
         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mb-40">
            {appointmentOptions.map((option) => (
               <AppointmentOption
                  key={option._id}
                  appointmentOption={option}
               ></AppointmentOption>
            ))}
         </div>
      </section>
   );
};

export default AvailableAppointments;
