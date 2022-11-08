import React from 'react';
import { useContext } from 'react';
import {useLoaderData, Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const {loading} = useContext(AuthContext)
    useTitle('services')
    const services = useLoaderData()
    
    if(loading){
        return <div className="w-16  flex h-16 items-center justify-center border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                services.map(service => <ServiceCard 
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;