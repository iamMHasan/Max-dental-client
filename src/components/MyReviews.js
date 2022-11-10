import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthProvider';
import Review from './Review';
import useTitle from '../hooks/useTitle';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const { user, loading, logOutUser } = useContext(AuthContext)
    useTitle('My Reviews')
    const [myReview, setMyReview] = useState([])



    useEffect(() => {
        fetch(`https://assignement-11-server.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('auth-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOutUser()
                    localStorage.removeItem('genius-Token')
                }
                return res.json()
            })
            .then(data => setMyReview(data))
    }, [user?.email,logOutUser])

    const handleDelete = id => {
        const agree = window.confirm(`are you sure to delete?${id}`)
        if (agree) {
            fetch(`https://assignement-11-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myReview.filter(r => r._id !== id)
                    setMyReview(remaining)
                    toast.dark('deleted successful')
                })
                .catch(err => console.log(err))
        }
    }
    
    
    // const handleBtnToUpdate = (id, message) =>{
    //     console.log(id);
    //     fetch(`https://assignement-11-server.vercel.app/review/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(message)
    //     })
    // }

    if (loading) {
        return <div className="w-16  flex h-16 items-center justify-center border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
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
                                        {/* <button onClick={()=>handleBtnToUpdate(rev._id)} className="btn-ghost">
                                            <label htmlFor="my-modal" className="btn btn-ghost">Update</label>
                                        </button> */}
                                        <Link to={`/updatereview/${rev._id}`}>
                                            <button className="btn-ghost">Update</button>
                                        </Link>
                                    </div>
                                </div>
                                <p className='bg-yellow-500  rounded p-6 my-3'><span className='text-blue-500 font-bold'>Review</span> :{rev.message}</p>
                                {/* modal for update user */}
                                {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <form onSubmit={handleUpdate} className='my-2' action="">
                                            <textarea className='w-full border-2' name="message" id="" cols="30" rows="10"></textarea>
                                            <button className="btn-ghost">
                                                <label htmlFor="my-modal" className="btn">Yay!</label>
                                            </button>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        ))
                    }
                </>
            }

        </div>
    );
};

export default MyReviews;