import React from 'react';
import QuoteImg from '../assets/choir.jpg';

const MemberAndQuoteSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

                {/* Left Section - Members and Alumni */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Members & Alumni</h2>
                    <div className="flex justify-center md:justify-start mb-4">
                        <div className="mr-10">
                            <p className="text-4xl font-semibold text-gray-800">200+</p>
                            <p className="text-sm text-gray-600">Current Members</p>
                        </div>
                        <div>
                            <p className="text-4xl font-semibold text-gray-800">150+</p>
                            <p className="text-sm text-gray-600">Alumni</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Quote and Picture */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <img
                            src={QuoteImg}
                            alt="Inspirational"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <blockquote className="text-xl italic text-gray-700 mb-4">
                            "The strength of our community lies in the unity and passion of its people."
                        </blockquote>
                        <p className="text-gray-500">- John Doe, Founder</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MemberAndQuoteSection;
