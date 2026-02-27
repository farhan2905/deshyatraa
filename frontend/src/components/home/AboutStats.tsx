const AboutStats = () => {
    return (
        <section className="pt-32 pb-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* 1. Top Section: Images Overlapping Giant Text */}
                <div className="relative w-full max-w-5xl mx-auto mb-24 h-[500px]">
                    {/* Giant Background Text */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0">
                        <span className="giant-bg-text-solid tracking-[0.2em] ml-12">ABOUT</span>
                    </div>

                    {/* Image Collage / Masonry */}
                    {/* Main Left Image (Tall) */}
                    <img
                        src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop"
                        alt="Couple on a swing"
                        className="absolute left-0 lg:left-12 top-0 w-64 h-80 object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10"
                    />

                    {/* Top Right Image (Square-ish) */}
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                        alt="Man looking at desert city"
                        className="absolute right-0 lg:right-24 top-16 w-72 h-48 object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20"
                    />

                    {/* Bottom Center Image (Wide) */}
                    <img
                        src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
                        alt="Sunset over water resort"
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[400px] h-48 object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] z-30"
                    />
                </div>

                {/* 2. Middle Section: Title & Description */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tight">
                        We recommended beautiful destinations every day
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
                        At Desh Yatraa, we curate breathtaking experiences across India and the globe.
                        Whether it's the serene backwaters of Kerala, the rugged mountains of Ladakh, or the vibrant streets of Dubai,
                        we handle every detail for groups, corporate offsites, and families.
                    </p>
                </div>

                {/* 3. Bottom Section: Horizontal Stats (Peach Background) */}
                <div className="flex flex-col md:flex-row justify-between gap-6 w-full max-w-5xl mx-auto">
                    {/* Stat Block 1 */}
                    <div className="flex-1 bg-background-peach rounded-2xl py-8 px-6 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-3xl font-medium text-primary mb-2">120+</span>
                        <span className="text-sm font-medium text-gray-600">Tour available</span>
                    </div>

                    {/* Stat Block 2 */}
                    <div className="flex-1 bg-background-peach rounded-2xl py-8 px-6 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-3xl font-medium text-primary mb-2">20+</span>
                        <span className="text-sm font-medium text-gray-600">Destinations</span>
                    </div>

                    {/* Stat Block 3 */}
                    <div className="flex-1 bg-background-peach rounded-2xl py-8 px-6 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
                        <span className="text-3xl font-medium text-primary mb-2">15+</span>
                        <span className="text-sm font-medium text-gray-600">Years experience</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutStats;
