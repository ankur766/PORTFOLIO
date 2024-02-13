import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  const phoneNumber = '+91 7667782140';
  return (
    <>
    <div className='pb-8' style={{
      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'white',
        fontFamily: 'Roboto, sans-serif',




    }}>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          
          </div>
    <div name='contact' className='w-full h-screen  flex flex-col lg:flex-row justify-center items-center ' style={{marginTop:'0px'}}>
      
      <div className="lg:w-1/2 ">
      <section id="contact" className="section scrollspy full-height" style={{
        marginLeft: '4rem',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '300',
        fontSize: '1.6rem',
        lineHeight: '1.6',
        color: '#fff',
        letterSpacing: '0.01em',
        textAlign: 'left',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    
       


      }}>
  <h3 className="page-title white-text teal" style={{
    fontSize: '2.5rem',
    fontWeight: '300',
    lineHeight: '1.6',
    color: '#fff',
    letterSpacing: '0.01em',
    textAlign: 'left',
    padding: '0 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>Contact</h3>
  <div className="container"style={{
    marginTop:'0rem',
   
  
  }}>
    {/* Your existing contact information */}
    <div className="container ml-4">
    <p>
    <a
            aria-label="Call Varad"
            data-position="top"
            data-tooltip="Call Varad"
            className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"
            href={`tel:${phoneNumber}`}
          >
            <FaPhone className="mr-2" /> {/* Added margin to the right */}
            <span className="font-bold">{phoneNumber}</span>
          </a>
        </p>
        <p>
          <a aria-label="Email" href="mailto:sandyankurkumar@gmail.com" target="_blank" data-position="top"
            data-tooltip="Email" className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
            <FaEnvelope className="mr-2" /> {/* Added margin to the right */}
            <span className="hoverline font-bold">sandyankurkumar@gmail.com</span>
          </a>
        </p>
        <p>
          <a aria-label="View Varad on GitHub" href="http://github.com/ankur766" target="_blank"
            data-position="top" data-tooltip="View Varad on GitHub"
            className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
            <FaGithub className="mr-2" /> {/* Added margin to the right */}
            <span className="hoverline font-bold">github.com/ankur766</span>
          </a>
        </p>
        <p>
          <a aria-label="View Varad on LinkedIn" href="https://www.linkedin.com/in/ankurkumar94/" target="_blank"
            data-position="top" data-tooltip="View Varad on LinkedIn"
            className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
            <FaLinkedin className="mr-2" /> {/* Added margin to the right */}
            <span className="hoverline font-bold">linkedin.com/in/ankurkumar94/</span>
          </a>
        </p>
      </div>
    
  </div>
</section>

      </div>
      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
        
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
    </>
   
  );
}

export default Contact;
