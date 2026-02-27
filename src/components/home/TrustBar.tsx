const TrustBar = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12 flex justify-center">
                <div className="bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 py-6 px-12 flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl w-full">

                    <div className="flex items-center gap-6">
                        {/* Placeholder logos to match Exploreza's 4 brand marks */}
                        <div className="flex items-center gap-2 text-gray-400 font-serif italic text-2xl">
                            <span className="text-gray-300">is ma</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-serif italic text-2xl">
                            <span className="text-gray-300">fanciful</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800 font-bold font-display text-2xl tracking-tighter">
                            TAK<span className="font-light mx-1">O</span>ROP
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 font-serif font-bold text-xl leading-tight">
                            Crosier<br />Airline
                        </div>
                    </div>

                    <div className="text-gray-500 font-medium text-sm text-center md:text-right">
                        Trusted by 15,000+ group organizers &amp; corporate teams
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustBar;
