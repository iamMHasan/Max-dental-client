import React from 'react';
import useTitle from '../hooks/useTitle';
import { useLoaderData, Link } from 'react-router-dom'
import Banner from './Banner';


const Home = () => {
    useTitle("home")
    const serviceName = useLoaderData()
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
        </div>
    );
};

export default Home;