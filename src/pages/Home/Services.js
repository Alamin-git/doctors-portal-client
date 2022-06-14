import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
import ServiceHero from "./ServiceHero";

const Services = () => {
   const Services = [
      {
         _id: 1,
         img: fluoride,
         title: "Fluoride Treatment",
         body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
         _id: 2,
         img: cavity,
         title: "Cavity Filling",
         body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
         _id: 3,
         img: whitening,
         title: "Teeth Whitening",
         body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
   ];
   return (
      <div className="mt-32">
         <h3 className="text-xl text-secondary font-bold text-center">OUR SERVICES</h3>
         <h2 className="text-4xl text-center text-accent mb-16">Services We Provide</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Services.map((service) => (
               <Service key={service._id} service={service} />
            ))}
         </div>
         <ServiceHero/>
      </div>
   );
};

export default Services;
