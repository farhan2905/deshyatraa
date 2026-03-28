import { Star, Clock, Users, Bus, User, ShoppingCart, Download, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DayWiseItinerary from '../components/tours/DayWiseItinerary';
import SubmitDetailsModal from '../components/tours/SubmitDetailsModal';

interface Tour {
    id: string; title: string; location: string; price: number; duration: string;
    status: string; tour_type: string; destination_region: string; image: string;
    description: string; rating: number; reviews: number; original_price: number;
    badge: string; amenities: string; gallery?: string;
}

const fallbackImage = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop';

const TourDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState('overview');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tour, setTour] = useState<Tour | null>(null);
    const [similarTours, setSimilarTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);

    // Booking form state
    const [date, setDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    useEffect(() => {
        const fetchTour = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:5000/api/tours/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setTour(data);
                    // Fetch similar tours (same type/region)
                    const simRes = await fetch(`http://localhost:5000/api/tours`);
                    if (simRes.ok) {
                        const allTours = await simRes.json();
                        setSimilarTours(allTours.filter((t: Tour) => t.id !== id && t.status === 'Active').slice(0, 3));
                    }
                }
            } catch (e) { console.error('Failed to fetch tour', e); }
            finally { setLoading(false); }
        };
        if (id) fetchTour();
    }, [id]);

    if (loading) return (
        <div className="pt-40 pb-20 flex flex-col items-center justify-center min-h-screen">
            <Loader2 className="animate-spin text-accent mb-4" size={48} />
            <p className="text-slate-500 font-medium">Loading tour details...</p>
        </div>
    );

    if (!tour) return (
        <div className="pt-40 pb-20 text-center min-h-screen">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tour Not Found</h2>
            <p className="text-slate-500 mb-8">The tour you're looking for doesn't exist.</p>
            <Link to="/tours" className="bg-accent text-white px-8 py-3 rounded-full font-bold">Browse All Tours</Link>
        </div>
    );

    const totalPrice = (tour.price * adults) + (Math.round(tour.price * 0.5) * children);
    const formattedDate = date ? new Date(date).toLocaleDateString() : 'Not selected';

    const amenitiesList = tour.amenities ? tour.amenities.split(' | ') : [];
    
    let parsedGallery: string[] = [];
    try {
        if (tour.gallery) {
            parsedGallery = JSON.parse(tour.gallery);
            if (!Array.isArray(parsedGallery)) parsedGallery = [];
        }
    } catch (e) { console.error('Error parsing gallery JSON:', e); }

    // If no gallery, at least show the main image in the gallery tab
    if (parsedGallery.length === 0 && tour.image) {
        parsedGallery.push(tour.image);
    }

    return (
        <div className="pt-24 pb-0 bg-white min-h-screen font-sans">
            {/* Header Section */}
            <div className="container mx-auto px-4 md:px-12 mb-8 text-center pt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-medium text-slate-900 leading-tight mb-4">
                    {tour.title}
                </h1>
                <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={16} className={star <= Math.round(tour.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"} />
                        ))}
                    </div>
                    <span className="font-bold text-slate-900">{tour.rating?.toFixed(1)}</span>
                    <span>({tour.reviews})</span>
                </div>

                {/* Info Bar */}
                <div className="max-w-4xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 py-5 px-10 flex flex-wrap justify-between items-center relative z-20 -mb-12 lg:-mb-12">
                    <div className="flex items-center gap-4">
                        <Clock className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Duration</p>
                            <p className="text-sm font-medium text-slate-900">{tour.duration}</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                        <Users className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Category</p>
                            <p className="text-sm font-medium text-slate-900">{tour.tour_type}</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                        <Bus className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Region</p>
                            <p className="text-sm font-medium text-slate-900">{tour.destination_region}</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                        <User className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                            <p className="text-sm font-medium text-slate-900">{tour.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 md:px-12 mb-16">
                <div className="w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden relative shadow-lg">
                    <img
                        src={tour.image || fallbackImage}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-[65%]">

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 border-b-2 border-slate-50 pb-6">
                            <button 
                                onClick={() => setActiveTab('overview')}
                                className={`px-6 py-2.5 font-bold rounded-full text-xs tracking-widest uppercase transition-colors ${activeTab === 'overview' ? 'bg-accent text-white shadow-md shadow-accent/20' : 'hover:bg-slate-50 text-slate-600'}`}
                            >
                                OVERVIEW
                            </button>
                            <button 
                                onClick={() => setActiveTab('tour_plan')}
                                className={`px-6 py-2.5 font-bold rounded-full text-xs tracking-widest uppercase transition-colors ${activeTab === 'tour_plan' ? 'bg-accent text-white shadow-md shadow-accent/20' : 'hover:bg-slate-50 text-slate-600'}`}
                            >
                                TOUR PLAN
                            </button>
                            <button 
                                onClick={() => setActiveTab('gallery')}
                                className={`px-6 py-2.5 font-bold rounded-full text-xs tracking-widest uppercase transition-colors ${activeTab === 'gallery' ? 'bg-accent text-white shadow-md shadow-accent/20' : 'hover:bg-slate-50 text-slate-600'}`}
                            >
                                GALLERY
                            </button>
                            <button className="px-6 py-2.5 hover:bg-slate-50 text-slate-600 font-bold rounded-full text-xs tracking-widest uppercase transition-colors">
                                FAQ
                            </button>
                        </div>

                        {/* Content Area rendering based on active tab */}
                        {activeTab === 'overview' && (
                            <div className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-outfit font-semibold text-slate-900 mb-6">Overview</h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                                {tour.description || 'Detailed description coming soon. Contact us for more information about this amazing tour package.'}
                            </p>

                            {/* Image Grid */}
                            <div className="rounded-[1.5rem] overflow-hidden mb-12 h-[350px]">
                                <img
                                    src={tour.image || fallbackImage}
                                    alt={tour.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Amenities / Includes */}
                            {amenitiesList.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-6">Package Includes</h3>
                                    <ul className="space-y-4">
                                        {amenitiesList.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-700 text-[15px]">
                                                <div className="mt-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-6">Tour Details</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 text-slate-700 text-[15px]"><div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2"></div><span>Duration: {tour.duration}</span></li>
                                        <li className="flex items-start gap-3 text-slate-700 text-[15px]"><div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2"></div><span>Location: {tour.location}</span></li>
                                        <li className="flex items-start gap-3 text-slate-700 text-[15px]"><div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2"></div><span>Category: {tour.tour_type}</span></li>
                                        <li className="flex items-start gap-3 text-slate-700 text-[15px]"><div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2"></div><span>Region: {tour.destination_region}</span></li>
                                    </ul>
                                </div>
                            </div>
                            )}

                            {/* Brochure Download */}
                            <div className="mt-12 mb-8 pt-8 border-t border-slate-100">
                                <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors py-3 px-6 border-2 border-slate-200 rounded-xl hover:bg-slate-50">
                                    <Download size={18} /> Download Detailed Brochure
                                </button>
                            </div>
                        </div>
                        )}

                        {activeTab === 'tour_plan' && (
                            <DayWiseItinerary />
                        )}

                        {activeTab === 'gallery' && (
                            <div className="animate-fade-in">
                                <h2 className="text-3xl font-outfit font-semibold text-slate-900 mb-6">Tour Gallery</h2>
                                {parsedGallery.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {parsedGallery.map((imgUrl, idx) => (
                                            <div key={idx} className={`rounded-2xl overflow-hidden bg-slate-100 ${idx === 0 ? 'md:col-span-2 md:row-span-2 h-[400px]' : 'h-[192px]'} shadow-sm border border-slate-100 group`}>
                                                <img 
                                                    src={imgUrl} 
                                                    alt={`${tour.title} Gallery Image ${idx + 1}`} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-slate-500 bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">No additional gallery images available.</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <aside className="w-full lg:w-[35%] space-y-10">

                        {/* Booking Widget */}
                        <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
                            <div className="mb-4">
                                <span className="text-slate-800 font-semibold text-lg">Price</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <Clock size={16} className="text-slate-400" />
                                    <span className="text-sm text-slate-500">{tour.duration}</span>
                                </div>
                                <div className="mt-4 flex items-baseline gap-3">
                                    <span className="text-4xl font-outfit font-semibold text-slate-900">${tour.price}</span>
                                    {tour.original_price && <span className="text-lg text-slate-400 line-through">${tour.original_price}</span>}
                                </div>
                                <div className="mt-3 text-sm text-slate-600">Pick the date & participants</div>
                            </div>

                            <div className="space-y-4 mb-6">
                                {/* Date Box */}
                                <div className="border border-slate-200 rounded-xl px-4 py-3 bg-white hover:border-slate-300 relative">
                                    <label className="flex flex-col cursor-pointer w-full">
                                        <span className="text-xs text-slate-400 font-bold uppercase">Dates</span>
                                        <input 
                                            type="date" 
                                            className="text-sm font-semibold text-slate-700 mt-1 focus:outline-none w-full bg-transparent appearance-none cursor-pointer"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </label>
                                </div>

                                {/* Guests Box */}
                                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                    <div className="flex border-b border-slate-100 divide-x divide-slate-100">
                                        <div className="flex-1 py-3 px-4 text-center text-sm font-semibold text-slate-800 bg-white">Adults (12+)</div>
                                        <div className="flex-1 py-3 px-4 text-center text-sm font-semibold text-slate-400 bg-slate-50">Children (2-11)</div>
                                    </div>
                                    <div className="p-4 flex flex-col gap-4 bg-white">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-slate-800 text-sm">Adults</span>
                                            <div className="flex items-center gap-4">
                                                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent font-medium text-lg">-</button>
                                                <span className="font-semibold text-slate-900 w-4 text-center">{adults}</span>
                                                <button onClick={() => setAdults(adults + 1)} className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent font-medium text-lg">+</button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-slate-800 text-sm opacity-70">Children (50% off)</span>
                                            <div className="flex items-center gap-4">
                                                <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent font-medium text-lg opacity-70">-</button>
                                                <span className="font-semibold text-slate-900 w-4 text-center opacity-70">{children}</span>
                                                <button onClick={() => setChildren(children + 1)} className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent font-medium text-lg opacity-70">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-1 border-t border-slate-100 pt-3">
                                    <span className="text-sm font-medium text-slate-600">Total</span>
                                    <span className="text-xl font-bold text-accent">${totalPrice}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-slate-900 border-2 border-slate-900 hover:bg-transparent hover:text-slate-900 text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5 mb-3"
                            >
                                INQUIRE & SUBMIT DETAILS
                            </button>
                            
                            <div className="flex gap-3 mt-4">
                                <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-accent hover:bg-accent hover:opacity-90 text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                    BOOK NOW
                                </button>
                                <button onClick={() => { alert('This tour has been saved! Our team will contact you.'); setIsModalOpen(true); }} className="flex-1 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
                                    <ShoppingCart size={18} /> ADD TO CART
                                </button>
                            </div>
                        </div>

                        {/* Similar Tours Widget */}
                        <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
                            <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-6">Similar tours</h3>
                            <div className="space-y-5">
                                {similarTours.map((st) => (
                                    <Link to={`/tours/${st.id}`} key={st.id} className="flex gap-4 group cursor-pointer items-center">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                            <img src={st.image || fallbackImage} alt={st.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex flex-col justify-center py-1">
                                            <h4 className="font-semibold text-slate-900 text-[14px] leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">{st.title}</h4>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="font-bold text-accent">${st.price}</span>
                                                {st.original_price && <span className="text-slate-400 line-through text-xs font-medium">${st.original_price}</span>}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </aside>
                </div>
            </div>

            {/* Other Destinations Section */}
            <div className="bg-background-peach mt-20 py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <h2 className="text-3xl font-outfit font-semibold text-slate-900 mb-10">Other destinations</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Destination Card 1 */}
                        <div className="bg-white rounded-[1.5rem] overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded shadow-sm shadow-accent/20">10% off</div>
                                <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=600&auto=format&fit=crop" alt="Spain" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-bold text-slate-800">4.9</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                        <Clock size={14} />
                                        <span>7 Nights / 8 Days</span>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 border-t border-slate-100 pt-4">Spain</div>
                                <h3 className="font-semibold text-[17px] leading-snug text-slate-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors flex-grow">
                                    Experience the magic of Madrid and Sevilla
                                </h3>
                                <div className="flex items-center gap-2 mt-auto">
                                    <span className="text-slate-500 text-sm font-medium">From</span>
                                    <span className="font-bold text-accent text-lg">$340</span>
                                    <span className="text-slate-400 line-through text-xs font-medium">$390</span>
                                </div>
                            </div>
                        </div>

                        {/* Destination Card 2 */}
                        <div className="bg-white rounded-[1.5rem] overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded shadow-sm shadow-accent/20">20% off</div>
                                <img src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=600&auto=format&fit=crop" alt="Peru" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-bold text-slate-800">4.8</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                        <Clock size={14} />
                                        <span>5 Nights / 6 Days</span>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 border-t border-slate-100 pt-4">Peru</div>
                                <h3 className="font-semibold text-[17px] leading-snug text-slate-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors flex-grow">
                                    Marvel at Historic Machu Picchu Incan Trail
                                </h3>
                                <div className="flex items-center gap-2 mt-auto">
                                    <span className="text-slate-500 text-sm font-medium">From</span>
                                    <span className="font-bold text-accent text-lg">$540</span>
                                    <span className="text-slate-400 line-through text-xs font-medium">$690</span>
                                </div>
                            </div>
                        </div>

                        {/* Destination Card 3 */}
                        <div className="bg-white rounded-[1.5rem] overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded shadow-sm shadow-accent/20">10% off</div>
                                <img src="https://images.unsplash.com/photo-1549887552-cb1db71ac6d5?q=80&w=600&auto=format&fit=crop" alt="Jordan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-bold text-slate-800">4.7</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                        <Clock size={14} />
                                        <span>4 Nights / 5 Days</span>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 border-t border-slate-100 pt-4">Jordan</div>
                                <h3 className="font-semibold text-[17px] leading-snug text-slate-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors flex-grow">
                                    Petra: Ancient City Carved In Red Rock
                                </h3>
                                <div className="flex items-center gap-2 mt-auto">
                                    <span className="text-slate-500 text-sm font-medium">From</span>
                                    <span className="font-bold text-accent text-lg">$280</span>
                                    <span className="text-slate-400 line-through text-xs font-medium">$320</span>
                                </div>
                            </div>
                        </div>

                        {/* Destination Card 4 */}
                        <div className="bg-white rounded-[1.5rem] overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded shadow-sm shadow-accent/20">30% off</div>
                                <img src="https://images.unsplash.com/photo-1541227440156-f6c6d2673295?q=80&w=600&auto=format&fit=crop" alt="France" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-bold text-slate-800">5.0</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                                        <Clock size={14} />
                                        <span>10 Nights / 11 Days</span>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 border-t border-slate-100 pt-4">France</div>
                                <h3 className="font-semibold text-[17px] leading-snug text-slate-900 mb-4 line-clamp-2 group-hover:text-accent transition-colors flex-grow">
                                    Explore French Coastline and Castles Tour
                                </h3>
                                <div className="flex items-center gap-2 mt-auto">
                                    <span className="text-slate-500 text-sm font-medium">From</span>
                                    <span className="font-bold text-accent text-lg">$1800</span>
                                    <span className="text-slate-400 line-through text-xs font-medium">$2200</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <SubmitDetailsModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                tourTitle={tour.title}
                bookingData={{
                    date: formattedDate,
                    adults,
                    children,
                    totalPrice
                }}
            />
        </div>
    );
};

export default TourDetails;
