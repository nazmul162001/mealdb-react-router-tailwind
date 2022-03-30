import React from 'react';
import img from '../../images/vector.png';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const HomePage = () => {
  return (
      <section className='hero mt-10'>
            <div className="container">
              <div className="row grid gap-5 md:grid-cols-2 justify-between items-center">
                <div className="content-left px-10 md:px-20">
                  <div className="hero-title border-l-4 border-orange-400 pl-3">
                  <h2 className='text-4xl font-mono text-gray-700 font-bold'>Before they sold out readymade gluten </h2>
                  </div>
                  <p className='text-gray-500 py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi deleniti culpa inventore, dolorem, ipsam architecto veritatis blanditiis voluptatibus facilis est tenetur. Ut numquam minus ex fuga tempore et laborum!</p>
                  <button className='btn bg-orange-400 px-4 py-2 rounded text-2xl hover:bg-indigo-500 transition duration-75'>Download CV</button>
                  <button className='btn bg-indigo-300 px-4 py-2 rounded ml-3 text-2xl hover:bg-orange-500'>Hire me</button>
                  <div className="social-icon my-5 pl-10 flex">
                      <a className='p-1 mr-2 bg-blue-700 text-white text-xl rounded-full' href="/facebook"> 
                          <FaFacebook /> 
                      </a>
                      <a className='p-1 mr-2 bg-blue-400 text-white text-xl rounded-full' href="/facebook"> 
                          <FaTwitter /> 
                      </a>
                      <a className='p-1 bg-blue-500 text-white text-xl rounded-full' href="/facebook"> 
                          <FaLinkedinIn /> 
                      </a>
                  </div>
                </div>
                <div className="content-right">
                  <img src= {img} alt="" />
                </div>
              </div>
            </div>
          </section>
  );
};

export default HomePage;