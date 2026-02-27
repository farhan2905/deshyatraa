import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const destinations = [
    {
        id: 1,
        title: "Kerala",
        description: "Backwaters & Tropical Bliss",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
        duration: "5 Nights - 6 Days",
        amenities: "4 star houseboat | Daily traditional meals | Kochi to Munnar | Alleppey backwaters",
        price: "$ 350.00 USD",
        isLarge: true,
        bgOverlay: "bg-black/40 hover:bg-black/50"
    },
    {
        id: 2,
        title: "Experience Goa's vibrant beaches & nightlife",
        location: "Goa, India",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop",
        duration: "4 Nights - 5 Days",
        rating: 4.8,
        reviews: 412,
        price: "$ 180.00 USD",
        originalPrice: "$ 220.00 USD",
        badge: "20% off",
        isLarge: false
    },
    {
        id: 3,
        title: "Unveil Rajasthan's royal forts and palaces",
        location: "Rajasthan, India",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600&auto=format&fit=crop",
        duration: "7 Nights - 8 Days",
        rating: 5.0,
        reviews: 520,
        price: "$ 450.00 USD",
        originalPrice: "$ 500.00 USD",
        badge: "Featured",
        badge2: "10% off",
        badgeColor: "bg-[#2A3143]",
        isLarge: false
    },
    {
        id: 4,
        title: "Bali private villa retreat & cultural immersion",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
        duration: "6 Nights - 7 Days",
        rating: 4.9,
        reviews: 336,
        price: "$ 598.00 USD",
        originalPrice: "$ 650.00 USD",
        badge: "15% off",
        isLarge: false
    },
    {
        id: 5,
        title: "Andaman pristine beaches and coral reefs",
        location: "Andaman & Nicobar",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop",
        duration: "5 Nights - 6 Days",
        rating: 4.9,
        reviews: 280,
        price: "$ 420.00 USD",
        originalPrice: "$ 480.00 USD",
        badge: "12% off",
        isLarge: false
    },
    {
        id: 6,
        title: "Ladakh",
        subtitle: "The Land of High Passes",
        description: "Explore the majestic Himalayas",
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop",
        duration: "6 Nights - 7 Days",
        amenities: "Acclimatization stay | Pangong Tso visit | Nubra Valley camp | Monastery tours",
        price: "$ 490.00 USD",
        originalPrice: "$ 550.00 USD",
        isLarge: true,
        bgOverlay: "bg-black/30 hover:bg-black/40"
    }
];

const SmallDestinationCard = ({ dest }: { dest: any }) => (
    <Link to="/tour-details" className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-[400px]">
        {/* Image & Badges */}
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
                {dest.badge2 && (
                    <div className={`bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-sm inline-block w-fit`}>
                        {dest.badge2}
                    </div>
                )}
            </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col flex-grow bg-[#FDFDFD]">
            {/* Rating & Duration */}
            <div className="flex justify-between items-center mb-3 text-[11px] font-medium text-gray-500 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-yellow-500">
                    <Star size={12} fill="currentColor" strokeWidth={1} />
                    <span className="text-gray-700 font-bold">{dest.rating?.toFixed(2)}</span>
                    <span className="text-gray-400 font-normal">({dest.reviews})</span>
                </div>
                <div>{dest.duration}</div>
            </div>

            {/* Location & Title */}
            <div className="mb-2 text-[11px] font-medium text-gray-500">
                {dest.location}
            </div>
            <h3 className="text-[15px] font-semibold text-primary leading-snug mb-4 flex-grow group-hover:text-accent transition-colors">
                {dest.title}
            </h3>

            {/* Price */}
            <div className="mt-auto">
                <div className="text-[11px] text-gray-500 mb-1">
                    From <span className="text-accent font-bold text-sm inline-block ml-1">{dest.price}</span>
                    {dest.originalPrice && <span className="line-through text-[10px] ml-1.5">{dest.originalPrice}</span>}
                </div>
            </div>
        </div>
    </Link>
);

const LargeDestinationCard = ({ dest, alignment = 'left' }: { dest: any, alignment?: 'left' | 'right' }) => (
    <Link to="/tour-details" className="relative w-full h-[400px] rounded-[16px] overflow-hidden group block shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <img
            src={dest.image}
            alt={dest.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
        />
        <div className={`absolute inset-0 ${dest.bgOverlay} z-10 transition-colors duration-500`}></div>

        {/* Top/Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none mt-12 pb-16">
            {dest.subtitle && (
                <span className="text-white font-medium text-lg mb-2">{dest.subtitle}</span>
            )}
            <h3 className="text-[7rem] font-display font-medium text-[#F8F4EF] opacity-90 leading-none tracking-tighter mix-blend-overlay">
                {dest.title}
            </h3>
            {alignment === 'left' && (
                <div className="absolute top-16 right-auto left-0 w-full text-center">
                    <span className="text-white font-medium text-sm">{dest.duration}</span>
                </div>
            )}
            <p className="text-white text-lg font-medium mt-4 absolute pt-32">{dest.description}</p>
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-30 flex justify-between items-end gap-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-[280px]">
                {dest.originalPrice && (
                    <div className="text-white/70 text-sm line-through mb-1">{dest.originalPrice}</div>
                )}
                <div className="text-white text-3xl font-bold mb-1">
                    {dest.price}
                </div>
                <div className="text-white/90 text-[10px] font-bold tracking-widest uppercase mb-4">
                    Offer price per person
                </div>
            </div>

            <div className="text-right flex flex-col items-end max-w-sm">
                {alignment === 'right' && (
                    <div className="text-white font-medium text-sm mb-6">{dest.duration}</div>
                )}
                <p className="text-white/80 text-[11px] leading-relaxed mb-4 text-right">
                    {dest.amenities}
                </p>
                <div className="bg-accent hover:bg-white hover:text-primary text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors shrink-0">
                    Book Now
                </div>
            </div>
        </div>
    </Link>
);


const PopularDestinations = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 md:px-12">
                {/* Centered Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-[2.5rem] font-medium text-primary mb-3 tracking-tight">Most popular destinations</h2>
                    <p className="text-gray-500 text-[15px]">Lorem ipsum dolor sit amet consectetur. Ac lobortis tempus tincidunt suscipit volutpat nunc condimentum imperdiet tincidunt.</p>
                </div>

                {/* 6-Card Mosaic Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Row 1 */}
                    <div className="lg:col-span-2">
                        <LargeDestinationCard dest={destinations[0]} alignment="left" />
                    </div>
                    <div className="lg:col-span-1">
                        <SmallDestinationCard dest={destinations[1]} />
                    </div>
                    <div className="lg:col-span-1">
                        <SmallDestinationCard dest={destinations[2]} />
                    </div>

                    {/* Row 2 */}
                    <div className="lg:col-span-1">
                        <SmallDestinationCard dest={destinations[3]} />
                    </div>
                    <div className="lg:col-span-1">
                        <SmallDestinationCard dest={destinations[4]} />
                    </div>
                    <div className="lg:col-span-2">
                        <LargeDestinationCard dest={destinations[5]} alignment="right" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
