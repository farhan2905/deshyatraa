import { useState, useEffect } from 'react';
import { Filter, Star, Clock, MapPin, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tour {
    id: string;
    title: string;
    location: string;
    price: number;
    duration: string;
    status: 'Active' | 'Draft';
    tour_type?: string;
    destination_region?: string;
    image?: string;
}

const fallbackImage = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop';

const Tours = () => {
    const [tours, setTours] = useState<Tour[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Filters State
    const [priceRange, setPriceRange] = useState<number>(5000);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

    const [regions, setRegions] = useState<string[]>(['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania', 'Domestic']);
    const [tourTypes, setTourTypes] = useState<string[]>(['Adventure', 'Corporate Offsites', 'Group Tours', 'Honeymoon', 'Pilgrimage', 'Wildlife', 'Cultural']);
    const durations = ['1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'];

    useEffect(() => {
        fetchTours();
        fetchTaxonomies();
    }, []);

    const fetchTaxonomies = async () => {
        try {
            const [destRes, catRes] = await Promise.all([
                fetch('http://localhost:5000/api/destinations'),
                fetch('http://localhost:5000/api/categories')
            ]);
            if (destRes.ok) {
                const data = await destRes.json();
                if (data.length > 0) setRegions(data.map((d: any) => d.name));
            }
            if (catRes.ok) {
                const data = await catRes.json();
                if (data.length > 0) setTourTypes(data.map((c: any) => c.name));
            }
        } catch (e) {
            console.error('Failed to fetch taxonomies', e);
        }
    };

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/tours');
            if (res.ok) {
                const data = await res.json();
                setTours(data);
            }
        } catch (error) {
            console.error('Failed to fetch tours', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCheckboxFilter = (
        setter: React.Dispatch<React.SetStateAction<string[]>>,
        value: string
    ) => {
        setter(prev => 
            prev.includes(value) 
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    // Apply Filters logic
    const filteredTours = tours.filter(tour => {
        // Only show Active tours on public page
        if (tour.status !== 'Active') return false;

        // Price Filter
        if (tour.price > priceRange) return false;

        // Region Filter
        if (selectedRegions.length > 0 && (!tour.destination_region || !selectedRegions.includes(tour.destination_region))) {
            return false;
        }

        // Tour Type Filter
        if (selectedTypes.length > 0 && (!tour.tour_type || !selectedTypes.includes(tour.tour_type))) {
            return false;
        }

        // Duration Filter
        if (selectedDurations.length > 0 && !selectedDurations.includes(tour.duration)) {
            return false;
        }

        return true;
    });

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
                    <aside className="w-full lg:w-1/4 shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-28">
                            <div className="flex items-center gap-2 font-bold text-primary mb-6 border-b pb-4">
                                <Filter size={20} />
                                <span className="text-lg font-outfit">Refine Search</span>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <h3 className="font-bold text-slate-800 mb-3 text-sm tracking-wider uppercase">Max Price</h3>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-accent">${priceRange}</span>
                                </div>
                                <input 
                                    type="range" 
                                    className="w-full accent-accent" 
                                    min="0" max="10000" step="100"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>$0</span>
                                    <span>$10,000+</span>
                                </div>
                            </div>

                            {/* Region / Destination */}
                            <div className="mb-8 border-t border-slate-100 pt-6">
                                <h3 className="font-bold text-slate-800 mb-3 text-sm tracking-wider uppercase">Destination</h3>
                                <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                                    {regions.map((region) => (
                                        <label key={region} className="flex items-center gap-3 cursor-pointer text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedRegions.includes(region)}
                                                onChange={() => handleCheckboxFilter(setSelectedRegions, region)}
                                                className="w-4 h-4 rounded text-accent focus:ring-accent" 
                                            />
                                            <span>{region}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Tour Category */}
                            <div className="mb-8 border-t border-slate-100 pt-6">
                                <h3 className="font-bold text-slate-800 mb-3 text-sm tracking-wider uppercase">Category</h3>
                                <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                                    {tourTypes.map((type) => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedTypes.includes(type)}
                                                onChange={() => handleCheckboxFilter(setSelectedTypes, type)}
                                                className="w-4 h-4 rounded text-accent focus:ring-accent" 
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="mb-4 border-t border-slate-100 pt-6">
                                <h3 className="font-bold text-slate-800 mb-3 text-sm tracking-wider uppercase">Duration</h3>
                                <div className="space-y-2">
                                    {durations.map((duration) => (
                                        <label key={duration} className="flex items-center gap-3 cursor-pointer text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                                            <input 
                                                type="checkbox"
                                                checked={selectedDurations.includes(duration)}
                                                onChange={() => handleCheckboxFilter(setSelectedDurations, duration)}
                                                className="w-4 h-4 rounded text-accent focus:ring-accent" 
                                            />
                                            <span>{duration}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Tour Grid */}
                    <main className="w-full lg:w-3/4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center mb-6">
                            <p className="text-slate-500 font-medium">
                                Showing <span className="text-primary font-bold">{filteredTours.length}</span> active tours
                            </p>
                            <select className="bg-slate-50 border text-sm border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 outline-none focus:border-accent font-medium transition-colors cursor-pointer">
                                <option>Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <Loader2 className="animate-spin text-accent mb-4" size={40} />
                                <p className="text-slate-500 font-medium tracking-wide">Fetching destinations...</p>
                            </div>
                        ) : filteredTours.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredTours.map((tour) => (
                                    <Link to={`/tours/${tour.id}`} key={tour.id} className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
                                        <div className="relative h-56 w-full overflow-hidden shrink-0">
                                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${tour.image || fallbackImage})` }}></div>
                                            {(tour.tour_type || tour.destination_region) && (
                                                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                                    {tour.destination_region && (
                                                        <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                                                            🌍 {tour.destination_region}
                                                        </span>
                                                    )}
                                                    {tour.tour_type && (
                                                        <span className="bg-accent text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                                                            {tour.tour_type}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex gap-4 text-[13px] text-slate-500 font-medium mb-3">
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} className="text-accent" />
                                                    <span>{tour.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 ml-auto">
                                                    <Star size={14} className="fill-amber-400 text-amber-400" />
                                                    <span className="text-slate-800 font-bold">4.9 {Math.floor(Math.random() * 200) > 0 ? `(${Math.floor(Math.random() * 300) + 50})` : ''}</span>
                                                </div>
                                            </div>
                                            <h3 className="font-outfit font-bold text-[22px] leading-tight text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                                                {tour.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-500 mb-6 text-sm mt-auto">
                                                <MapPin size={16} className="text-slate-400" />
                                                <span className="font-medium bg-slate-50 px-3 py-1 rounded-full">{tour.location}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-t border-slate-100 pt-5">
                                                <div>
                                                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Starting from</div>
                                                    <div className="text-xl font-bold text-primary">${tour.price}</div>
                                                </div>
                                                <div className="text-accent font-bold text-sm bg-accent/10 px-5 py-2.5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                                                    View Details
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-lg shadow-slate-200/20">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MapPin size={32} className="text-slate-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-3 font-outfit">No Tours Found</h3>
                                <p className="text-slate-500 max-w-md mx-auto mb-8 text-lg">
                                    We couldn't find any active tours matching your current filters. Try adjusting price or unchecking categories.
                                </p>
                                <button 
                                    onClick={() => {
                                        setPriceRange(10000);
                                        setSelectedRegions([]);
                                        setSelectedTypes([]);
                                        setSelectedDurations([]);
                                    }}
                                    className="bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg shadow-accent/20"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Tours;
