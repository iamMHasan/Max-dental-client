import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Reviewform = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <form className='m-2'>
            <h3>Please submit your review</h3>
           <textarea name='message' className='p-3 rounded mr-3 w-full h-24' placeholder='your message' id="" cols="30" rows="10"></textarea>
           <button className='btn btn-ghost'>Submit</button>
        </form>
    );
};

export default Reviewform;