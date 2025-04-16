// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import HeroSectionImg from '../assets/choir.jpg';
import TransparentButton from '../components/TransparentButton';
const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const motto = 'Sing! With Heart and Voice!!!';

    useEffect(() => {
        let index = 0;
        const typingSpeed = 100;
        const resetDelay = 2000;

        const type = () => {
            if (index <= motto.length) {
                setDisplayText(motto.slice(0, index));
                index++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(() => {
                    index = 0;
                    setDisplayText('');
                    setTimeout(type, typingSpeed);
                }, resetDelay);
            }
        };

        type();
    }, []);

    return (
        <section
            className="relative w-full h-screen bg-cover bg-center animate-zoomIn"
            style={{ backgroundImage: `url(${HeroSectionImg})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 animate-fadeIn"></div>

            {/* Fade-out gradient at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />

            {/* Content */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">
                    <span>{displayText}</span>
                    <span className="inline-block cursor-blink">|</span>
                </h1>

                <TransparentButton>Book Us!</TransparentButton>
                <TransparentButton>Contact Us!</TransparentButton>

                {/* Scroll down indicator */}
                <a
                    href="#next-section"
                    className="absolute bottom-6 animate-bounce text-yellow-400 text-sm"
                >
                    ↓ Scroll down
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
