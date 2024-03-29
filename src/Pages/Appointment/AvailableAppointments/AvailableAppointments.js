import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption/AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
   const [treatment, setTreatment] = useState(null);


   const date = format(selectedDate, 'PPP')

   // const [appointmentOptions, setAppointmentOptions] = useState([]);
   const { data: appointmentOptions, isLoading, refetch } = useQuery({
      queryKey: ["appointmentOptions", date],
      queryFn: async () => {
         const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
         const data = await res.json();
         return data;
      },
      // fetch("http://localhost:5000/appointmentOptions")
      // .then((res) => res.json())
   });

   if (isLoading) {
      return <Loading/>;
   }

   // useEffect(() => {
   // fetch("http://localhost:5000/appointmentOptions")
   //       .then((res) => res.json())
   //       .then((data) => setAppointmentOptions(data));
   // }, []);

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
                  setTreatment={setTreatment}
               ></AppointmentOption>
            ))}
         </div>
         {treatment && (
            <BookingModal
               selectedDate={selectedDate}
               treatment={treatment}
               setTreatment={setTreatment}
               refetch={refetch}
            ></BookingModal>
         )}
         {/* jehetu default value null deya hoiche tai condition deya holo, jodi treatment a kichu thake taholei modal asbe. eita na korle error dey. or default value [] dite hobe */}
      </section>
   );
};

export default AvailableAppointments;
