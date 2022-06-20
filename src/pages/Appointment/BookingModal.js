import { format } from "date-fns";
import { useForm } from "react-hook-form";

const BookingModal = ({ date, treatment, setTreatment }) => {
   const { name, slots } = treatment;
   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      console.log(name,data);
      setTreatment(null)
   };

   return (
      <div>
         <input type="checkbox" id="booking-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
               <label
                  for="booking-modal"
                  class="btn btn-sm btn-circle absolute right-2 top-2 btn-accent text-white"
               >
                  ✕
               </label>
               <h3 class="font-bold text-lg mb-5 text-center">{name}</h3>
               <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                  <input
                     disabled
                     type="text"
                     value={format(date, "PP")}
                     class="input input-bordered w-full max-w-xs"
                  />
                  <select name="slot" class="select w-full max-w-xs" {...register("time")}>
                     {
                        slots.map(slot => <option>{slot}</option>)
                     }
                  </select>
                  <input
                     type="text"
                     placeholder="Full Name"
                     class="input input-bordered w-full max-w-xs"
                     {...register("name")}
                  />
                  <input
                     type="number"
                     placeholder="Phone Number"
                     class="input input-bordered w-full max-w-xs"
                     {...register("phone")}
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     class="input input-bordered w-full max-w-xs"
                     {...register("email")}
                  />
                  <input
                     type="submit"
                     placeholder="Submit"
                     class="btn btn-accent input input-bordered w-full max-w-xs text-white"
                  />
               </form>
            </div>
         </div>
      </div>
   );
};

export default BookingModal;
