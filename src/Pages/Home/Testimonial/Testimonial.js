import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review/Review';

const Testimonial = () => {

    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            img:people1,
            location:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
        },
        {
            _id:2,
            name:'Winson Herry',
            img:people2,
            location:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
        },
        {
            _id:3,
            name:'Winson Herry',
            img:people3,
            location:'California',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
        },
    ]


    return (
        <section className='my-24 mx-5'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl text-primary font-bold">Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48'/>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;