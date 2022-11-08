import React from 'react';
import { Link} from 'react-router-dom'

const ServiceCard = ({ service }) => {
    const { cata_id, name, img ,details, _id} = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="img" className='w-full h-72' /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-600">{name}</h2>
                <p>{details.slice(0,100)+ "..."}</p>
                <div className="card-actions justify-end">
                   <Link to={`/services/${_id}`}> <button className="btn btn-ghost">Read more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;