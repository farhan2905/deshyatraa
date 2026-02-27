import { Star, Clock, MapPin, Users } from 'lucide-react';

const tours = [
    {
        id: 1,
        title: 'Explore French Coastline & Castles',
        location: 'France',
        duration: '8 Days',
        groupSize: 'Max 12',
        rating: 4.9,
        reviews: 328,
        price: 1800,
        originalPrice: 2000,
        discount: '10% OFF',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
        featured: true,
    },
    {
        id: 2,
        title: 'Swiss Alps Hiking Adventure',
        location: 'Switzerland',
        duration: '10 Days',
        groupSize: 'Max 8',
        rating: 5.0,
        reviews: 145,
        price: 2400,
        originalPrice: 2800,
        discount: '15% OFF',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
        featured: false,
    },
    {
        id: 3,
        title: 'Australian Wildlife Safari',
        location: 'Australia',
        duration: '12 Days',
        groupSize: 'Max 10',
        rating: 4.8,
        reviews: 210,
        price: 3200,
        originalPrice: null,
        discount: null,
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
        featured: false,
    }
];

const PopularTours = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Most Popular Tours</h4>
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-primary leading-tight">
                            Life-changing experiences<br />you can't miss
                        </h2>
                    </div>
                    <button className="mt-6 md:mt-0 text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 group">
                        See All Tours
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour) => (
                        <div key={tour.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-2">

                            {/* Card Header (Image & Badges) */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${tour.image})` }}
                                ></div>

                                <div className="absolute top-4 left-4 flex gap-2">
                                    {tour.featured && (
                                        <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                            FEATURED
                                        </span>
                                    )}
                                    {tour.discount && (
                                        <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                            {tour.discount}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex gap-4 text-sm text-slate-500 font-medium mb-3">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} className="text-accent" />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={16} className="text-accent" />
                                        <span>{tour.groupSize}</span>
                                    </div>
                                    <div className="flex items-center gap-1 ml-auto">
                                        <Star size={16} className="fill-amber-400 text-amber-400" />
                                        <span className="text-slate-800 font-bold">{tour.rating}</span>
                                        <span className="text-slate-400">({tour.reviews})</span>
                                    </div>
                                </div>

                                {/* Title & Location */}
                                <h3 className="font-outfit font-bold text-2xl text-primary mb-2 line-clamp-2 hover:text-accent transition-colors cursor-pointer">
                                    {tour.title}
                                </h3>
                                <div className="flex items-center gap-1 text-slate-500 mb-6">
                                    <MapPin size={16} />
                                    <span>{tour.location}</span>
                                </div>

                                <div className="w-full h-px bg-slate-100 mb-6"></div>

                                {/* Price & Action */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">From</div>
                                        <div className="flex items-end gap-2">
                                            <span className="text-2xl font-bold text-primary">${tour.price}</span>
                                            {tour.originalPrice && (
                                                <span className="text-sm font-medium text-slate-400 line-through mb-1">${tour.originalPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                    <button className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularTours;
