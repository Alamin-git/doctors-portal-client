import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    const infos = [
        {
            _id:1,
            img: clock,
            title: 'Opening Hours',
            body: 'Lorem Ipsum is simply dummy text of the pri',
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            _id:2,
            img: marker,
            title: 'Visit our location',
            body: 'Brooklyn, NY 10036, United States',
            bgClass: 'bg-accent'
        },  
        {
            _id:3,
            img: phone,
            title: 'Contact us now',
            body: '+000 123 456789',
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        }
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 text-white'>
            {
                infos.map(info => <InfoCard key={info._id} info={info}/>)
            }
        </div>
    );
};

export default Info;