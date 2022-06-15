import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";

const MakeAppointment = () => {
   return (
      <div
         className="flex justify-center items-center mb-20"
         style={{ backgroundImage: `url(${appointment})` }}
      >
         <div className="flex-1 ml-11 px-8  hidden lg:block">
            <img src={doctor} className="w-[37.875rem] mt-[-100px]" />
         </div>
         <div className="flex-1 py-12 text-center mx-12 lg:mr-11 lg:text-left">
            <h1 className="text-xl font-bold text-primary my-4">Appointment</h1>
            <h2 className="text-4xl text-white">Make an appointment Today</h2>
            <p className="py-6 text-white">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque aut
               repudiandae et a id nisi.
            </p>
            <PrimaryBtn>GET STARTED</PrimaryBtn>
         </div>
      </div>
   );
};

export default MakeAppointment;
