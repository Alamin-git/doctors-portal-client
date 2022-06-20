const Service = ({ service, setTreatment }) => {
   const { name, slots } = service;
   return (
      <div class="card bg-base-100 shadow-xl text-center">
         <div class="card-body">
            <h2 class="card-title text-primary justify-center text-lg">
               {name}
            </h2>
            <p>
               {slots.length > 0 ? (
                  <span>{slots[0]}</span>
               ) : (
                  <span className="text-red-500">Try another date</span>
               )}
            </p>
            <p>
               {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
            <div class="card-actions justify-center mt-5">
               <label
                  disabled={slots.length === 0}
                  for="booking-modal"
                  class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
                  onClick={() => setTreatment(service)}
               >
                  Book Appointment
               </label>
            </div>
         </div>
      </div>
   );
};

export default Service;
