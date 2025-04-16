import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const SocialSidebar = () => {
    return (
        <div className="fixed top-1/3 right-0 z-50 flex flex-col items-center space-y-4 pr-2">
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-l-lg hover:scale-110 transition duration-300"
                aria-label="Instagram"
            >
                <FaInstagram size={20} />
            </a>
            <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white p-3 rounded-l-lg hover:scale-110 transition duration-300"
                aria-label="TikTok"
            >
                <SiTiktok size={20} />
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-3 rounded-l-lg hover:scale-110 transition duration-300"
                aria-label="YouTube"
            >
                <FaYoutube size={20} />
            </a>
        </div>
    );
};

export default SocialSidebar;
