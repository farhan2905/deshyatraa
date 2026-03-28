import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Tour {
    id: string; title: string; location: string; price: number; duration: string;
    image: string; rating: number; reviews: number; badge: string;
}

const RecommendedTours = () => {
    const [recommended, setRecommended] = useState<Tour[]>([]);
    const [familyTrips, setFamilyTrips] = useState<Tour[]>([]);
    const [centerHero, setCenterHero] = useState<Tour | null>(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/tours?recommended=1')
            .then(r => r.json()).then(data => {
                // Last item with badge "Best Seller" is center hero, or just the last one
                const hero = data.find((t: Tour) => t.badge === 'Best Seller') || data[data.length - 1];
                setCenterHero(hero);
                setRecommended(data.filter((t: Tour) => t.id !== hero?.id).slice(0, 3));
            }).catch(() => {});

        fetch('http://localhost:5000/api/tours?family_trip=1')
            .then(r => r.json()).then(data => setFamilyTrips(data.slice(0, 3)))
            .catch(() => {});
    }, []);

    if (!centerHero) return null;

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium text-primary mb-4 tracking-tight">Best Tours For You</h2>
                    <p className="text-gray-600 text-lg">Hand-picked selections tailored to your preferences and travel style.</p>
                </div>

                {/* 3 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column - Recommended List */}
                    <div className="bg-white rounded-[24px] p-8 shadow-[0_5px_20px_rgba(0,0,0,0.02)]">
                        <h3 className="text-xl font-bold text-primary mb-8 tracking-tight font-display">Recommended for you</h3>
                        <div className="flex flex-col gap-6">
                            {recommended.map((item) => (
                                <Link to={`/tours/${item.id}`} key={item.id} className="flex items-center gap-4 group">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                            <Star size={12} fill="currentColor" strokeWidth={1} />
                                            <span className="text-[10px] text-gray-700 font-bold">{item.rating?.toFixed(1)}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-primary mb-1 group-hover:text-accent transition-colors leading-tight">{item.title}</h4>
                                        <div className="text-xs text-gray-500">{item.duration} • <span className="text-accent font-bold">${item.price}</span></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Center Column - Hero Card */}
                    <div className="h-full min-h-[500px] relative rounded-[24px] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                        <img src={centerHero.image} alt={centerHero.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:bg-black/30"></div>

                        {centerHero.badge && (
                            <div className="absolute top-6 left-6 z-20 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm">
                                {centerHero.badge}
                            </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-8 z-30 flex flex-col items-center text-center">
                            <h3 className="text-3xl font-display font-bold text-white mb-2 leading-tight drop-shadow-md">
                                {centerHero.title}
                            </h3>
                            <div className="flex items-center justify-center gap-4 text-white/90 text-sm mb-6 font-medium">
                                <span>{centerHero.duration}</span>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star size={14} fill="currentColor" strokeWidth={1} />
                                    <span>{centerHero.rating?.toFixed(1)}</span>
                                </div>
                            </div>
                            <Link to={`/tours/${centerHero.id}`} className="w-full bg-white text-primary hover:bg-accent hover:text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg">
                                Book Now - ${centerHero.price}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Family List */}
                    <div className="bg-white rounded-[24px] p-8 shadow-[0_5px_20px_rgba(0,0,0,0.02)]">
                        <h3 className="text-xl font-bold text-primary mb-8 tracking-tight font-display">Perfect for family trip</h3>
                        <div className="flex flex-col gap-6">
                            {familyTrips.map((item) => (
                                <Link to={`/tours/${item.id}`} key={item.id} className="flex items-center gap-4 group">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                            <Star size={12} fill="currentColor" strokeWidth={1} />
                                            <span className="text-[10px] text-gray-700 font-bold">{item.rating?.toFixed(1)}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-primary mb-1 group-hover:text-accent transition-colors leading-tight">{item.title}</h4>
                                        <div className="text-xs text-gray-500">{item.duration} • <span className="text-accent font-bold">${item.price}</span></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RecommendedTours;
