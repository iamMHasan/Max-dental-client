import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import {toast} from 'react-toastify'

const Addservice = () => {
    const {user} = useContext(AuthContext)
    const handleAddReview = (e) =>{
        e.preventDefault()
        const form = e.target 
        const serviceName = form.name.value 
        const description = form.description.value 

        const serviceInfo ={
            serviceName,
            description,
            email : user?.email
        }

        fetch('http://localhost:5000/addservice',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(serviceInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('service added on Home page')
                form.reset()
            }
        })
        .then(err => console.log(err))
    }
    return (
        <form className='py-8' onSubmit={handleAddReview}>
            <h3>Add a custom service you want</h3>
            <div className='flex items-center py-3'>
                <p className='mr-3 w-1/5'>Service Name</p>
                <input name='name' className='w-full p-2 rounded' type="text"  />
            </div>
            <div className='flex items-center py-3'>
                <p className='mr-3 w-1/5'>Service Descripton</p>
                <textarea name='description' className='w-full h-48 p-2 rounded' type="text" />
            </div>
            <button className='btn btn-ghost'>SUBMIT</button>
        </form>
    );
};

export default Addservice;