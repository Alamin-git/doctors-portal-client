import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate,refetch }) => {
   const { name, slots } = treatment;
   const date = format(selectedDate, "PPP");
   const { user } = useContext(AuthContext);

   const handleBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      const slot = form.slot.value;
      const patientName = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const booking = {
         appointmentDate: date,
         treatment: name,
         patient: patientName,
         slot,
         email,
         phone,
      };

      fetch("http://localhost:5000/bookings", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(booking),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               setTreatment(null);
               toast.success("Booking Confirmed");
               refetch();
            }
            else{
               toast.error(data.message);
            }
         });
   };

   return (
      <>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
               <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
               >
                  ✕
               </label>
               <h3 className="text-lg font-bold mb-5">{name}</h3>
               <form
                  onSubmit={handleBooking}
                  className="grid grid-cols-1 gap-3 "
               >
                  <input
                     disabled
                     type="text"
                     value={date}
                     className="input w-full"
                  />
                  <select name="slot" className="select select-bordered w-full">
                     {slots.map((slot, i) => (
                        <option key={i} value={slot}>
                           {slot}
                        </option>
                     ))}
                  </select>
                  <input
                     name="name"
                     type="text"
                     defaultValue={user?.displayName}
                     disabled
                     placeholder="Your Name"
                     className="input input-bordered w-full"
                  />
                  <input
                     name="email"
                     type="email"
                     defaultValue={user?.email}
                     disabled
                     placeholder="Email Address"
                     className="input input-bordered w-full"
                  />
                  <input
                     name="phone"
                     type="number"
                     required
                     placeholder="Phone Number"
                     className="input input-bordered w-full"
                  />
                  <input
                     className="btn w-full bg-accent"
                     type="submit"
                     value="Submit"
                  />
               </form>
            </div>
         </div>
      </>
   );
};

export default BookingModal;
