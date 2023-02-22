import React from "react";

const Review = ({ review }) => {
   const { name, img, location, review: userReview } = review;
   return (
      <div className="card shadow-xl">
         <div className="card-body">
            <p>{userReview}</p>
            <div className="card-actions mt-5 items-center gap-4">
               <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                     <img src={img} alt="" />
                  </div>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <h3 className="">{location}</h3>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;
