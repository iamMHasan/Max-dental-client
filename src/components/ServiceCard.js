import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { cata_id, name, img ,details} = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="img" className='w-full h-72' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0,100)+ "..."}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;