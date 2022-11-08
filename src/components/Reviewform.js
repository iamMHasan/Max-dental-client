import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify'


const Reviewform = ({ serviceData }) => {
    const { _id, name } = serviceData

    const { user } = useContext(AuthContext)
    // console.log(user);
    const {photoURL} = user

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
            photoURL,
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('successfully submited review')
                    e.target.reset()
                }
            })
            .catch(err => console.log(err))

    }
    return (
        <form onSubmit={handleReview}>
            <h3>Please submit your review</h3>
            <div className='flex items-center py-3'>
                <p className='mr-3'>Name</p>
                <input name='name' className='w-full p-2 rounded' type="text" defaultValue={user?.displayName} readOnly />
            </div>
            <div className='flex items-center py-3'>
                <p className='mr-3'>Email</p>
                <input name='email' className='w-full p-2 rounded' type="text" defaultValue={user?.email} readOnly />
            </div>
            <div className='flex items-center py-3'>
                <p className='mr-3'>Message</p>
                <textarea name='message' className='w-full p-2 rounded' type="text" />
            </div>
            <button className='btn btn-ghost'>SUBMIT</button>
        </form>
    );
};

export default Reviewform;