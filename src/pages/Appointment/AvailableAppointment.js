import { format } from "date-fns";
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
   const [services, setServices] = useState([]);
   const [treatment, setTreatment] = useState(null);

   useEffect(() => {
      fetch("http://localhost:5000/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div className="mx-11 mb-10">
         <h2 className="text-primary text-center text-xl my-16">
            Available Services on {format(date, "PP")}
         </h2>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((service) => (
               <Service
                  key={service._id}
                  service={service}
                  setTreatment={setTreatment}
               />
            ))}
         </div>
         {treatment && (
            <BookingModal
               date={date}
               treatment={treatment}
               setTreatment={setTreatment}
            />
         )}
      </div>
   );
};

export default AvailableAppointment;
