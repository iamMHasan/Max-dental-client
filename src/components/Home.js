import React from 'react';
import useTitle from '../hooks/useTitle';
import {useLoaderData, Link} from 'react-router-dom'


const Home = () => {
    useTitle("home")
    const serviceName = useLoaderData()
    return (
        <div className='h-[80vh]'>
                <h1>Find Our Best Services</h1>
            <div className='grid grid-cols-3 gap-7 my-10'>
                {
                    serviceName.map(serName => (
                        <div key={serName._id}>
                            <p className='border rounded p-9  hover:bg-slate-400'>{serName.name}</p>
                        </div>
                    ))
                }
            </div>
            <Link to='/services'><h3>Load more services....</h3></Link>
        </div>
    );
};

export default Home;