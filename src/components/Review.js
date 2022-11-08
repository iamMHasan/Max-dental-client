import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Reviewform from './Reviewform';

const Review = () => {
    const {user} = useContext(AuthContext)
    const serviceData = useLoaderData()
    console.log(serviceData);
    const { name, img, details } = serviceData
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
            {/* service details section */}
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
            {/* review section */}
            <div>
                <div className="flex flex-col">
                    <div>

                    </div>
                    <div>
                        {
                                user?.uid ? <Reviewform serviceData={serviceData}></Reviewform> : <h2 className='text-red-600 flex items-center'>Please login to add review</h2>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;