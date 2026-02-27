import React from 'react';

const AboutHero = () => {
    return (
        <section className="bg-background-peach pt-40 pb-24 relative overflow-hidden">
            {/* Background dashed lines (decorative) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden lg:block">
               <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 200 C 300 100, 600 500, 1500 100" stroke="#FF5733" strokeWidth="2" strokeDasharray="8 8" className="animate-dash-draw" />
                    <path d="M-100 600 C 400 800, 800 200, 1600 400" stroke="#FF5733" strokeWidth="2" strokeDasharray="8 8" className="animate-dash-draw" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col items-start text-left pt-10">
                    <h1 className="text-5xl md:text-6xl lg:text-[70px] font-medium leading-[1.1] text-primary mb-8 tracking-tight">
                        Discover the<br/>best destination<br/>in the world
                    </h1>
                    
                    <p className="text-gray-600 text-lg mb-12 max-w-md leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Odio orci mauris volutpat lacus ullamcorper ac urna at iaculis morbi elit nunc.
                    </p>

                    {/* Funky Search Bar Mimic from Screenshot */}
                    <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-4 flex items-center justify-between w-full max-w-lg shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white">
                        <span className="text-gray-400 text-sm">Find best destination</span>
                        <div className="flex items-center gap-6">
                            <span className="font-['Brush_Script_MT',cursive] italic text-2xl text-gray-400">Beautiful</span>
                            <span className="font-serif tracking-[0.2em] text-gray-300">TAKE A TRIP</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Images Collage */}
                <div className="lg:w-1/2 relative h-[600px] w-full mt-12 lg:mt-0">
                    
                    {/* Floating text blocks */}
                    <div className="absolute top-8 left-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg z-30 flex flex-col items-center">
                        <span className="text-xl font-bold text-accent">100+</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Destinations</span>
                    </div>

                    <div className="absolute top-12 right-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg z-30 flex flex-col items-center">
                        <span className="text-xl font-bold text-accent">15+</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Years of<br/>Experience</span>
                    </div>

                    {/* Images */}
                    {/* Top center - Golden gate Bridge like */}
                    <img 
                        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop" 
                        alt="Golden Gate" 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-64 object-cover rounded-[20px] shadow-2xl z-20 border-[6px] border-white/50"
                    />

                    {/* Left middle - Clouds/Mountains */}
                    <img 
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop" 
                        alt="Nature" 
                        className="absolute top-40 left-0 w-56 h-48 object-cover rounded-[20px] shadow-2xl z-10 border-[6px] border-white/50"
                    />

                    {/* Right middle - Beach wedding / couple */}
                    <img 
                        src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop" 
                        alt="Couple" 
                        className="absolute top-24 right-0 w-48 h-48 object-cover rounded-[20px] shadow-2xl z-20 border-[6px] border-white/50"
                    />

                    {/* Bottom center - Switzerland/Green hills */}
                    <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop" 
                        alt="Mountains" 
                        className="absolute bottom-8 left-1/3 w-40 h-56 object-cover rounded-[20px] shadow-2xl z-30 border-[6px] border-white/50"
                    />

                    {/* Bottom right - Tropical island */}
                    <img 
                        src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=600&auto=format&fit=crop" 
                        alt="Island" 
                        className="absolute bottom-24 right-4 w-40 h-56 object-cover rounded-[20px] shadow-2xl z-20 border-[6px] border-white/50"
                    />

                    {/* Airplane icon flying */}
                    <img 
                         src="https://cdn-icons-png.flaticon.com/512/3125/3125679.png"
                         alt="Airplane"
                         className="absolute bottom-12 left-1/4 w-12 h-12 opacity-50 -rotate-45 hidden md:block" // placeholder for airplane drawing
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
