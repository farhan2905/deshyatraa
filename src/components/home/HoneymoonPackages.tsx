import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const packages = [
    {
        id: 1,
        title: "Kashmir Romance",
        subtitle: "LIMITED TIME OFFER",
        badge: "30% OFF UPTO",
        footerText: "PARADISE ON EARTH AWAITS",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
        isPromo: true
    },
    {
        id: 2,
        title: "Maldives overwater bungalow experience",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
        duration: "5 Nights - 6 Days",
        rating: 5.0,
        reviews: 412,
        badge: "15% off",
        isPromo: false
    },
    {
        id: 3,
        title: "Munnar tea gardens & mist retreat",
        location: "Kerala, India",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        duration: "4 Nights - 5 Days",
        rating: 4.8,
        reviews: 295,
        badge: "10% off",
        isPromo: false
    }
];

const HoneymoonPackages = () => {
    return (
        <section className="relative pt-24 pb-16 bg-[#FAFAFA]">
            {/* Full-width dark mountain background container */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
                    alt="Mountains"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1A202C]/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/40 to-[#FAFAFA]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Centered White Header Sequence */}
                <div className="text-center mb-16 max-w-2xl mx-auto pt-8">
                    <h2 className="text-[2.5rem] font-medium text-white mb-3 tracking-tight drop-shadow-sm">Honeymoon tour packages</h2>
                    <p className="text-white/80 text-[15px]">Lorem ipsum dolor sit amet consectetur. Ac lobortis tempus tincidunt suscipit volutpat nunc condimentum imperdiet tincidunt.</p>
                </div>

                {/* Overlapping Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Left Wide Promo Card (Spans 2 cols) */}
                    <div className="lg:col-span-2">
                        <div className="relative w-full h-[450px] bg-white rounded-t-[16px] overflow-hidden group flex flex-col items-center justify-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                            <img
                                src={packages[0].image}
                                alt={packages[0].title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                            />
                            {/* Blueish gradient overlay to match screenshot */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/80 via-[#2B6CB0]/50 to-[#2B6CB0]/40 z-10"></div>

                            <div className="relative z-20 flex flex-col items-center p-8 w-full mt-8">
                                <div className="text-white font-bold leading-tight mb-2 flex items-center gap-1.5">
                                    <span className="text-3xl tracking-tight">{packages[0].badge?.split(' ')[0]}</span>
                                    <div className="flex flex-col text-[10px] text-left leading-none tracking-widest mt-1">
                                        <span>OFF</span>
                                        <span>UPTO</span>
                                    </div>
                                </div>
                                <div className="text-white/90 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                                    {packages[0].subtitle}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-medium text-white mb-8">
                                    {packages[0].title}
                                </h3>

                                <div className="text-white/80 text-[11px] font-bold tracking-[0.3em] uppercase mb-8 flex items-center w-full justify-center gap-4">
                                    <div className="h-px bg-white/30 flex-grow max-w-[40px]"></div>
                                    {packages[0].footerText}
                                    <div className="h-px bg-white/30 flex-grow max-w-[40px]"></div>
                                </div>

                                <Link to="/tours" className="bg-accent hover:bg-white hover:text-primary text-white px-10 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors shadow-lg shadow-accent/20">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Vertical Cards (Spans 1 col each) */}
                    {packages.slice(1).map((pkg) => (
                        <div key={pkg.id} className="lg:col-span-1">
                            <Link to="/tour-details" className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-[450px]">
                                <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                        {pkg.badge && (
                                            <div className="bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-sm inline-block">
                                                {pkg.badge}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow bg-[#FDFDFD]">
                                    <div className="flex justify-between items-center mb-3 text-[11px] font-medium text-gray-500 pb-3 border-b border-gray-100">
                                        <div className="flex items-center gap-1.5 text-yellow-500">
                                            <Star size={12} fill="currentColor" strokeWidth={1} />
                                            <span className="text-gray-700 font-bold">{pkg.rating?.toFixed(2)}</span>
                                            <span className="text-gray-400 font-normal">({pkg.reviews})</span>
                                        </div>
                                        <div>{pkg.duration}</div>
                                    </div>

                                    <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                        {pkg.location}
                                    </div>
                                    <h3 className="text-[15px] font-semibold text-primary leading-snug mb-4 group-hover:text-accent transition-colors">
                                        {pkg.title}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default HoneymoonPackages;
