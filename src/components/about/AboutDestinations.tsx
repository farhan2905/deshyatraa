

const destinations = [
    {
        id: 1,
        title: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e90761ea006?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "New Zealand",
        image: "https://images.unsplash.com/photo-1469521669194-babbdf9aa9b4?q=80&w=800&auto=format&fit=crop",
    }
];

const AboutDestinations = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-5xl font-medium text-primary mb-16 tracking-tight">
                    Choose your top destinations
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto mb-16">
                    {destinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            style={{ backgroundImage: `url(${dest.image})` }}
                            className={`relative bg-cover bg-center rounded-2xl overflow-hidden group cursor-pointer shadow-lg w-full md:w-64 ${index % 2 === 0 ? 'h-80' : 'h-72 mt-8'}`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <h3 className="text-2xl font-bold text-white tracking-wide">{dest.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-gray-500 font-medium">
                    Our destination experts are available to assist you at{' '}
                    <span className="text-primary font-semibold">Call <a href="tel:8881234567" className="hover:text-accent">(888) 123 4567</a></span>
                    {' '}or{' '}
                    <a href="#" className="text-accent hover:underline font-semibold transition-colors">Request a quote</a>
                </p>
            </div>
        </section>
    );
};

export default AboutDestinations;
