import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const serviceData = useLoaderData()
    console.log(serviceData);
    const { name, img, details } = serviceData
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="img" className='w-full h-full' /></figure>
                <div className="card-body">
                    <div className="flex">
                        <h4 className='mr-4'>Name of service : </h4>
                        <h2 className="card-title text-red-600">{name}</h2>
                    </div>
                    <p>{details}</p>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Review;