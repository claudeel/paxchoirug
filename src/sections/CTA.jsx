import React from 'react';
import choirImage from '../assets/choir.jpg'
const CTA = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
                <img
                    src={choirImage} // Replace with your actual image path
                    alt="Choir singing"
                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                    Join the Harmony
                </h2>
                <p className="text-lg text-gray-600">
                    Be part of our soulful journey. Whether you love singing or just want to support us, there's a place for you in our choir family.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
                    Become a Member
                </button>
            </div>
        </section>
    );
};

export default CTA;
