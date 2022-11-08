import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {toast} from 'react-toastify'
import { AuthContext } from '../context/AuthProvider';
import Review from './Review';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext)
    const [myReview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const agree = window.confirm(`are you sure to delete?${id}`)
        if (agree) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remaining = myReview.filter(r => r._d !== id)
                setMyReview(remaining)
                toast.dark('deleted successful')
            })
            .catch(err => console.log(err))
        }
    }
   

    return (
        <div>
            {
                myReview.length === 0 ? <h1 className='text-red-600 flex justify-center items-center h-[80vh]'> No review found </h1> : <>
                    {
                        myReview.map(rev => (
                            <div key={rev._id} className='p-3 bg-yellow-400 text-black rounded my-4'>
                                <div className='flex justify-center items-center'>
                                    <div>
                                        <h4><span className='text-blue-500 font-bold'>Service</span> : {rev.serviceName}</h4>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(rev._id)} className='btn btn-ghost text-red-600'>Delete</button>
                                        <button className='btn btn-ghost'>Edit</button>
                                    </div>
                                </div>
                                <p className='bg-yellow-500  rounded p-6 my-3'><span className='text-blue-500 font-bold'>Review</span> :{rev.message}</p>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    );
};

export default MyReviews;