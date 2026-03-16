import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        bgText: 'DEEP CAVES',
        title: "Underground wonders",
        description: "Explore the breathtaking beauty of snow-capped mountains, serene lakes, and lush valleys.",
        price: "$395.00",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
        id: 2,
        bgText: 'TALL PEAKS',
        title: "Alpine Expeditions",
        description: "Discover the spectacular landscapes, perfect skiing slopes, and charming villages of the Swiss Alps.",
        price: "$850.00",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const changeSlide = (newIndex: number) => {
        if (isAnimating || newIndex === currentSlide) return;
        setIsAnimating(true);
        setPreviousSlide(currentSlide);
        setCurrentSlide(newIndex);
        setTimeout(() => {
            setIsAnimating(false);
            setPreviousSlide(null);
        }, 1000); // 1.0s crossfade matching Original
    };

    const nextSlide = () => changeSlide((currentSlide + 1) % slides.length);
    const prevSlide = () => changeSlide((currentSlide - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000); // Changed to 6s to match actual time
        return () => clearInterval(timer);
    }, [currentSlide, isAnimating]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-primary-dark">

            {/* 1. Animated Background Images & Text per slide */}
            {slides.map((s, idx) => {
                const isActive = currentSlide === idx;
                const isPrev = previousSlide === idx;

                // Image Animation logic matches Exploreza perfectly:
                // Active: crossfade in with 1.0s ease, while simultaneously animating zoom out from 1.15 to 1.0 over 6s
                // Prev: fades out but keeps whatever scale it has
                let imgContainerClasses = 'opacity-0 z-0';
                if (isActive) {
                    imgContainerClasses = 'opacity-100 z-10';
                } else if (isPrev) {
                    imgContainerClasses = 'opacity-0 z-10';
                }

                // Text Animation logic matches Exploreza exactly:
                // Outgoing: Fade out and slide UP (-translate-y-4)
                // Incoming: Fade in and slide UP from bottom (translate-y-12 -> 0)
                // Stagger: BgText -> Title +200ms -> Desc +400ms -> Price +600ms

                let bgTextClasses = 'opacity-0 translate-y-12';
                let headlineClasses = 'opacity-0 translate-y-12';
                let descClasses = 'opacity-0 translate-y-12';
                let priceClasses = 'opacity-0 translate-y-12';

                if (isActive) {
                    bgTextClasses = 'opacity-100 translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-[100ms]';
                    headlineClasses = 'opacity-100 translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-[300ms]';
                    descClasses = 'opacity-100 translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-[500ms]';
                    priceClasses = 'opacity-100 translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] delay-[700ms]';
                } else if (isPrev) {
                    bgTextClasses = 'opacity-0 -translate-y-4 transition-all duration-700 ease-in';
                    headlineClasses = 'opacity-0 -translate-y-4 transition-all duration-700 ease-in';
                    descClasses = 'opacity-0 -translate-y-4 transition-all duration-700 ease-in';
                    priceClasses = 'opacity-0 -translate-y-4 transition-all duration-700 ease-in';
                }

                return (
                    <div
                        key={s.id}
                        className={`absolute inset-0 z-0 ${isActive || isPrev ? 'z-10' : 'z-0'}`}
                    >
                        {/* The Image layer */}
                        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${imgContainerClasses}`}>
                            <div className="absolute inset-0 bg-black/40 z-10"></div>
                            <img
                                src={s.image}
                                alt={s.title}
                                className={`w-full h-full object-cover origin-center ${isActive ? 'animate-slow-zoom-out' : 'scale-100'}`}
                            />
                        </div>

                        {/* Content Layer */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-between pb-20 pt-32 pointer-events-none">
                            {/* Giant Background Text */}
                            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${bgTextClasses}`}>
                                <h1 className="giant-bg-text text-center w-full px-4 text-white/5">
                                    {s.bgText}
                                </h1>
                            </div>

                            {/* Top spacer */}
                            <div></div>

                            {/* Bottom Content Area */}
                            <div className="container mx-auto px-6 md:px-12 flex flex-col items-start gap-8 z-30">
                                <div className="max-w-xl text-white">
                                    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-medium mb-4 tracking-tight drop-shadow-md ${headlineClasses}`}>{s.title}</h2>
                                    <p className={`text-base md:text-lg text-gray-200 mb-8 max-w-md drop-shadow-sm ${descClasses}`}>{s.description}</p>

                                    <div className={`flex flex-col gap-1 ${priceClasses}`}>
                                        <span className="text-xs md:text-sm font-medium text-gray-300">Package starting</span>
                                        <div className="text-3xl md:text-4xl font-bold">{s.price}</div>
                                    </div>
                                </div>

                                {/* Placeholder to ensure exact same spacing as static controls below */}
                                <div className="w-full h-32 sm:h-36 md:h-40 opacity-0 pointer-events-none shrink-0"></div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* 2. Controls & Interactions Layer (Static across slides, but pointer active) */}
            <div className="absolute inset-0 z-30 flex flex-col justify-between pb-20 pt-32 pointer-events-none">
                {/* Top spacer */}
                <div></div>

                {/* Bottom interactive area */}
                <div className="container mx-auto px-6 md:px-12 flex flex-col justify-end gap-8 h-full pointer-events-none pb-0">

                    {/* Placeholder space for the animated text block so this aligns properly to the bottom edge */}
                    <div className="flex-grow hidden md:block"></div>

                    <div className="w-full flex flex-row justify-between items-center md:items-end pointer-events-auto mt-auto z-50">

                        {/* Pagination/Controls */}
                        <div className="flex gap-4">
                            <button onClick={prevSlide} disabled={isAnimating} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm disabled:opacity-50">
                                <ArrowLeft size={20} />
                            </button>
                            <button onClick={nextSlide} disabled={isAnimating} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm disabled:opacity-50">
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Circular Explore Button */}
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center shrink-0">
                            {/* Background dashed circle */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 160 160">
                                <circle
                                    cx="80" cy="80" r="78"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                />
                                {/* Animated solid circle */}
                                <circle
                                    key={`progress-${currentSlide}`}
                                    cx="80" cy="80" r="78"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeDasharray={2 * Math.PI * 78}
                                    strokeDashoffset={2 * Math.PI * 78}
                                    style={{ animation: 'circleProgress 6s linear forwards' }}
                                />
                            </svg>
                            <Link to="/tours" className="absolute inset-2 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-bold backdrop-blur-sm z-10 pointer-events-auto text-center px-4 leading-tight">
                                Explore<br className="md:hidden" /> Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
