import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Reviewform = () => {
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user

    const handleReview = e => {
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value 
        const message = e.target.message.value
        console.log(name, email, message);
    }
    return (
        <form onSubmit={handleReview}>
            <div className='flex items-center py-3'>
                <p className='mr-3'>Name</p>
                <input name='name' className='w-full p-2 rounded' type="text" defaultValue={displayName} readOnly />
            </div>
            <div className='flex items-center py-3'>
                <p className='mr-3'>Email</p>
                <input name='email' className='w-full p-2 rounded' type="text" defaultValue={email} readOnly />
            </div>
            <div className='flex items-center py-3'>
                <p className='mr-3'>Message</p>
                <textarea name='message' className='w-full p-2 rounded' type="text" />
            </div>
            <button  className='btn btn-ghost'>SUBMIT</button>
        </form>
    );
};

export default Reviewform;