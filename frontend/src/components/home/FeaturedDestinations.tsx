import { Link } from 'react-router-dom';

const destinations = [
    {
        id: 'd1',
        title: 'KERALA',
        subtitle: 'Explore your journey',
        description: '9 Nights - 10 Days',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2000',
        price: "$850.00",
        properties: ["Flights Included", "4 Star Hotels", "Daily Breakfast"],
        style: 'left' // France style
    },
    {
        id: 'd2',
        title: 'LADAKH',
        subtitle: 'Motorcycle Expeditions',
        description: 'The Land of High Passes',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2000',
        price: "$450.00",
        style: 'center' // Bhutan style
    }
];

const FeaturedDestinations = () => {
    return (
        <section className="w-full bg-background-light flex flex-col pt-12">
            {destinations.map((dest) => (
                <div key={dest.id} className="relative w-full h-[80vh] min-h-[600px] flex items-center mb-2">
                    {/* Background Image - Full Width */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={dest.image}
                            alt={dest.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 container mx-auto px-6 md:px-12 w-full">

                        {dest.style === 'left' ? (
                            /* Left Aligned Style (like France) */
                            <div className="flex flex-col lg:flex-row justify-between items-end h-full">
                                <div className="w-full lg:w-2/3">
                                    <span className="text-white font-medium text-lg mb-2 block">{dest.description}</span>
                                    {/* Giant Text Overlay */}
                                    <h2 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-light text-white leading-none tracking-tighter -ml-2">
                                        {dest.title}
                                    </h2>
                                    <h3 className="text-4xl text-white font-medium mt-4">{dest.subtitle}</h3>
                                </div>

                                <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end mt-8 lg:mt-0 text-white">
                                    <div className="flex flex-col items-start lg:items-end mb-8 border-r-2 border-accent pr-6">
                                        <span className="text-gray-300 text-sm uppercase tracking-widest mb-1">Price</span>
                                        <span className="text-4xl font-bold">{dest.price} <span className="text-lg font-normal">/ person</span></span>
                                    </div>

                                    <ul className="flex flex-col items-start lg:items-end gap-3 mb-8">
                                        {dest.properties?.map((prop, idx) => (
                                            <li key={idx} className="text-lg font-medium">{prop}</li>
                                        ))}
                                    </ul>

                                    <Link to={`/destinations/${dest.id}`} className="exploreza-button">
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            /* Center Aligned Style (like Bhutan) */
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                {/* Giant Text Overlay */}
                                <h2 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-medium text-white leading-none tracking-tighter drop-shadow-2xl">
                                    {dest.title}
                                </h2>
                                <h3 className="text-3xl text-white font-medium mt-4 mb-2">{dest.subtitle}</h3>
                                <p className="text-xl text-white/90 mb-10">{dest.description}</p>

                                <Link to={`/destinations/${dest.id}`} className="exploreza-button uppercase px-12 py-4">
                                    Discover Location
                                </Link>
                            </div>
                        )}

                    </div>
                </div>
            ))}
        </section>
    );
};

export default FeaturedDestinations;
