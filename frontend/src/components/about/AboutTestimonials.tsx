

const AboutTestimonials = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Banner Container */}
                <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#f4a180] flex flex-col md:flex-row min-h-[400px]">

                    {/* Left Content Area (Peach Background) */}
                    <div className="md:w-[60%] p-12 md:p-20 relative z-10 flex flex-col items-center text-center justify-center">
                        <h2 className="giant-bg-text-dark text-black/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full truncate z-0">
                            TESTIMONIALS
                        </h2>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-serif tracking-widest text-[#2e2621] mb-8 uppercase text-center w-full">
                                Testimonials
                            </h2>

                            {/* Avatars */}
                            <div className="flex -space-x-4 justify-center mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <img
                                        key={i}
                                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                        alt={`User ${i}`}
                                    />
                                ))}
                            </div>

                            {/* Rating Stars */}
                            <div className="flex justify-center gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="font-medium text-[#2e2621] max-w-md mx-auto leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Volutpat felis blandit eu vestibulum eget. Morbi eu quis ornare elit pellentesque.
                            </p>

                            <div className="flex justify-center gap-2 mt-8">
                                <span className="w-2 h-2 rounded-full bg-black/80"></span>
                                <span className="w-2 h-2 rounded-full bg-black/20"></span>
                                <span className="w-2 h-2 rounded-full bg-black/20"></span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Area representing the peeled corner */}
                    <div className="md:w-[40%] relative">
                        {/* Simulation of peeled corner shadow/fold */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-[#bf6c46] rounded-br-[100px] shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] z-20 hidden md:block" style={{ borderTopLeftRadius: '24px' }}></div>

                        {/* The revealed image */}
                        <div className="w-full h-full relative">
                            {/* To make it look like it's underneath a curl, we clip or border-radius the top-left */}
                            <img
                                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop"
                                alt="Ocean Beach"
                                className="w-full h-full object-cover rounded-tl-[0] md:rounded-tl-[120px]"
                            />
                        </div>

                        {/* Little airplane graphic */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3125/3125679.png"
                            alt="Plane"
                            className="absolute -top-12 left-0 w-24 h-24 opacity-60 transform rotate-[30deg] z-30"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTestimonials;
