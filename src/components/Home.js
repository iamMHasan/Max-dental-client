import React from 'react';
import useTitle from '../hooks/useTitle';
import { useLoaderData, Link } from 'react-router-dom'
import Banner from './Banner';
import { useEffect } from 'react';
import { useState } from 'react';
import Services from './Services';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Features from './Features';
import HomeSlider from './HomeSlider';
import H1style from './H1style';


const Home = () => {
    const { user } = useContext(AuthContext)
    useTitle("home")
    const serviceName = useLoaderData()

    return (
        <div className=''>
            <Banner></Banner>
            <H1style text={'Find services'}> </H1style>
            <div data-aos="fade-up"
                data-aos-duration="500" className='grid grid-cols-1 md:grid-cols-3 gap-7 my-10 '>
                {
                    serviceName.map(serName => (
                        <div className='border-4 text-center' key={serName._id}>
                            <Link to={`/services/${serName._id}`}>
                                <p className='border rounded p-9 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{serName.name}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <HomeSlider/>
        </div>
    );
};

export default Home;