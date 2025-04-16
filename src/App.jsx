import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useEffect} from 'react';
import HeroSection from './sections/HeroSection';
import Navbar from './sections/Navbar';
import YouTubePopup from './components/YouTubePopup';
import UpcomingEvents from './sections/UpcomingEvents';
import FloatingNotes from './components/FloatingNotes';
import SocialSidebar from './components/SocialSidebar';
import Footer from './sections/Footer';
import MemberAndQuoteSection from "./sections/MemberAndQuoteSection.jsx";
function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (
        <div className="relative overflow-hidden">
            <FloatingNotes/>
            <Navbar/>
            <HeroSection/>
            <YouTubePopup/>
            <SocialSidebar />
            <UpcomingEvents/>
            <MemberAndQuoteSection />
            <Footer/>
        </div>
    );
}

export default App;
