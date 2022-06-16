import React from "react";

const Service = ({ service }) => {
   return (
      <div class="card bg-base-100 shadow-xl text-center">
         <div class="card-body">
            <h2 class="card-title text-primary justify-center text-lg">{service.name}</h2>
            <p>{service.slots[1]}</p>
            <div class="card-actions justify-center mt-8">
               <button class="btn btn-primary">Book Appointment</button>
            </div>
         </div>
      </div>
   );
};

export default Service;
