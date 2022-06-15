import React from "react";

const Review = ({ review }) => {
   return (
      <div className="card lg:max-w-lg bg-base-100 shadow-xl rounded p-3">
         <div className="card-body">
            <p>{review.body}</p>
            <div className="flex mt-12 item-center">
               <div className="avatar">
                  <div className="w-[4.688rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-6">
                     <img src={review.img} alt="" />
                  </div>
               </div>
               <div>
                  <h2 className="text-xl text-accent font-bold">
                     {review.name}
                  </h2>
                  <p>{review.location}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;
