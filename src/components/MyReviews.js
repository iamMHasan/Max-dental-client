import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Review from './Review';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    return (
        <div>
           {
            myReview.length === 0 ? <h1 className='text-red-600 flex justify-center items-center h-[80vh]'> No review found </h1>: <>
             {
                myReview.map(rev => (
                    <div key={rev._id} className='p-3 bg-yellow-400 text-black rounded my-4'>
                            <h4><span className='text-red-500 font-bold'>Service</span> : {rev.serviceName}</h4>
                            <p className='bg-yellow-500  rounded p-6 my-3'><span className='text-red-500 font-bold'>Review</span> :{rev.message}</p>
                    </div>
                ))
            }
            </>
           }
        </div>
    );
};

export default MyReviews;