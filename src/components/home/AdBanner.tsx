import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const AdBanner = () => {
    return (
        <section className="pb-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[24px] overflow-hidden group shadow-[0_15px_50px_rgba(0,0,0,0.08)]">

                    {/* Background Image & Gradient overlay */}
                    <img
                        src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop"
                        alt="Andaman & Nicobar"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
                    />
                    {/* Light blueish transparent gradient mimicking the exploreza banner */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/80 via-[#1E3A8A]/50 to-transparent z-10"></div>

                    {/* Decorative Elements (Clouds & Planes watermark approximation) */}
                    <div className="absolute top-10 left-10 opacity-30 z-10 pointer-events-none">
                        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 50 Q 50 20 80 30 Q 110 20 120 50 Q 140 50 140 70 Q 140 90 120 90 L 40 90 Q 20 90 20 70 Q 20 50 40 50" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="transparent" />
                        </svg>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-20 h-full flex flex-col justify-center items-center md:items-start p-8 md:p-16 lg:p-24 text-center md:text-left">
                        <span className="text-white font-medium text-sm md:text-base mb-2 drop-shadow-sm">
                            6 Night 7 Days
                        </span>

                        <h2 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-display text-white leading-none tracking-tight drop-shadow-md mb-2">
                            Andaman
                        </h2>

                        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12 mt-4">
                            <div>
                                <h3 className="text-white text-xl md:text-2xl font-medium mb-4 drop-shadow-sm">Explore your journey</h3>
                                <div className="h-px w-24 bg-white/50 mb-4 mx-auto md:mx-0"></div>
                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    <span className="text-white/70 line-through text-sm">$1200.00</span>
                                    <span className="text-white font-bold text-3xl">$890.00</span>
                                </div>
                                <span className="text-white/90 text-[10px] uppercase tracking-widest font-bold block mt-1">OFFER PRICE PER PERSON</span>
                            </div>

                            <div className="mt-4 md:mt-0">
                                <Link to="/tours" className="inline-block bg-accent hover:bg-white hover:text-primary text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-colors shadow-lg">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Nav Arrows (Decorative/Static for now) */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                        <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm shadow-sm">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm shadow-sm">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdBanner;
