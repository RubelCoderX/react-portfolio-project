import React, { useEffect, useState } from 'react';
import { FaDribbble } from 'react-icons/fa';

const Portfolio = () => {
    const[projects, setProjects] = useState([]);
    // fetching data from json file
    useEffect(()=>{
        fetch('projects.json')
        .then(res=> res.json())
        .then(data => setProjects(data))
    },[]);
    return (
        <div className='lg:mx-12 mx-4 my-32'>
            <div className='flex flex-col-1 md:flex-row justify-between items-center mb-10'>
                <div className='text-headingColor '>
                    <p className='text-xl font-semibold mb-5'>Recent Project</p>
                    <h2 className='md:text-5xl text-4xl font-bold'>My Portfolio</h2>
                </div>
                <div>
                    <button className='btn-primary bg-dribble py-5'>
                      <FaDribbble className='w-8 h-8 inline-block mr-2'/>  Visit My Dribble
                    </button>
                </div>
            </div>
             {/* projects card */}
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    projects.map(project => <div key={project.id} className='shadow-xl rounded-lg'>
                        <img src={project.image} alt="" className='hover:scale-90 transition-all duration-300' />
                        <div className='p-8'>
                        <h3 className='text-2xl font-semibold mb-2 text-headingColor'>{project.name}</h3>
                        <p className='text-body mb-4'>{project.description}</p>
                        <a href="/" className='underline underline-offset-8 hover:text-primary'>View In Dribble <img src="/src/assets/arrow.png" alt="" className='w-3 inline-block ml-1'/> </a>
                        </div>
                    </div>)
                }
             </div>
        </div>
    );
};

export default Portfolio;