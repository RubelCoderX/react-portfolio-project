import React from 'react';
import profilePic from '../../assets/profile.png';

const About = () => {
    return (
        <div className='lg:mx-12 mx-4' id='about'>
            <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10'>
                <div className='sm:w-1/2'>
                    <img src={profilePic} alt="" className='w-full sm:w-11/12' />
                </div>
                <div className='sm:w-1/2'>

                        
                        <h2 className='md:text-5xl text-4xl font-bold'>About Me</h2>
                        <p className='mt-8 md:pr-8 mb-8'>I am a skilled and experienced translator with [2] years of
                             experience in the field. Throughout my career, I have successfully completed
                             numerous translation projects, ranging from
                             mention examples of past projects.
                             <br />
                              My commitment to 
                             precision, attention to detail, and dedication to 
                             preserving the essence of the source content have consistently 
                             resulted in high-quality translations that resonate with the target audience.
                             </p>
                        <button className='btn-primary'>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;