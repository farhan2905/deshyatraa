import { Star, Clock, Users, Bus, User, ChevronRight } from 'lucide-react';

const TourDetails = () => {
    return (
        <div className="pt-24 pb-0 bg-white min-h-screen font-sans">
            {/* Header Section */}
            <div className="container mx-auto px-4 md:px-12 mb-8 text-center pt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-medium text-slate-900 leading-tight mb-4">
                    Experience Argentina's iconic<br />iguazu falls
                </h1>
                <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <span className="font-bold text-slate-900">4.9</span>
                    <span>(4)</span>
                </div>

                {/* Info Bar */}
                <div className="max-w-4xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 py-5 px-10 flex flex-wrap justify-between items-center relative z-20 -mb-12 lg:-mb-12">
                    <div className="flex items-center gap-4">
                        <Clock className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Duration</p>
                            <p className="text-sm font-medium text-slate-900">2 days / 1 night</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                        <Users className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Group size</p>
                            <p className="text-sm font-medium text-slate-900">10</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                        <Bus className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Transport</p>
                            <p className="text-sm font-medium text-slate-900">Boat & walk</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-slate-100"></div>
                    <div className="flex items-center gap-4">
                        <User className="text-slate-400" size={24} />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Min age</p>
                            <p className="text-sm font-medium text-slate-900">10+</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 md:px-12 mb-16">
                <div className="w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden relative shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2000&auto=format&fit=crop"
                        alt="Iguazu Falls"
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
                            <button className="px-6 py-2.5 bg-accent text-white font-bold rounded-full text-xs tracking-widest uppercase shadow-md shadow-accent/20">
                                OVERVIEW
                            </button>
                            <button className="px-6 py-2.5 hover:bg-slate-50 text-slate-600 font-bold rounded-full text-xs tracking-widest uppercase transition-colors">
                                TOUR PLAN
                            </button>
                            <button className="px-6 py-2.5 hover:bg-slate-50 text-slate-600 font-bold rounded-full text-xs tracking-widest uppercase transition-colors">
                                GALLERY
                            </button>
                            <button className="px-6 py-2.5 hover:bg-slate-50 text-slate-600 font-bold rounded-full text-xs tracking-widest uppercase transition-colors">
                                FAQ
                            </button>
                        </div>

                        {/* Overview Content */}
                        <div className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-outfit font-semibold text-slate-900 mb-6">Overview</h2>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet consectetur. Euismod vel eu proin in. At ipsum adipiscing et in pretium in
                                ullamcorper. Id habitant facilisis id id fermentum nisi a ridiculus in morbi et interdum. In a diam facilisis amet
                                aliquam amet condimentum ultrices. Scelerisque et varius amet morbi sed mi odio egestas non. Urna tristique
                                aenean id laoreet id a ullamcorper nisl orci vulputate iaculis.
                            </p>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-10">
                                Lacus amet metus amet egestas odio ut id. Vulputate vulputate in ac diam congue tellus eu. Adipiscing sed
                                in mauris. Vulputate nisl in morbi aliquet a mi eu pulvinar gravida in odio cras. Tristique accumsan ipsum
                                id malesuada nunc eu morbi ut magna.
                            </p>

                            {/* Image Grid */}
                            <div className="rounded-[1.5rem] overflow-hidden mb-12 h-[350px]">
                                <img
                                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop"
                                    alt="Tourists taking photos"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Includes / Excludes */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-6">Price includes</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Local Guide',
                                            'Info about the specific area',
                                            'On Trip Transport',
                                            '25 min Video'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-700 text-[15px]">
                                                <div className="mt-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2"></div>
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-6">Price excludes</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Hotel pick-up / drop-off',
                                            'Photo / Video kit',
                                            'Tour day coffee'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-700 text-[15px]">
                                                <div className="mt-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2"></div>
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <p className="text-slate-600 text-[15px] leading-relaxed mb-12">
                                Lacus amet metus amet egestas odio ut id. Vulputate vulputate in ac diam congue tellus eu.
                                in mauris. Vulputate nisl in morbi aliquet a mi eu pulvinar gravida in odio cras. Tristique accumsan ipsum
                                id malesuada nunc eu morbi ut magna.
                            </p>

                            {/* Highlights */}
                            <h3 className="text-2xl font-outfit font-semibold text-slate-900 mb-6">Highlights</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet consectetur. Euismod vel eu proin in. At ipsum adipiscing et in pretium in
                                ullamcorper. Id habitant facilisis id id fermentum nisi a ridiculus in morbi et interdum. In a diam facilisis amet
                                aliquam amet condimentum ultrices.
                            </p>
                            <ul className="space-y-4 mb-10 pl-2">
                                {[
                                    'Semper sed mattis sed nunc tempor.',
                                    'Ullamcorper nisi in lectus.',
                                    'Scelerisque enim id vitae vulputate iaculis.',
                                    'Massa tristique suspendisse ac ut tristique.',
                                    'Purus cras sem sit adipiscing congue. Ultrices id mattis tellus eget diam nisl nunc.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-600 text-[15px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="w-full lg:w-[35%] space-y-10">

                        {/* Booking Widget */}
                        <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
                            <div className="mb-4">
                                <span className="text-slate-800 font-semibold text-lg">Price</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <Clock size={16} className="text-slate-400" />
                                    <span className="text-sm text-slate-500">2 days / 1 night</span>
                                </div>
                                <div className="mt-4">
                                    <span className="text-4xl font-outfit font-semibold text-slate-900">$120</span>
                                </div>
                                <div className="mt-3 text-sm text-slate-600">Pick the date & participants</div>
                            </div>

                            <div className="space-y-4 mb-6">
                                {/* Date Box */}
                                <div className="border border-slate-200 rounded-xl px-4 py-3 flex justify-between items-center bg-white cursor-pointer hover:border-slate-300">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400 font-bold uppercase">Dates</span>
                                        <span className="text-sm font-semibold text-slate-700 mt-1">Select Dates</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                                        <ChevronRight size={16} className="text-slate-400" />
                                    </div>
                                </div>

                                {/* Guests Box */}
                                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                    <div className="flex border-b border-slate-100 divide-x divide-slate-100">
                                        <button className="flex-1 py-3 px-4 text-center text-sm font-semibold text-slate-800 bg-white">Adults</button>
                                        <button className="flex-1 py-3 px-4 text-center text-sm font-semibold text-slate-400 bg-slate-50">Children</button>
                                    </div>
                                    <div className="p-4 flex justify-between items-center bg-white">
                                        <span className="font-semibold text-slate-800 text-sm">Adults</span>
                                        <div className="flex items-center gap-4">
                                            <button className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent font-medium text-lg">-</button>
                                            <span className="font-semibold text-slate-900 w-4 text-center">1</span>
                                            <button className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent font-medium text-lg">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-sm font-medium text-slate-600">Total</span>
                                    <span className="text-lg font-bold text-slate-900">$120</span>
                                </div>
                            </div>

                            <button className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5">
                                BOOK THIS TOUR
                            </button>
                        </div>

                        {/* Similar Tours Widget */}
                        <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
                            <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-6">Similar tours</h3>
                            <div className="space-y-5">
                                {[
                                    { title: 'The New Cost of Europe Adventures', price: '$120', oldPrice: '$150', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=400&auto=format&fit=crop' },
                                    { title: 'Sri Lanka and friends', price: '$140', oldPrice: '', img: 'https://images.unsplash.com/photo-1546708973-c359ce5318fb?q=80&w=400&auto=format&fit=crop' },
                                    { title: 'The red line of Europe low roundcoast', price: '$180', oldPrice: '$210', img: 'https://images.unsplash.com/photo-1520612668579-2479e0a6d0cb?q=80&w=400&auto=format&fit=crop' },
                                ].map((tour, i) => (
                                    <div key={i} className="flex gap-4 group cursor-pointer items-center">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                            <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex flex-col justify-center py-1">
                                            <h4 className="font-semibold text-slate-900 text-[14px] leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">{tour.title}</h4>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="font-bold text-accent">{tour.price}</span>
                                                {tour.oldPrice && <span className="text-slate-400 line-through text-xs font-medium">{tour.oldPrice}</span>}
                                            </div>
                                        </div>
                                    </div>
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

        </div>
    );
};

export default TourDetails;
