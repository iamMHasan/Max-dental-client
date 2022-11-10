import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Reviewform from './Reviewform';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceReview from './ServiceReview';
import { toast } from 'react-toastify'

const Review = () => {
    const { user } = useContext(AuthContext)
    // const { photoURL } = user
    const [reviewItem, setReviewItem] = useState([])

    const serviceData = useLoaderData()
    const { _id, name, img, details } = serviceData

    useEffect(() => {
        fetch(`https://assignement-11-server.vercel.app/review?name=${name}`,{
            headers: {
                authorization: `bearer ${localStorage.getItem('auth-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviewItem(data))
    }, [name])

    const handleReview = e => {
        e.preventDefault()
        const disPlayname = e.target.name.value
        const email = e.target.email.value
        const message = e.target.message.value

        const reviewDetails = {
            disPlayname,
            serviceName: name,
            service: _id,
            email,
            message,
            photoURL:  user?.photoURL,
        }
        // post method 
        fetch('https://assignement-11-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('successfully submited review')
                    setReviewItem([reviewDetails, ...reviewItem])
                    e.target.reset()
                }
            })
            .catch(err => console.log(err))
    }

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
                            handleReview={handleReview}
                            serviceData={serviceData}
                        ></Reviewform> : <Link to='/login'><h2 className='text-red-600 '>Please login to add review</h2></Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Review;