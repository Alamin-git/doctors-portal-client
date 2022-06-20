
const Service = ({ service, setTreatment }) => {
   return (
      <div class="card bg-base-100 shadow-xl text-center">
         <div class="card-body">
            <h2 class="card-title text-primary justify-center text-lg">
               {service.name}
            </h2>
            <p>{service.slots[1]}</p>
            <div class="card-actions justify-center mt-8">
               <label
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
