import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
// import menuicon from react icons
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // toggle menubtn
    const toogleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    // function for making navbar sticky when scrolling
     useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setIsSticky(true);
            }
        };
        window.addEventListener("scroll",handleScroll);
        
     })
    return (
        <header className='w-full fixed top-0 left-0 right-0'>
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}> 
                {/* for large devices */}
                <div className='flex items-center justify-between '>
                        <div className='cursor-pointer'>
                                    {/* for logo */}
                                    <img src={logo} alt=""  className='h-10'/>
                        </div>
                        
                        <div className='lg:flex items-center gap-3 hidden text-body text-lg'>
                            <a className='block px-4 cursor-pointer hover:text-gray-400 ' href="/">Home</a>
                            <a className='block px-4 cursor-pointer hover:text-gray-400 ' href="/">Skills</a>
                            <a className='block px-4 cursor-pointer hover:text-gray-400 ' href="/">About Me</a>
                            <a className='block px-4 cursor-pointer hover:text-gray-400 ' href="/">Portfolio</a>
                            <a className='block px-4 cursor-pointer hover:text-gray-400 ' href="/">Testimonials</a>
                        </div>
                            {/* contact me btn */}
                        <div className='lg:block hidden'> 
                                <button className='outlineBtn'>Contact Me</button>
                        </div>
                        {/* menubtn from mobile device */}
                        <button onClick={toogleMenu} className='lg:hidden text-body text-3xl'>
                            <HiMenu />
                        </button>
                </div>

                {/* menu items for small devicess */}
                {
                    isMenuOpen && <div className='mt-4 p-4 bg-body rounded-lg text-white text-lg'>
                            <a className='block px-4 py-2 cursor-pointer text-primary hover:text-gray-400 ' href="/">Home</a>
                            <a className='block px-4 py-2 cursor-pointer hover:text-gray-400 ' href="/">Skills</a>
                            <a className='block px-4 py-2 cursor-pointer hover:text-gray-400 ' href="/">About Me</a>
                            <a className='block px-4 py-2 cursor-pointer hover:text-gray-400 ' href="/">Portfolio</a>
                            <a className='block px-4 py-2 cursor-pointer hover:text-gray-400 ' href="/">Testimonials</a>
                    </div> 
                }
            </nav>
        </header>
    );
};

export default Navbar;