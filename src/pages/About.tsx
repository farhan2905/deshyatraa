
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutExperience from '../components/about/AboutExperience';
import AboutStatsSection from '../components/about/AboutStatsSection';
import AboutDestinations from '../components/about/AboutDestinations';
import AboutBenefits from '../components/about/AboutBenefits';
import AboutTestimonials from '../components/about/AboutTestimonials';
import AboutWhyChooseUs from '../components/about/AboutWhyChooseUs';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <AboutHero />
                <AboutExperience />
                <AboutStatsSection />
                <AboutDestinations />
                <AboutBenefits />
                <AboutTestimonials />
                <AboutWhyChooseUs />
            </main>
            <Footer />
        </div>
    );
};

export default About;
