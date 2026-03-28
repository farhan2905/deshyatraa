import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Tour {
    id: string; title: string; location: string; price: number; duration: string;
    image: string; rating: number; reviews: number; original_price: number;
    badge: string;
}

const HotDeals = () => {
    const [deals, setDeals] = useState<Tour[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tours?hot_deal=1')
            .then(r => r.json()).then(setDeals).catch(() => {});
    }, []);

    if (deals.length === 0) return null;

    return (
        <section className="relative py-24 bg-[#FFEDE4] overflow-hidden">
            {/* SVG Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="topography" width="400" height="400" patternUnits="userSpaceOnUse">
                            <path d="M0,50 Q100,10 200,60 T400,30 M0,150 Q100,110 200,160 T400,130 M0,250 Q100,210 200,260 T400,230 M0,350 Q100,310 200,360 T400,330 M50,0 Q10,100 60,200 T30,400 M150,0 Q110,100 160,200 T130,400 M250,0 Q210,100 260,200 T230,400 M350,0 Q310,100 360,200 T330,400" fill="none" stroke="#FF5733" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="3" fill="#FF5733" />
                            <circle cx="300" cy="250" r="2" fill="#FF5733" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topography)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium text-primary mb-4 tracking-tight leading-tight">Hot deals on selected trips</h2>
                    <p className="text-gray-600 text-lg">Curated packages offering the best value for your upcoming adventures.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {deals.map((deal) => (
                        <Link to={`/tours/${deal.id}`} key={deal.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full">
                            <div className="relative h-64 w-full overflow-hidden">
                                <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                    {deal.badge && (
                                        <div className="bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm inline-block">
                                            {deal.badge}
                                        </div>
                                    )}
                                    {deal.original_price && deal.original_price > deal.price && (
                                        <div className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm inline-block w-fit">
                                            {Math.round(((deal.original_price - deal.price) / deal.original_price) * 100)}% off
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-500 pb-4 border-b border-gray-100">
                                    <div className="flex items-center gap-1.5 text-yellow-500">
                                        <Star size={14} fill="currentColor" strokeWidth={1} />
                                        <span className="text-gray-700 font-bold">{deal.rating?.toFixed(2)}</span>
                                        <span className="text-gray-400 font-normal">({deal.reviews})</span>
                                    </div>
                                    <div>{deal.duration}</div>
                                </div>

                                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                    {deal.location}
                                </div>
                                <h3 className="text-lg font-bold text-primary leading-snug mb-6 flex-grow group-hover:text-accent transition-colors">
                                    {deal.title}
                                </h3>

                                <div className="mt-auto">
                                    <div className="text-sm text-gray-500 mb-1">From <span className="text-accent font-bold text-lg inline-block ml-1">${deal.price.toFixed(2)}</span> {deal.original_price && <span className="line-through text-xs ml-2">${deal.original_price.toFixed(2)}</span>}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

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
