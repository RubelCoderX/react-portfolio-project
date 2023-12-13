import React from 'react';
import Review from '../Review /Review';

const Testimonials = () => {
    return (
        <div className='lg:px-12 px-4 my-32 bg-bgShade py-32' id='testimonials'>
            <div className='text-handleColor mb-20'>
                <p className='text-xl font-semibold mb-5'>Clients Feedback</p>
                <h2 className='md:text-5xl text-4xl font-bold'>Customer testimonials</h2>
            </div>
            {/* our reviews goes here, we will use swiper js */}
            <Review></Review>
        </div>
    );
};

export default Testimonials;