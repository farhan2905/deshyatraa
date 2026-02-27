import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DestinationsHero from '../components/destinations/DestinationsHero';
import DestinationsGrid from '../components/destinations/DestinationsGrid';

const Destinations = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <DestinationsHero />
                <DestinationsGrid />
            </main>
            <Footer />
        </div>
    );
};

export default Destinations;
