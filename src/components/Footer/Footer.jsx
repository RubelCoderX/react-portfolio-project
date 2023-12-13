import React from 'react';
import logo from '../../assets/logo.svg';
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-bgShade py-28 md:px-12 px-4'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20'>
                <a href="" className='flex-shrink-0'><img src={logo} alt="" /></a>
                <div className='flex flex-col sm:flex-row  md:items-center  gap-4 flex-wrap '>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4'>Home</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4'>Portfolio</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4'>About Me</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4'>Contact</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4'>Testimonials</a>
                    
                </div>
                {/* social icons */}
                <div className='flex items-center gap-4 ml-4'>
                    <FaFacebook className='cursor-pointer hover:translate-y-3 transition-all dur text-xl hover:text-primary'/>
                    <FaInstagram className='cursor-pointer hover:translate-y-3 transition-all dur text-xl hover:text-primary'/>
                    <FaLinkedin className='cursor-pointer hover:translate-y-3 transition-all dur text-xl hover:text-primary'/>
                    <FaTwitter className='cursor-pointer hover:translate-y-3 transition-all dur text-xl hover:text-primary'/>
                </div>
            </div>
            <hr />
            <div className='mt-10 flex flex-col md:flex-row justify-between'>
                <p>Made with by @Rubel</p>
                <div className='space-x-6'>
                    <a href="/" className='hover:text-gray-400 cursor-pointer'>Privacy Policy</a>
                    <a href="/" className='hover:text-gray-400 cursor-pointer'>Terms of Service</a>
                    <a href="/" className='hover:text-gray-400 cursor-pointer'>Cookies Setting</a>
                </div>
            </div>
        </div>

    );
};

export default Footer;