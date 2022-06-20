import { format } from "date-fns";

const BookingModal = ({ date, treatment }) => {
   const { name, slots } = treatment;
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
               <form className="grid grid-cols-1 gap-5 justify-items-center">
                  <input
                     disabled
                     type="text"
                     value={format(date, "PP")}
                     class="input input-bordered w-full max-w-xs"
                  />
                  <select class="select w-full max-w-xs">
                     {
                        slots.map(slot => <option>{slot}</option>)
                     }
                  </select>
                  <input
                     type="text"
                     placeholder="Full Name"
                     class="input input-bordered w-full max-w-xs"
                  />
                  <input
                     type="number"
                     placeholder="Phone Number"
                     class="input input-bordered w-full max-w-xs"
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     class="input input-bordered w-full max-w-xs"
                  />
                  <input
                     type="submit"
                     placeholder="Submit"
                     class="btn btn-accent input input-bordered w-full max-w-xs"
                  />
               </form>
            </div>
         </div>
      </div>
   );
};

export default BookingModal;
