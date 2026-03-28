import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const continents = [
    {
        id: 1,
        title: "Oceania",
        description: "Pristine beaches & outback adventures",
        image: "https://images.unsplash.com/photo-1523482580662-fefe6eb5310b?q=80&w=1200&auto=format&fit=crop",
        duration: "10-15 Days",
        amenities: "Great Barrier Reef | Outback tours | New Zealand fjords",
        price: "$ 1,200.00",
        isLarge: true,
        bgOverlay: "bg-black/30 hover:bg-black/40",
        alignment: "left" as const
    },
    {
        id: 2,
        title: "Europe",
        location: "Multiple Countries",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop",
        duration: "7-14 Days",
        rating: 4.9,
        reviews: 842,
        price: "$ 950.00",
        badge: "Most Popular",
        isLarge: false
    },
    {
        id: 3,
        title: "South America",
        location: "Peru, Brazil, Argentina",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=600&auto=format&fit=crop",
        duration: "10-20 Days",
        rating: 4.8,
        reviews: 430,
        price: "$ 1,150.00",
        isLarge: false
    },
    {
        id: 4,
        title: "North America",
        location: "USA, Canada, Mexico",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
        duration: "7-21 Days",
        rating: 4.7,
        reviews: 512,
        price: "$ 890.00",
        isLarge: false
    },
    {
        id: 5,
        title: "Africa",
        location: "Safari & Wilderness",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop",
        duration: "8-14 Days",
        rating: 5.0,
        reviews: 320,
        price: "$ 1,450.00",
        badge: "Wildlife",
        badgeColor: "bg-[#2A3143]",
        isLarge: false
    },
    {
        id: 6,
        title: "Asia",
        subtitle: "The Land of Culture",
        description: "Explore diverse traditions and landscapes",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
        duration: "10-30 Days",
        amenities: "Temple tours | Culinary experiences | Tropical beaches",
        price: "$ 750.00",
        isLarge: true,
        bgOverlay: "bg-black/40 hover:bg-black/50",
        alignment: "right" as const
    }
];

const SmallContinentCard = ({ dest }: { dest: any }) => (
    <Link to="/tours" className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-[400px] border border-gray-100">
        <div className="relative h-[200px] w-full overflow-hidden shrink-0">
            <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                {dest.badge && (
                    <div className={`${dest.badgeColor || 'bg-accent'} text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-sm inline-block`}>
                        {dest.badge}
                    </div>
                )}
            </div>
        </div>

        <div className="p-5 flex flex-col flex-grow bg-[#FDFDFD]">
            <div className="flex justify-between items-center mb-3 text-[11px] font-medium text-gray-500 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-yellow-500">
                    <Star size={12} fill="currentColor" strokeWidth={1} />
                    <span className="text-gray-700 font-bold">{dest.rating?.toFixed(1)}</span>
                    <span className="text-gray-400 font-normal">({dest.reviews})</span>
                </div>
                <div>{dest.duration}</div>
            </div>

            <div className="mb-2 text-[11px] font-medium text-gray-500 uppercase tracking-wider uppercase">
                {dest.location}
            </div>
            <h3 className="text-xl font-bold text-primary mb-4 flex-grow group-hover:text-accent transition-colors font-display tracking-tight">
                {dest.title}
            </h3>

            <div className="mt-auto flex justify-between items-center">
                <div className="text-[11px] text-gray-500 mb-1">
                    Starting from <span className="text-accent font-bold text-base inline-block ml-1">{dest.price}</span>
                </div>
                <div className="text-xs font-bold text-primary px-3 py-1.5 rounded-full border border-gray-200 group-hover:bg-primary group-hover:text-white transition-colors">
                    View Tours
                </div>
            </div>
        </div>
    </Link>
);

const LargeContinentCard = ({ dest }: { dest: any }) => (
    <Link to="/tours" className="relative w-full h-[400px] rounded-[16px] overflow-hidden group block shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100">
        <img
            src={dest.image}
            alt={dest.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
        />
        <div className={`absolute inset-0 z-10 transition-colors duration-500 ${dest.bgOverlay}`}></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 mt-8 pointer-events-none">
            {dest.subtitle && (
                <span className="text-white font-medium text-lg tracking-wider uppercase mb-2 drop-shadow-md">{dest.subtitle}</span>
            )}
            <h3 className="text-[5rem] md:text-[7rem] font-display font-medium text-white opacity-95 leading-none tracking-tighter drop-shadow-xl text-center px-4">
                {dest.title}
            </h3>
            <p className="text-white text-lg font-medium mt-6 drop-shadow-md hidden md:block">{dest.description}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 z-30 flex justify-between items-end gap-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-32">
            <div className="max-w-[300px]">
                <div className="text-white text-3xl font-bold mb-1">
                    {dest.price}
                </div>
                <div className="text-white/90 text-[10px] font-bold tracking-widest uppercase mb-4">
                    Starting price
                </div>
            </div>

            <div className="text-right flex flex-col items-end max-w-sm">
                <div className="text-white font-medium text-sm tracking-wider uppercase mb-6 drop-shadow">{dest.duration}</div>
                <p className="text-white/90 text-xs leading-relaxed mb-5 text-right hidden md:block min-h-[36px]">
                    {dest.amenities}
                </p>
                <div className="bg-white hover:bg-accent text-primary hover:text-white px-8 py-3.5 rounded-[4px] font-bold uppercase tracking-widest text-xs transition-colors shrink-0 shadow-lg cursor-pointer pointer-events-auto">
                    View Tours
                </div>
            </div>
        </div>
    </Link>
);

const DestinationsGrid = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent font-bold tracking-widest text-sm mb-4 inline-block uppercase">Global Reach</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tight">Explore Continents</h2>
                    <p className="text-gray-500 text-base leading-relaxed">
                        Discover amazing tours and packages across all continents. Tailor-made itineraries for your perfect holiday.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Row 1 */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <LargeContinentCard dest={continents[0]} />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1">
                        <SmallContinentCard dest={continents[1]} />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1">
                        <SmallContinentCard dest={continents[2]} />
                    </div>

                    {/* Row 2 */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <SmallContinentCard dest={continents[3]} />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1">
                        <SmallContinentCard dest={continents[4]} />
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <LargeContinentCard dest={continents[5]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationsGrid;
