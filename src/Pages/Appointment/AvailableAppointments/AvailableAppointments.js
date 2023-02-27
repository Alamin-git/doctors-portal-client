import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
   return (
      <div className="mt-20">
         <p className="text-center text-xl text-secondary">
            Available Services on {format(selectedDate, "PPP")}
         </p>
      </div>
   );
};

export default AvailableAppointments;
