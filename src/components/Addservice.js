import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify'
import useTitle from '../hooks/useTitle';

import { useState } from 'react';

const Addservice = () => {
    useTitle('add service')
    
    const [addservice, setAddService] = useState([])

    const { user } = useContext(AuthContext)
    
    const handleAddReview = (e) => {
        console.log(addservice);
        e.preventDefault()

        fetch(`https://assignement-11-server.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservice)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('service added on services page')
                    e.target.reset()
                }
            })
            .then(err => console.log(err))
    }

    const handleInputBlur = (e) => {
        const field = e.target.name
        const value = e.target.value

        const newService = { ...addservice }
        newService[field] = value
        setAddService(newService)
    }

    return (
        <form className='py-8' onSubmit={handleAddReview}>
            <h3>Add a custom service you want</h3>
            <div className='flex items-center py-3'>
                <p className='mr-3 w-1/5'>Service Name</p>
                <input onChange={handleInputBlur} name='name' className='w-full p-2 rounded' type="text" />
            </div>
            <div className='flex items-center py-3'>
                <p className='mr-3 w-1/5'>Service Descripton</p>
                <textarea onChange={handleInputBlur} name='details' className='w-full h-48 p-2 rounded' type="text" />
            </div>
            <button className='btn btn-ghost'>SUBMIT</button>
        </form>
    );
};

export default Addservice;