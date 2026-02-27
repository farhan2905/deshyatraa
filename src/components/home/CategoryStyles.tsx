import { Briefcase, Users, PartyPopper, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        title: "Corporate Offsites",
        icon: Briefcase,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
        iconBg: "bg-orange-500"
    },
    {
        id: 2,
        title: "Family Reunions",
        icon: Users,
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
        iconBg: "bg-teal-500"
    },
    {
        id: 3,
        title: "Friends Getaways",
        icon: PartyPopper,
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop",
        iconBg: "bg-yellow-500"
    },
    {
        id: 4,
        title: "Solo Adventures",
        icon: Compass,
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop",
        iconBg: "bg-emerald-600"
    }
];

const CategoryStyles = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tight">Choose your travel style</h2>
                    <Link to="/tours" className="text-accent font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors flex items-center gap-2">
                        View All Tours <span className="text-xl leading-none">&rarr;</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                to="/tour-details"
                                className="group relative block"
                            >
                                {/* The Main Image Card - reduced height from 480 to 470px */}
                                <div className="relative h-[470px] w-full overflow-hidden mb-4 rounded-[40px] shadow-sm">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
                                        style={{ backgroundImage: `url('${category.image}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent z-10 transition-opacity duration-500 group-hover:from-black/70"></div>

                                    {/* Text Content overlay on image (Centered top) */}
                                    <div className="absolute top-10 left-0 w-full text-center z-20 px-4">
                                        <h3 className="text-2xl font-semibold text-white tracking-tight">{category.title}</h3>
                                    </div>
                                </div>

                                {/* Floating Square Icon (Bottom Left Corner inset) */}
                                <div className="absolute bottom-8 left-6 z-30">
                                    {/* The thick white gap is achieved by a white background/border effect. Since the original has a tight white border with no shadow, we'll use a precise wrapper */}
                                    <div className="bg-white p-1 rounded-2xl shadow-sm">
                                        <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center text-white`}>
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoryStyles;
