import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Tour {
    id: string; title: string; location: string; price: number; duration: string;
    image: string; rating: number; reviews: number; original_price: number;
    badge: string; description: string; amenities: string;
}

const SmallDestinationCard = ({ dest }: { dest: Tour }) => (
    <Link to={`/tours/${dest.id}`} className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-[400px]">
        <div className="relative h-[200px] w-full overflow-hidden shrink-0">
            <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                {dest.badge && (
                    <div className="bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-sm inline-block">
                        {dest.badge}
                    </div>
                )}
            </div>
        </div>

        <div className="p-5 flex flex-col flex-grow bg-[#FDFDFD]">
            <div className="flex justify-between items-center mb-3 text-[11px] font-medium text-gray-500 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-yellow-500">
                    <Star size={12} fill="currentColor" strokeWidth={1} />
                    <span className="text-gray-700 font-bold">{dest.rating?.toFixed(2)}</span>
                    <span className="text-gray-400 font-normal">({dest.reviews})</span>
                </div>
                <div>{dest.duration}</div>
            </div>

            <div className="mb-2 text-[11px] font-medium text-gray-500">{dest.location}</div>
            <h3 className="text-[15px] font-semibold text-primary leading-snug mb-4 flex-grow group-hover:text-accent transition-colors">{dest.title}</h3>

            <div className="mt-auto">
                <div className="text-[11px] text-gray-500 mb-1">
                    From <span className="text-accent font-bold text-sm inline-block ml-1">${dest.price}</span>
                    {dest.original_price && <span className="line-through text-[10px] ml-1.5">${dest.original_price}</span>}
                </div>
            </div>
        </div>
    </Link>
);

const LargeDestinationCard = ({ dest, alignment = 'left' }: { dest: Tour, alignment?: 'left' | 'right' }) => (
    <Link to={`/tours/${dest.id}`} className="relative w-full h-[400px] rounded-[16px] overflow-hidden group block shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <img src={dest.image} alt={dest.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" />
        <div className="absolute inset-0 bg-black/40 hover:bg-black/50 z-10 transition-colors duration-500"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none mt-12 pb-16">
            <h3 className="text-[7rem] font-display font-medium text-[#F8F4EF] opacity-90 leading-none tracking-tighter mix-blend-overlay">
                {dest.location?.split(',')[0]}
            </h3>
            {alignment === 'left' && (
                <div className="absolute top-16 right-auto left-0 w-full text-center">
                    <span className="text-white font-medium text-sm">{dest.duration}</span>
                </div>
            )}
            <p className="text-white text-lg font-medium mt-4 absolute pt-32">{dest.description?.substring(0, 50)}...</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 z-30 flex justify-between items-end gap-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-[280px]">
                {dest.original_price && <div className="text-white/70 text-sm line-through mb-1">${dest.original_price}</div>}
                <div className="text-white text-3xl font-bold mb-1">${dest.price}</div>
                <div className="text-white/90 text-[10px] font-bold tracking-widest uppercase mb-4">Offer price per person</div>
            </div>

            <div className="text-right flex flex-col items-end max-w-sm">
                {alignment === 'right' && <div className="text-white font-medium text-sm mb-6">{dest.duration}</div>}
                <p className="text-white/80 text-[11px] leading-relaxed mb-4 text-right">{dest.amenities}</p>
                <div className="bg-accent hover:bg-white hover:text-primary text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors shrink-0">
                    Book Now
                </div>
            </div>
        </div>
    </Link>
);


const PopularDestinations = () => {
    const [destinations, setDestinations] = useState<Tour[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tours?featured=1')
            .then(r => r.json()).then(data => setDestinations(data.slice(0, 6)))
            .catch(() => {});
    }, []);

    if (destinations.length < 2) return null;

    // Arrange: first and last are large, middle are small
    const large1 = destinations[0];
    const large2 = destinations.length >= 6 ? destinations[5] : destinations[destinations.length - 1];
    const smalls = destinations.slice(1, 5);

    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-[2.5rem] font-medium text-primary mb-3 tracking-tight">Most popular destinations</h2>
                    <p className="text-gray-500 text-[15px]">Handpicked destinations with exclusive offers and unforgettable experiences.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Row 1 */}
                    <div className="lg:col-span-2">
                        <LargeDestinationCard dest={large1} alignment="left" />
                    </div>
                    {smalls[0] && <div className="lg:col-span-1"><SmallDestinationCard dest={smalls[0]} /></div>}
                    {smalls[1] && <div className="lg:col-span-1"><SmallDestinationCard dest={smalls[1]} /></div>}

                    {/* Row 2 */}
                    {smalls[2] && <div className="lg:col-span-1"><SmallDestinationCard dest={smalls[2]} /></div>}
                    {smalls[3] && <div className="lg:col-span-1"><SmallDestinationCard dest={smalls[3]} /></div>}
                    <div className="lg:col-span-2">
                        <LargeDestinationCard dest={large2} alignment="right" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
