import { Link } from 'react-router-dom';

const DestinationsHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary-dark overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
                    alt="Travel Map Background"
                    className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                />
            </div>

            {/* Giant Text Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 mt-8 opacity-20 pointer-events-none">
                <span className="text-[6rem] md:text-[10rem] lg:text-[16rem] font-bold uppercase leading-none tracking-tighter text-white">
                    WORLD
                </span>
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6">
                <div className="inline-flex items-center justify-center gap-2 mb-6">
                    <span className="w-8 h-[1px] bg-accent"></span>
                    <span className="text-accent uppercase tracking-widest text-sm font-bold">Explore The World</span>
                    <span className="w-8 h-[1px] bg-accent"></span>
                </div>

                <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
                    Destinations
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center justify-center gap-2 text-white/80 font-medium">
                    <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-accent">Destinations</span>
                </div>
            </div>
        </section>
    );
};

export default DestinationsHero;
