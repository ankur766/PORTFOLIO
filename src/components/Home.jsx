import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import '../CSScomp/Home.css';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className=' mx-auto px-8 flex flex-col justify-center h-full  main'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hi,</h1>
       
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          <p className='text-[#64ffda] '>I'm a</p> <p className='spandev'>FRONT-END DEVELOPER</p>
        </h2>
        <p className='py-8 mb-5  max-w-[700px]'>
           I specialize in building responsive, user-friendly, and visually appealing web applications. From concept to code, I bring ideas to life with an emphasis on delivering a flawless user experience.
        </p>
        <div>
          <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link  className='ulLink' to='work' smooth={true} duration={500}>
            Project
          </Link>
         
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
