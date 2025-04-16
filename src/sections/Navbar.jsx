import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${
            isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
        }`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        ChoirSite
                    </span>
                </a>

                {/* Menu Toggle Button */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                        aria-hidden="true"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Mobile + Desktop Menu */}
                <div
                    className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
                        md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
                        dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-blue-700 dark:text-white md:p-0">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:p-0">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
