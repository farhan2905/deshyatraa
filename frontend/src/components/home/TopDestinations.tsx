import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const destinations = [
    {
        id: 1,
        title: "NORTH INDIA",
        tours: 42,
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "SOUTH INDIA",
        tours: 35,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "NORTHEAST INDIA",
        tours: 18,
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "INTERNATIONAL",
        tours: 56,
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
    }
];

const TopDestinations = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth * 0.8; // scroll by 80% of container width
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="relative py-32 overflow-hidden bg-primary-dark">
            {/* Background Image full width */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?auto=format&fit=crop&q=80&w=2000"
                    alt="Elephants in wild background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Giant Text overlay inside container */}
                <div className="absolute top-0 left-0 w-full z-0 opacity-30 select-none pointer-events-none mt-12 pl-6">
                    <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white leading-none tracking-tighter uppercase">
                        Destination
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 relative z-10 mt-20 lg:mt-32">

                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-end pb-12">
                        <span className="text-accent font-bold tracking-widest text-sm mb-4 inline-block uppercase">Destinations</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                            Our top destinations
                        </h2>

                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side Slider */}
                    <div className="w-full lg:w-2/3 relative -mr-[50vw]">
                        {/* CSS Scroll Snap Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pr-[50vw]"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {destinations.map((dest) => (
                                <Link
                                    to="/destinations"
                                    key={dest.id}
                                    className="snap-start flex-shrink-0 w-72 md:w-80 h-[450px] relative rounded-[24px] overflow-hidden group border border-white/20"
                                >
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={dest.image}
                                            alt={dest.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex justify-between items-end">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1 font-display tracking-tight">{dest.title}</h3>
                                            <p className="text-white/80 font-medium">{dest.tours} Packages</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Global style to hide scrollbar specifically in this component if inline style fails */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default TopDestinations;
