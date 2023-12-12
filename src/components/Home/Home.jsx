import React from 'react';
import bannerImg from '../../assets/banner.png';

const Home = () => {
    return (
        <div className='mt-24 bg-bgShade'>
           <div className='lg:px12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5'>
               <div className='md:w-1/2 w-full'>
                    <img src={bannerImg} alt=""  className='w-full'/>
                </div>
               <div className='md:w-1/4 w-full mt-5 ml-5'>
                <h3 className='text-xl text-headingColor font-semibold mb-5'>Hey, I am Rubel</h3>
                <h1 className='md:text-5xl text-4xl font-bold text-headingColor leading-sung md:leading-[76px] mb-5'>I am a Full Stack <span className='text-primary'>Web Developer</span></h1>
                <button className='btn-primary'>Get In Touch</button>
               </div>
            
            </div>
            {/* banner */}
            
        </div>
        
       
    );
};

export default Home;