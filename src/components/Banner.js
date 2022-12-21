import React from 'react';
import doctor from '../assets/doctor.png'
import girl from '../assets/girl-removebg-preview.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100 mt-1 p-0 md:p-5  flex items-center justify-center md:h-[100vh]">
            <div  data-aos="fade-up"
     data-aos-duration="500" className="flex flex-col md:flex-row gap-4 items-center justify-between p-4">
                <div className=''>
                    <h1 className="text-4xl font-bold ">Brighten your smile!</h1>
                    <p className="mt-1">Advance dental care system to restore your confidence with healthy smile.</p>
                    <Link to='/services'>
                        <button className="btn btn-primary hover:bg-white/80 rounded-xl bg-white text-black ">Explore Services</button>
                    </Link>
                </div>
                <div className=''>
                    <img src={girl} className='w-full h-[40vh] md:h-[100vh]' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;