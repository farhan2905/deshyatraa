import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiteSeeing = () => {
    const regions = [
        {
            state: "Rajasthan",
            description: "Land of Kings, Forts, and Palaces",
            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
            cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"]
        },
        {
            state: "Kerala",
            description: "God's Own Country, Backwaters",
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
            cities: ["Munnar", "Alleppey", "Kochi", "Wayanad"]
        },
        {
            state: "Himachal Pradesh",
            description: "Snow-capped Peaks and Valleys",
            image: "https://images.unsplash.com/photo-1626081498687-fca8147d3c01?q=80&w=800&auto=format&fit=crop",
            cities: ["Manali", "Shimla", "Dharamshala", "Dalhousie"]
        },
        {
            state: "Goa",
            description: "Beaches, Nightlife, and Heritage",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
            cities: ["North Goa", "South Goa", "Panjim", "Vasco"]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Discover Incredible India</span>
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">State-wise Sightseeing</h2>
                    <p className="text-slate-600 text-lg">
                        Explore the rich heritage, vibrant culture, and diverse landscapes of India's states.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {regions.map((region, idx) => (
                        <div key={idx} className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Image Background */}
                            <div className="h-64 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                                <img 
                                    src={region.image} 
                                    alt={region.state} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-1 font-outfit">{region.state}</h3>
                                    <p className="text-white/80 text-sm font-medium">{region.description}</p>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-accent" />
                                    Top Destinations
                                </h4>
                                <ul className="space-y-3 mb-6">
                                    {region.cities.map((city, cIdx) => (
                                        <li key={cIdx} className="flex items-center text-slate-600 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover:bg-accent transition-colors"></div>
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/destinations" className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2">
                                    Explore {region.state}
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SiteSeeing;
