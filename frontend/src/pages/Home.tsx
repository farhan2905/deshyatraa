import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import AboutStats from '../components/home/AboutStats';
import CategoryStyles from '../components/home/CategoryStyles';
import HotDeals from '../components/home/HotDeals';
import PopularDestinations from '../components/home/PopularDestinations';
import HoneymoonPackages from '../components/home/HoneymoonPackages';
import RecommendedTours from '../components/home/RecommendedTours';
import AdBanner from '../components/home/AdBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FaqSection from '../components/home/FaqSection';
import TopDestinations from '../components/home/TopDestinations';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutStats />
            <TrustBar />
            <CategoryStyles />
            <HotDeals />
            <PopularDestinations />
            <HoneymoonPackages />
            <RecommendedTours />
            <AdBanner />
            <WhyChooseUs />
            <FaqSection />
            <TopDestinations />
        </div>
    );
};

export default Home;
