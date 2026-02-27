import { MapPin, Calendar, Users, Compass, Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="glass rounded-2xl p-4 md:p-6 w-full max-w-5xl mx-auto shadow-2xl relative z-20 -mt-24 mb-20 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Destination */}
                <div className="flex-1 w-full bg-white/50 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 hover:bg-white transition-colors cursor-text group">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary group-hover:bg-primary/10 transition-colors">
                        <MapPin size={24} />
                    </div>
                    <div className="flex-col flex-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Destination</label>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="w-full bg-transparent border-none outline-none text-slate-800 font-medium placeholder:text-slate-400 placeholder:font-normal"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-slate-200"></div>

                {/* Date */}
                <div className="flex-1 w-full bg-white/50 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 hover:bg-white transition-colors cursor-text group">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary group-hover:bg-primary/10 transition-colors">
                        <Calendar size={24} />
                    </div>
                    <div className="flex-col flex-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date</label>
                        <input
                            type="text"
                            placeholder="When does it start?"
                            className="w-full bg-transparent border-none outline-none text-slate-800 font-medium placeholder:text-slate-400 placeholder:font-normal"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-slate-200"></div>

                {/* Type */}
                <div className="flex-1 w-full bg-white/50 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 hover:bg-white transition-colors cursor-text group">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary group-hover:bg-primary/10 transition-colors">
                        <Compass size={24} />
                    </div>
                    <div className="flex-col flex-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tour Type</label>
                        <select className="w-full bg-transparent border-none outline-none text-slate-800 font-medium appearance-none cursor-pointer">
                            <option value="">All Types</option>
                            <option value="adventure">Adventure</option>
                            <option value="cultural">Cultural</option>
                            <option value="honeymoon">Honeymoon</option>
                            <option value="wildlife">Wildlife</option>
                        </select>
                    </div>
                </div>

                {/* Guests */}
                <div className="hidden lg:flex flex-col flex-1 w-full bg-white/50 backdrop-blur-sm rounded-xl p-3 items-start gap-1 justify-center hover:bg-white transition-colors cursor-text group">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider w-full flex gap-3"><Users size={16} className="text-primary" />Guests</label>
                    <input
                        type="number"
                        min="1"
                        placeholder="2 Guests"
                        className="w-full bg-transparent border-none outline-none text-slate-800 font-medium placeholder:text-slate-400 placeholder:font-normal pl-7"
                    />
                </div>

                {/* Search Button */}
                <button className="w-full md:w-auto bg-accent hover:bg-accent-teal text-white min-h-[64px] px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-accent/30">
                    <Search size={20} />
                    <span>Search</span>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
