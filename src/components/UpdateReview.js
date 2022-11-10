import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const updateRev = useLoaderData()
    const [updMessage, setUpdMessage] = useState(updateRev)

    const handleUpdate = e =>{
        e.preventDefault()
        console.log(updMessage._id);

        fetch(`https://assignement-11-server.vercel.app/review/${updMessage._id}`,{
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updMessage)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('successfully data updated')
                e.target.reset()
            }
        })
        .catch(err => console.log(err))
    }

    const handleInputBlur = (e) =>{
        const field = e.target.name
        const value = e.target.value

        const updatedMessage = {...updMessage}
        updatedMessage[field] = value 
        setUpdMessage(updatedMessage)
    }
    return (
        <div>
            <form onSubmit={handleUpdate} className='py-8' action="">
                <textarea onChange={handleInputBlur} placeholder='write your message here to update' className='w-full h-48' type="text" name='message' />
                <button className="btn btn-dark">submit</button>
            </form>
        </div>
    );
};

export default UpdateReview;