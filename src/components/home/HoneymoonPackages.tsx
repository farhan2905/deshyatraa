import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Tour {
    id: string; title: string; location: string; price: number; duration: string;
    image: string; rating: number; reviews: number; badge: string;
}

const HoneymoonPackages = () => {
    const [packages, setPackages] = useState<Tour[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tours?honeymoon=1')
            .then(r => r.json()).then(setPackages).catch(() => {});
    }, []);

    if (packages.length === 0) return null;

    const promo = packages[0];
    const cards = packages.slice(1, 3);

    return (
        <section className="relative pt-24 pb-16 bg-[#FAFAFA]">
            {/* Full-width dark mountain background */}
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
                <div className="text-center mb-16 max-w-2xl mx-auto pt-8">
                    <h2 className="text-3xl md:text-[2.5rem] font-medium text-white mb-3 md:mb-4 tracking-tight drop-shadow-sm leading-tight">Honeymoon tour packages</h2>
                    <p className="text-white/80 text-[15px]">Romantic getaways curated for couples, from misty mountains to tropical beaches.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left Wide Promo Card */}
                    <div className="lg:col-span-2">
                        <div className="relative w-full h-[450px] bg-white rounded-t-[16px] overflow-hidden group flex flex-col items-center justify-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                            <img src={promo.image} alt={promo.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/80 via-[#2B6CB0]/50 to-[#2B6CB0]/40 z-10"></div>

                            <div className="relative z-20 flex flex-col items-center p-8 w-full mt-8">
                                {promo.badge && (
                                    <div className="text-white font-bold leading-tight mb-2 flex items-center gap-1.5">
                                        <span className="text-3xl tracking-tight">{promo.badge}</span>
                                    </div>
                                )}
                                <div className="text-white/90 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                                    LIMITED TIME OFFER
                                </div>
                                <h3 className="text-4xl md:text-5xl font-medium text-white mb-8">
                                    {promo.title}
                                </h3>

                                <div className="text-white/80 text-[11px] font-bold tracking-[0.3em] uppercase mb-8 flex items-center w-full justify-center gap-4">
                                    <div className="h-px bg-white/30 flex-grow max-w-[40px]"></div>
                                    PARADISE AWAITS
                                    <div className="h-px bg-white/30 flex-grow max-w-[40px]"></div>
                                </div>

                                <Link to={`/tours/${promo.id}`} className="bg-accent hover:bg-white hover:text-primary text-white px-10 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors shadow-lg shadow-accent/20">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Vertical Cards */}
                    {cards.map((pkg) => (
                        <div key={pkg.id} className="lg:col-span-1">
                            <Link to={`/tours/${pkg.id}`} className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-[450px]">
                                <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    {pkg.badge && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <div className="bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-sm inline-block">
                                                {pkg.badge}
                                            </div>
                                        </div>
                                    )}
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

                                    <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">{pkg.location}</div>
                                    <h3 className="text-[15px] font-semibold text-primary leading-snug mb-4 group-hover:text-accent transition-colors">{pkg.title}</h3>
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
