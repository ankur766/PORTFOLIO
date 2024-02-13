import React from 'react';
import '../CSScomp/About.css';

const About = () => {
  return (

    <div name='about' className='w-full h-screen '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 aboutIn'>

            <h3 className='text-4xl  inline border-b-4 border-pink-600 aboutIn'>
              About Us
            </h3>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '
        >
          <div className='sm:text-right text-4xl font-bold aboutInh1'>
  <p>Hi. I'm ANKUR KUMAR, nice to meet you. Please take a look around.</p>
</div>
          <div>
            <p className='aboutInp'>"As a Computer Science graduate student at KIIT University, I possess a robust foundation in C++, Java, SQL, MongoDB, HTML5, CSS, and more. With six months of professional experience, I have honed my skills in React.js, Tailwind CSS, and Node.js, JDBC showcasing a passion for developing impactful web applications. Additionally, I am proficient in various languages, databases, and frameworks, including Struts2  Node.js Bootstrap, and SpringBoot I am also adept with tools such as Git, Heroku, and JIRA. I am eager to contribute my problem-solving and coding expertise to challenging software engineering projects that foster both professional development and personal growth."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
