import React from 'react';
import doctor from '../assets/doctor.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100 mt-4 p-3  flex items-center justify-center h-[40vh]">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Best
                <span className="text-[#4506cb]"> Dental </span> Doctor in your area
            </h1>
        </section>
    );
};

export default Banner;