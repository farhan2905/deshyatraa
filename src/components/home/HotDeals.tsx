import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const deals = [
    {
        id: 1,
        title: "Explore Dubai's beaches and skyscrapers",
        location: "United Arab Emirates",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        rating: 5.0,
        reviews: 328,
        duration: "5 Nights - 6 Days",
        price: "$650.00",
        originalPrice: "$750.00",
        badge: "Featured",
        discount: "10% off"
    },
    {
        id: 2,
        title: "Udaipur's majestic palaces and lakes",
        location: "Rajasthan, India",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop",
        rating: 5.0,
        reviews: 450,
        duration: "4 Nights - 5 Days",
        price: "$250.00",
        originalPrice: "$290.00",
        badge: "",
        discount: "15% off"
    },
    {
        id: 3,
        title: "Discover Shimla's stunning snow-capped peaks",
        location: "Himachal Pradesh, India",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 335,
        duration: "5 Nights - 6 Days",
        price: "$280.00",
        originalPrice: "$320.00",
        badge: "",
        discount: "12% off"
    },
    {
        id: 4,
        title: "Experience the charm of Mysore palaces",
        location: "Karnataka, India",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 330,
        duration: "3 Nights - 4 Days",
        price: "$180.00",
        originalPrice: "$210.00",
        badge: "",
        discount: "15% off"
    }
];

const HotDeals = () => {
    return (
        <section className="relative py-24 bg-[#FFEDE4] overflow-hidden">
            {/* SVG Background Pattern (Topography Map Style) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="topography" width="400" height="400" patternUnits="userSpaceOnUse">
                            <path d="M0,50 Q100,10 200,60 T400,30 M0,150 Q100,110 200,160 T400,130 M0,250 Q100,210 200,260 T400,230 M0,350 Q100,310 200,360 T400,330 M50,0 Q10,100 60,200 T30,400 M150,0 Q110,100 160,200 T130,400 M250,0 Q210,100 260,200 T230,400 M350,0 Q310,100 360,200 T330,400" fill="none" stroke="#FF5733" strokeWidth="0.5" />
                            {/* Abstract decorative elements to represent travel */}
                            <circle cx="100" cy="100" r="3" fill="#FF5733" />
                            <circle cx="300" cy="250" r="2" fill="#FF5733" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topography)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Centered Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium text-primary mb-4 tracking-tight leading-tight">Hot deals on selected trips</h2>
                    <p className="text-gray-600 text-lg">Curated packages offering the best value for your upcoming adventures.</p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {deals.map((deal) => (
                        <Link to="/tour-details" key={deal.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full">
                            {/* Image & Badges */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                    {deal.badge && (
                                        <div className="bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm inline-block">
                                            {deal.badge}
                                        </div>
                                    )}
                                    {deal.discount && (
                                        <div className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm inline-block w-fit">
                                            {deal.discount}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Rating & Duration */}
                                <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-500 pb-4 border-b border-gray-100">
                                    <div className="flex items-center gap-1.5 text-yellow-500">
                                        <Star size={14} fill="currentColor" strokeWidth={1} />
                                        <span className="text-gray-700 font-bold">{deal.rating.toFixed(2)}</span>
                                        <span className="text-gray-400 font-normal">({deal.reviews})</span>
                                    </div>
                                    <div>{deal.duration}</div>
                                </div>

                                {/* Location & Title */}
                                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                    {deal.location}
                                </div>
                                <h3 className="text-lg font-bold text-primary leading-snug mb-6 flex-grow group-hover:text-accent transition-colors">
                                    {deal.title}
                                </h3>

                                {/* Price */}
                                <div className="mt-auto">
                                    <div className="text-sm text-gray-500 mb-1">From <span className="text-accent font-bold text-lg inline-block ml-1">{deal.price}</span> <span className="line-through text-xs ml-2">{deal.originalPrice}</span></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Centered Button */}
                <div className="text-center">
                    <Link to="/tours" className="inline-block bg-accent hover:bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg shadow-accent/20">
                        View All Destinations
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HotDeals;
