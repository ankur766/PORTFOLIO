import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../CSScomp/Work.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from '../data/data';
import image from '../assets/aws.png'

const Work = () => {

 const [projects, setProjects] = useState([data]);
 





  return (
    <div name='work' className='w-full md:h-screen text-gray-300 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Project
          </p>
          <p className='py-6'></p>
        </div>

        {/* container for projects */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  card-container">

           <Slider

            dots
            infinite
            speed={500}
            slidesToShow={3} // Set the number of projects to show at once
            slidesToScroll={1}
            style={{ width:'180vh', }}
          > 
            {data.map((item, index) => (
              // <div key={index} className='shadow-lg group container rounded-md card'>
              //   <span className='text-2xl font-bold text-white tracking-wider'>
              //     {item.name}
              //   </span>
              //   <div className='pt-8 text-center '>
              //     {/* eslint-disable-next-line */}
              //     <a href={item.html_url} target='_blank' rel='noopener noreferrer'>
              //       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              //         Code
              //       </button>
              //     </a>
              //   </div>
              // </div>

              <div id="card-container">
                <div class="card">
                    <div class="overlay">
                        <h4> {item.name}</h4>
                        <p>
                        {item.image ? (
                          <img src={item.image } alt="" srcset="" />
        ) : (
            <p>No Image Available </p>
        )}
                        </p>
                        <p>{item.des}</p>
                        <a href={item.github}   target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg buttncls'>
                            Code
                            </button>
                        </a>

                    </div>
                </div>
                </div>
            ))}

          </Slider> 

        </div>

      </div>
    </div>

  );
};

export default Work;
