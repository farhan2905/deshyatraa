import { Filter, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const tours = [
    { id: 1, title: 'French Coastline & Castles', location: 'France', duration: '8 Days', rating: 4.9, reviews: 328, price: 1800, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Swiss Alps Hiking Adventure', location: 'Switzerland', duration: '10 Days', rating: 5.0, reviews: 145, price: 2400, image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Australian Wildlife Safari', location: 'Australia', duration: '12 Days', rating: 4.8, reviews: 210, price: 3200, image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'Kyoto Temple Tour', location: 'Japan', duration: '7 Days', rating: 4.9, reviews: 512, price: 1950, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: 'Machu Picchu Trek', location: 'Peru', duration: '14 Days', rating: 5.0, reviews: 890, price: 2100, image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop' },
    { id: 6, title: 'Santorini Honeymoon', location: 'Greece', duration: '6 Days', rating: 4.7, reviews: 120, price: 2800, image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop' },
];

const Tours = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">

            {/* Page Header */}
            <div className="bg-primary pt-16 pb-24 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-4">Explore Our Tours</h1>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg">Find your perfect getaway from our handpicked destinations.</p>
            </div>

            <div className="container mx-auto px-4 md:px-12 -mt-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/4">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                            <div className="flex items-center gap-2 font-bold text-primary mb-6 border-b pb-4">
                                <Filter size={20} />
                                <span className="text-lg font-outfit">Filters</span>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-slate-800 mb-3">Price Range</h3>
                                <input type="range" className="w-full accent-accent" min="0" max="5000" />
                                <div className="flex justify-between text-sm text-slate-500 mt-2">
                                    <span>$0</span>
                                    <span>$5000+</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-slate-800 mb-3">Tour Type</h3>
                                {['Adventure', 'Cultural', 'Honeymoon', 'Wildlife', 'Beach'].map((type) => (
                                    <label key={type} className="flex items-center gap-3 mb-2 cursor-pointer text-slate-600 hover:text-primary transition-colors">
                                        <input type="checkbox" className="w-4 h-4 rounded text-accent focus:ring-accent" />
                                        <span>{type}</span>
                                    </label>
                                ))}
                            </div>

                            <button className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-xl transition-colors">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* Tour Grid */}
                    <main className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-slate-500 font-medium">Showing {tours.length} tours</p>
                            <select className="bg-white border text-sm border-slate-200 rounded-lg px-4 py-2 text-slate-700 outline-none focus:border-accent font-medium">
                                <option>Sort by: Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tours.map((tour) => (
                                <Link to="/tour-details" key={tour.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 block">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${tour.image})` }}></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex gap-4 text-sm text-slate-500 font-medium mb-2">
                                            <div className="flex items-center gap-1">
                                                <Clock size={16} className="text-accent" />
                                                <span>{tour.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1 ml-auto">
                                                <Star size={16} className="fill-amber-400 text-amber-400" />
                                                <span className="text-slate-800 font-bold">{tour.rating}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-outfit font-bold text-xl text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">{tour.title}</h3>
                                        <div className="flex items-center gap-1 text-slate-500 mb-4 text-sm">
                                            <MapPin size={16} />
                                            <span>{tour.location}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                                            <div className="text-lg font-bold text-primary">${tour.price}</div>
                                            <span className="text-accent font-bold group-hover:text-accent-hover transition-colors">View Details →</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Tours;
