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


const Home = () => {
    const { user } = useContext(AuthContext)
    useTitle("home")
    const serviceName = useLoaderData()

    return (
        <div className=''>
            <Banner></Banner>
            <h1 className='my-8'>Find my services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-10 '>
                {
                    serviceName.map(serName => (
                        <div key={serName._id}>
                            <p className='border rounded p-9  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{serName.name}</p>
                        </div>
                    ))
                }
                <div className="flex justify-center mx-auto">
                    <Link to='/services'><button className='btn btn-primary'>Load more services....</button></Link>
                </div>
            </div>
            {/* <div className='my-3 p-4 border-4 rounded'>
                <h1>Here is the services you have added</h1>
                <div className='py-5'>
                    {
                        addedService.length === 0 ? 'Add a service to see here' : <>
                            {
                                addedService.map(service => (
                                    <div key={service._id} className='bg-yellow-500 m-3 py-5 w-[70%] rounded-md mx-auto'>
                                        <h3 className='py-1'>{service.serviceName}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                ))
                            }
                        </>
                    }

                </div>
            </div> */}
            <Features />
        </div>
    );
};

export default Home;