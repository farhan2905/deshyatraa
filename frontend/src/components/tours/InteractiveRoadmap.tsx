import { useState } from 'react';
import { Clock, Info, X, MapPin } from 'lucide-react';

const roadmapData = [
    {
        id: 1,
        day: "Day 1",
        date: "15 May 2026",
        time: "14:00",
        location: "Paris, France",
        title: "Arrival & Welcome Dinner",
        coordinates: { x: 15, y: 30 },
        details: "Arrive at Charles de Gaulle Airport and transfer to your premium hotel in central Paris. Settle in and prepare for an exclusive welcome dinner near the Eiffel Tower, where you'll meet your guide and fellow travelers."
    },
    {
        id: 2,
        day: "Day 2",
        date: "16 May 2026",
        time: "09:00",
        location: "Louvre Museum",
        title: "Artistic Odyssey",
        coordinates: { x: 45, y: 20 },
        details: "Enjoy skip-the-line access to the Louvre Museum for a guided tour of its masterpieces, including the Mona Lisa. The afternoon is reserved for a guided walking tour of artistic Montmartre."
    },
    {
        id: 3,
        day: "Day 3",
        date: "17 May 2026",
        time: "08:30",
        location: "Loire Valley",
        title: "Castles & Vineyards",
        coordinates: { x: 65, y: 55 },
        details: "Travel by private coach to the breathtaking Loire Valley. Spend the day exploring the magnificent Château de Chambord and indulge in an exclusive wine-tasting session at a local vineyard."
    },
    {
        id: 4,
        day: "Day 4",
        date: "18 May 2026",
        time: "10:00",
        location: "Nice, French Riviera",
        title: "Coastal Arrival",
        coordinates: { x: 80, y: 85 },
        details: "Take the high-speed TGV train south to Nice. After checking into your seaside hotel, enjoy a leisurely afternoon walking along the Promenade des Anglais overlooking the Mediterranean."
    }
];

const InteractiveRoadmap = () => {
    const [activeNode, setActiveNode] = useState<number | null>(null);

    const activeStop = roadmapData.find(stop => stop.id === activeNode);

    return (
        <div className="bg-[#0b1120] rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="text-center mb-10 relative z-20">
                <h3 className="font-outfit text-3xl font-bold mb-2">Explore Your Journey</h3>
                <p className="text-slate-400">Follow the path and click on the red crosses (✖) to reveal your destination details.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative z-20">

                {/* Map Area */}
                <div className="w-full lg:w-3/5 relative h-[400px] md:h-[500px] rounded-2xl border border-white/10 overflow-hidden shadow-inner group">

                    {/* Base Old Map Texture */}
                    <div className="absolute inset-0 bg-[#0F172A] z-0"></div>

                    {/* Vintage topopgraphic/treasure map overlay blended with deep blue */}
                    <div
                        className="absolute inset-0 z-[1] opacity-30 mix-blend-color-dodge transition-transform duration-[10000ms] group-hover:scale-105"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>

                    {/* Additional Vignette / Dark corners */}
                    <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_40%,rgba(11,17,32,0.9)_100%)]"></div>

                    {/* Animated SVG Path connecting nodes */}
                    <svg className="absolute inset-0 w-full h-full z-[3] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* 
              Curve through (15,30) to (45,20) to (65,55) to (80,85) 
            */}
                        <path
                            d="M 15 30 C 30 10, 35 25, 45 20 C 55 15, 60 40, 65 55 C 70 70, 70 85, 80 85"
                            fill="none"
                            stroke="#F97316" // Sunset Orange/Red
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            className="animate-dash-draw drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                        />
                    </svg>

                    {/* Nodes -> Red Crosses */}
                    {roadmapData.map((node) => {
                        const isActive = activeNode === node.id;
                        return (
                            <div
                                key={node.id}
                                className="absolute z-[4] transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/marker"
                                style={{ top: `${node.coordinates.y}%`, left: `${node.coordinates.x}%` }}
                                onClick={() => setActiveNode(isActive ? null : node.id)}
                            >

                                {/* Treasure Map Red Cross */}
                                <div className={`relative flex items-center justify-center w-8 h-8 transition-transform duration-300 ${isActive ? 'scale-125' : 'group-hover/marker:scale-125 hover:rotate-12'}`}>
                                    {/* Ping effect for active node */}
                                    {isActive && (
                                        <div className="absolute inset-0 w-12 h-12 -ml-2 -mt-2 rounded-full border border-red-500/50 bg-red-500/10 animate-ping"></div>
                                    )}

                                    <div className="absolute w-8 h-1.5 bg-red-600 rotate-45 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.8)] border-[0.5px] border-red-400/50"></div>
                                    <div className="absolute w-8 h-1.5 bg-red-600 -rotate-45 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.8)] border-[0.5px] border-red-400/50"></div>
                                </div>

                                {/* Constant Label */}
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-white border border-white/10 shadow-lg mt-1 group-hover/marker:-translate-y-1 transition-transform">
                                    {node.day}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Details Panel */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center relative z-20">
                    {activeStop ? (
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-fade-in-up">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="inline-block bg-red-600/20 text-red-500 border border-red-500/20 font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded mb-2 shadow-inner">
                                        {activeStop.day}
                                    </span>
                                    <h4 className="text-2xl font-outfit font-bold text-white mt-1 leading-tight">{activeStop.title}</h4>
                                </div>
                                <button onClick={() => setActiveNode(null)} className="text-slate-400 hover:text-red-400 transition-colors p-1 bg-white/5 rounded-full hover:bg-white/10">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-4 mb-6 pt-5 border-t border-white/10">
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <Clock size={16} className="text-accent shrink-0" />
                                    <span><strong>{activeStop.date}</strong> at {activeStop.time}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <MapPin size={16} className="text-accent shrink-0" />
                                    <span>{activeStop.location}</span>
                                </div>
                            </div>

                            <div className="bg-black/30 rounded-xl p-5 border border-white/5 shadow-inner">
                                <h5 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                                    <Info size={16} className="text-accent" /> Activity Quest
                                </h5>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {activeStop.details}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full flex flex-col items-center justify-center text-center border-dashed relative overflow-hidden group">
                            {/* Subtle background compass/rose map icon behind empty state */}
                            <div className="absolute -right-10 -bottom-10 opacity-5 text-white transform group-hover:rotate-45 transition-transform duration-[10000ms]">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                                    <MapPin size={28} className="text-accent" />
                                </div>
                                <h4 className="text-xl font-outfit font-bold text-white mb-2">Uncover the journey</h4>
                                <p className="text-slate-400 text-sm max-w-xs">Click the red crosses (✖) on the treasure map to reveal exact arrival times, dates, and what awaits at each destination.</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default InteractiveRoadmap;
