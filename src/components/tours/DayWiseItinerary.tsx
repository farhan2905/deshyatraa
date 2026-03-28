import { CheckCircle2 } from 'lucide-react';

const DayWiseItinerary = () => {
    const itinerary = [
        {
            day: "Day 1",
            title: "Arrival in Buenos Aires & Flight to Iguazu",
            description: "Meet your local guide at the airport and transfer straight to your domestic flight to Iguazu. Upon arrival, check-in to your selected rainforest lodge. Spend the evening at your leisure.",
            activities: ["Airport Transfer", "Domestic Flight", "Hotel Check-in"]
        },
        {
            day: "Day 2",
            title: "Full Day Tour of the Argentine Side",
            description: "Experience the majestic Iguazu Falls from the Argentine side. Walk along the upper and lower trails, getting incredibly close to the cascading water. Take the thrilling boat ride that goes right under the falls.",
            activities: ["Upper Circuit Walk", "Devil's Throat Viewpoint", "Great Adventure Boat Ride"]
        },
        {
            day: "Day 3",
            title: "Brazilian Side & Departure",
            description: "Cross the border to Brazil for a panoramic view of the falls. This side offers the best wide-angle photo opportunities. Later, transfer to the airport for your onward journey.",
            activities: ["Border Crossing", "Panoramic Views", "Airport Transfer"]
        }
    ];

    return (
        <div className="mt-8">
            <h2 className="text-3xl font-outfit font-semibold text-slate-900 mb-8">Tour Plan</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {itinerary.map((item, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <CheckCircle2 size={16} />
                        </div>
                        
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">{item.day}</span>
                            <h3 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-4">{item.description}</p>
                            
                            <ul className="flex flex-wrap gap-2">
                                {item.activities.map((activity, aIdx) => (
                                    <li key={aIdx} className="bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-100">
                                        {activity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayWiseItinerary;
