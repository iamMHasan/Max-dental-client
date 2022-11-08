import React from 'react';
import {useLoaderData, Link} from 'react-router-dom'
import useTitle from '../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('services')
    const services = useLoaderData()
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