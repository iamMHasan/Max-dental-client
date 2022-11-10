import React from 'react';

const Features = () => {
    return (
        <div>
            {/* appointment sec */}
            <div className='py-8 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-500'>
                <h1 className=''>Book Now For A Free Consaltent</h1>
                <div className="flex  justify-center pt-4 pb-2">
                    <div className="form-control">
                        <label className="input-group">
                            <span>Your First Name</span>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Your Last Name</span>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center pt-2 pb-2">
                    <div className="form-control ">
                        <label className="input-group">
                            <span>Your Email</span>
                            <input type="text" placeholder="email" className="input input-bordered w-50" />
                        </label>
                    </div>
                    <div className=''>
                        <label className="input-group">
                            <span>Your Phone</span>
                            <input type="text" placeholder="Phone" className="input input-bordered w-50" />
                        </label>
                    </div>
                </div>
            </div>
            {/* testimonial sec */}
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">Ran's Dental helps me a lot to fix my dental problem. I am very much greatful to him for his awesom service.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Abu Malek</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">Best doctor i have seen ever. Just awesome with the service and care he did for me. I am very greatful. Highly recommended!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p> Riya Islam</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;