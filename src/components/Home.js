import React from 'react';
import useTitle from '../hooks/useTitle';
import { useLoaderData, Link } from 'react-router-dom'
import Banner from './Banner';
import { useEffect } from 'react';
import { useState } from 'react';
import Services from './Services';


const Home = () => {
    useTitle("home")
    const serviceName = useLoaderData()
    const [addedService, setAddedService] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/addservice`)
        .then(res => res.json())
        .then(data => setAddedService(data) )
    },[])

    return (
        <div className=''>
            <Banner></Banner>
            <h1 className='my-8'>Find the service i serve</h1>
            <div className='grid grid-cols-3 gap-7 my-10'>
                {
                    serviceName.map(serName => (
                        <div key={serName._id}>
                            <p className='border rounded p-9  hover:bg-slate-400'>{serName.name}</p>
                        </div>
                    ))
                }
                <Link to='/services'><button className='btn btn-ghost'><h3>Load more services....</h3></button></Link>
            </div>
            <div>
                <h1>Here is the services you have added</h1>
                <div className='py-5'>
                    {
                        addedService.length === 0 ? 'Add a service to see here' : <>
                       {
                         addedService.map(service => (
                            <div className='bg-yellow-500 m-3 py-5 w-[70%] rounded-md mx-auto'>
                                <h3 className='py-1'>{service.serviceName}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))
                       }
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Home;