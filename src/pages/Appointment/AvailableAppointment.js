import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const AvailableAppointment = ({ selected }) => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch("services.json")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div className="mx-11">
         <h2 className="text-primary text-center text-xl my-16">
            Available Services on {format(selected, "pp")}
         </h2>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                services.map(service => <Service key={service._id} service={service}/>)
            }
         </div>
      </div>
   );
};

export default AvailableAppointment;
