import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const ServiceReview = ({ review }) => {
    const { message,email,disPlayname,photoURL } = review
    console.log(review);

    const {user} = useContext(AuthContext)
    return (
        <section className="my-8 bg-gray-800 text-gray-100">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <p>{message}</p>
                <div className="flex items-center space-x-3">
                    <img src={photoURL} alt='404' className='h-[50px] w-[50px]' />
                    <div className='flex flex-col'>
                        <p className="leading-tight">{disPlayname}</p>
                        <p className="leading-tight"><small>{email}</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceReview;