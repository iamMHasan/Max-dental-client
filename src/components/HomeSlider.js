import React from 'react';
import Slider from 'react-slick';
import H1style from './H1style';

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    const reviews = [
        {
            image: 'https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=AycQ2obu8sgJxWAJgYBbYR6jeRB9Bhs1JZBXzSgL6LE=',
            text1: 'Best doctor ever',
            text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, adipisci!'
        },
        {
            image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
            text1: 'He is the best i know',
            text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, adipisci!'
        },
        {
            image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text1: 'Friendly doctor',
            text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, adipisci!'
        },
    ]
    return (
        <div className='w-[80%] mx-auto my-10'>
            <H1style text={'See what others say'}></H1style>
            <Slider {...settings}>
                {
                    reviews.map(review => (
                        <div className='flex justify-center items-center text-center'>
                            <img className='h-24 w-24 ml-[46%] rounded-full' src={review.image} alt="" />
                            <div>
                                <h1 className="text-2xl">{review.text1} </h1>
                                <p>{review.text2}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default HomeSlider;