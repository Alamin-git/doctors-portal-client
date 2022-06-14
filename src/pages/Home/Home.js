import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
   return (
      <>
         <div className="mx-11">
            <Banner />
            <Info />
            <Services />
         </div>
         <>
            <MakeAppointment />
         </>
         <div className="mx-11">
             <Testimonial/>
         </div>
      </>
   );
};

export default Home;
