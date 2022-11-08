import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Reviewform from './Reviewform';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceReview from './ServiceReview';

const Review = () => {
    const [reviewItem, setReviewItem] = useState([])
    const [updatedReviewitem, setUpdatedReviewitem] = useState()
    
    const { user } = useContext(AuthContext)
    const serviceData = useLoaderData()
    // console.log(serviceData);

    const { _id, name, img, details } = serviceData

    useEffect(() => {
        fetch(`http://localhost:5000/review?name=${name}`)
            .then(res => res.json())
            .then(data => setReviewItem(data))
    }, [name])

    
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
            <div className="flex flex-col justify-center ">
                    <div className='mb-5'>
                        <h2>See what others say about our service</h2>
                        <div className='overflow-y-auto h-96 '>
                            {
                                reviewItem.map(review => <ServiceReview
                                key={review._d}
                                review={review}
                                ></ServiceReview>)
                            }
                        </div>
                    </div>
                    <div className=''>
                       {
                            user?.uid ? <Reviewform
                                serviceData={serviceData}
                            ></Reviewform> : <h2 className='text-red-600 '>Please login to add review</h2>
                        }
                    </div>
                </div>

        </div>
    );
};

export default Review;