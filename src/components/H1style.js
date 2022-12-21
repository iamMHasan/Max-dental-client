import React from 'react';

const H1style = ({text}) => {
    return (
        <div>
            <h1 className='my-8 text-center text-transparent bg-clip-text hover:text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{text}</h1>
        </div>
    );
};

export default H1style;