
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white px-6 py-12 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Column 1 */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Hilaris Dator Choir</h2>
                    <p className="text-sm text-gray-300">
                        “Sing! With Heart and Voice!!!” <br />
                        Bringing joy and inspiration through sacred music across Ghana.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
                        <li><a href="#events" className="hover:text-yellow-400">Upcoming Events</a></li>
                        <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
                        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                    <p className="text-sm text-gray-300 mb-4">Follow us on our socials:</p>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <FaInstagram />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <SiTiktok />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Hilaris Dator Choir. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
