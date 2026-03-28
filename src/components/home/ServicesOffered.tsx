import { Plane, Building, Train, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOffered = () => {
    const services = [
        {
            icon: <Plane size={48} strokeWidth={1.5} />,
            title: "Flight Booking",
            description: "Seamless domestic and international flight reservations with the best deals."
        },
        {
            icon: <Building size={48} strokeWidth={1.5} />,
            title: "Hotel Booking",
            description: "From budget stays to luxury resorts, find your perfect accommodation."
        },
        {
            icon: <Train size={48} strokeWidth={1.5} />,
            title: "Train Tickets",
            description: "Hassle-free railway reservations across the entire Indian network."
        },
        {
            icon: <Map size={48} strokeWidth={1.5} />,
            title: "Customized Tours",
            description: "Personalized itineraries designed exclusively around your preferences."
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">What We Offer</span>
                        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 leading-tight">
                            Premium Services for <br />Your Perfect Journey
                        </h2>
                    </div>
                    <Link to="/tours" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-colors shrink-0">
                        Connect to Book
                        <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <div 
                            key={idx} 
                            className="group p-8 rounded-3xl border-2 border-slate-100 hover:border-accent/30 bg-white hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-outfit text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            
                            {/* Decorative element resembling a sketch line */}
                            <svg className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity" width="120" height="120" viewBox="0 0 100 100">
                                <path d="M10,90 Q40,10 90,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOffered;
