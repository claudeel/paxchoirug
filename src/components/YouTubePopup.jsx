import React, { useEffect, useState } from 'react';

const YouTubePopup = () => {
    const [show, setShow] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
            setTimeout(() => setAnimate(true), 50); // animation delay
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className={`transform transition-all duration-700 ease-out 
                ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
                bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-md w-full p-6 text-center relative`}
            >
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Enjoying the music?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Subscribe to our YouTube channel for more uplifting choral performances!
                </p>

                <a
                    href="https://www.youtube.com/channel/YOUR_CHANNEL_ID?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition mb-4"
                >
                    Subscribe on YouTube ❤️
                </a>

                <div>
                    <button
                        onClick={() => setShow(false)}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white underline"
                    >
                        Not now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YouTubePopup;
