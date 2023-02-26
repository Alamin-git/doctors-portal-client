import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service/Service";

const Services = () => {
   const serviceData = [
      {
         id: 1,
         name: "Fluoride Treatment",
         description:
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         icon: fluoride,
      },
      {
         id: 2,
         name: "Cavity Filling",
         description:
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         icon: cavity,
      },
      {
         id: 3,
         name: "Teeth Whitening",
         description:
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         icon: whitening,
      },
   ];
   return (
      <div className="my-32 mx-5">
         <div className="text-center mb-16">
            <h2 className="text-xl text-primary font-bold">OUR SERVICES</h2>
            <h4 className="text-4xl font-normal">Services We Provide</h4>
         </div>
         <div className="grid gap-9 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {serviceData.map((service) => (
               <Service key={service.id} service={service}></Service>
            ))}
         </div>
      </div>
   );
};

export default Services;
