import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import AboutStats from '../components/home/AboutStats';
import CategoryStyles from '../components/home/CategoryStyles';
import ServicesOffered from '../components/home/ServicesOffered';
import HotDeals from '../components/home/HotDeals';
import PopularDestinations from '../components/home/PopularDestinations';
import HoneymoonPackages from '../components/home/HoneymoonPackages';
import RecommendedTours from '../components/home/RecommendedTours';
import AdBanner from '../components/home/AdBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ReviewSection from '../components/home/ReviewSection';
import FaqSection from '../components/home/FaqSection';
import TopDestinations from '../components/home/TopDestinations';
import BlogSection from '../components/home/BlogSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutStats />
            <TrustBar />
            
            <CategoryStyles />
            <ServicesOffered />
            
            <HotDeals />
            <PopularDestinations />
            
            <HoneymoonPackages />
            <RecommendedTours />
            <AdBanner />
            
            <WhyChooseUs />
            <ReviewSection />
            
            <FaqSection />
            <TopDestinations />
            
            <BlogSection />
        </div>
    );
};

export default Home;
