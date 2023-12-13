import React from 'react';


// making some array of objects for card items
const skills =[
    {id:1, name:"Strategy & Direction", description:"A dynamic strategist specializing in providing clear direction for business growth",image:"src/assets/skills-1.png"},
    {id:2, name:"Branding & Logo", description:"A passionate expert in branding and logo design. With a keen understanding of the power of visual identity, I specialize in creating compelling brands that resonate",image:"src/assets/skills-2.png"},
    {id:3, name:"UI & UX DESIGN", description:"A passionate UI & UX designer dedicated to creating seamless, user-centric digital experiences. With an eye for aesthetics and a focus on functionality",image:"src/assets/skills-3.png"},
    {id:4, name:"Webflow Development", description:"A Webflow developer passionate about bringing digital visions to life. With a mastery of the Webflow platform, I specialize in creating visually stunning",image:"src/assets/skills-4.png"}
    

]



const Skills = () => {
    return (
        <div className='lg:mx-12 mx-4 py-32' id='skills'>
            <div className='text-headingColor mb-20 ml-5'>
                <p className='text-xl font-semibold mb-5'>My Skills</p>
                <h2 className='md:text-5xl text-4xl font-bold'>My Expertise</h2>
            </div>


            {/*skills card*/}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {
                    skills.map(skill => <div key={skill.id} className='bg-bgShade p-8 rounded-lg cursor-pointer hover:translate-y-4 transition-all duration-300 skillcard'>
                        <img src={skill.image} alt="" className='w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3 ' />
                        <h3 className='text-2xl font-bold mb-4'>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;