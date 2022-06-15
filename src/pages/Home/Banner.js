import chair from '../../assets/images/chair.png';
import PrimaryBtn from "../Shared/Button/PrimaryBtn";


const Banner = () => {
   return (
      <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-cover">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img
               src={chair}
               className="w-[37.125rem] rounded-lg shadow-2xl"
            />
            <div>
               <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
               <p className="py-6">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
               </p>
               
               <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
         </div>
      </div>
   );
};

export default Banner;
