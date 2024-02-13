import React, { useState } from 'react';
import '../CSScomp/Navbar.css';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
 
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  


  return (
    <div className='fixed w-full  flex justify-between items-center px-4  text-gray-300  navbarclass' >
      
       <h2 className='text-5xl' style={{
        background: 'linear-gradient(to right, #3494E6, #EC6EAD)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        marginRight: '16rem',
        marginLeft: '4rem',
      
        top: 0,
        left: 0
       }}> Ankur Kumar</h2>
      

      {/* menu */}
      <ul className='hidden md:flex ulLink'
       >
        <li className='ulLink1'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li  className='ulLink2'>
          <Link   className='ulLink' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li  className='ulLink2'>
          <Link  className='ulLink' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li  className='ulLink3'>
          <Link  className='ulLink' to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li  className='ulLink4'>
          <Link  className='ulLink' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center  ulLink'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ankurkumar94/'
              target='_blank' // Added target="_blank" to open in a new tab
              rel='noopener noreferrer' // Added for security reasons
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ankur766'
              target='_blank' // Added target="_blank" to open in a new tab
              rel='noopener noreferrer' // Added for security reasons
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:sandyankurkumar@gmail.com'
              target='_blank' // Added target="_blank" to open in a new tab
              rel='noopener noreferrer' // Added for security reasons
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/132yQZIspxXrt-RftGuVOA_X6UiMo7iF4/view?usp=sharing'
              target='_blank' // Added target="_blank" to open in a new tab
              rel='noopener noreferrer' // Added for security reasons
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
