import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MidBanner = () => {
    return (
        <div
         className="hero lg:px-24"
      >
         <div className="hero-content gap-16 flex-col lg:flex-row">
            <img
               src={treatment}
               className="lg:w-1/3 sm:mb-6 md:mb-6 rounded-lg shadow-2xl"
               alt=""
            />
            <div className='w-1/2'>
               <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
               <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
         </div>
      </div>
    );
};

export default MidBanner;
