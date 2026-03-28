import { Briefcase, Users, PartyPopper, Compass, Heart, Mountain, Camera, Palmtree } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const defaultImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516584281313-162817d23d85?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
];

const visualStyles = [
    { icon: Briefcase, iconBg: "bg-orange-500" },
    { icon: Users, iconBg: "bg-teal-500" },
    { icon: PartyPopper, iconBg: "bg-yellow-500" },
    { icon: Compass, iconBg: "bg-emerald-600" },
    { icon: Heart, iconBg: "bg-rose-500" },
    { icon: Mountain, iconBg: "bg-blue-500" },
    { icon: Camera, iconBg: "bg-purple-500" },
    { icon: Palmtree, iconBg: "bg-cyan-500" }
];

const fallbackCategories = [
    { id: 1, title: "Corporate Offsites", icon: Briefcase, image: defaultImages[0], iconBg: "bg-orange-500" },
    { id: 2, title: "Family Reunions", icon: Users, image: defaultImages[1], iconBg: "bg-teal-500" },
    { id: 3, title: "Friends Getaways", icon: PartyPopper, image: defaultImages[2], iconBg: "bg-yellow-500" },
    { id: 4, title: "Solo Adventures", icon: Compass, image: defaultImages[3], iconBg: "bg-emerald-600" },
    { id: 5, title: "Romantic Gateways", icon: Heart, image: defaultImages[4], iconBg: "bg-rose-500" },
    { id: 6, title: "Mountain Treks", icon: Mountain, image: defaultImages[5], iconBg: "bg-blue-500" },
    { id: 7, title: "Photography Tours", icon: Camera, image: defaultImages[6], iconBg: "bg-purple-500" },
    { id: 8, title: "Beach Vacations", icon: Palmtree, image: defaultImages[7], iconBg: "bg-cyan-500" }
];

const CategoryStyles = () => {
    const [categories, setCategories] = useState(fallbackCategories);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/categories');
                if (res.ok) {
                    const data = await res.json();
                    if (data.length > 0) {
                        const mapped = data.map((cat: any, i: number) => ({
                            id: cat.id,
                            title: cat.name,
                            image: cat.image || defaultImages[i % defaultImages.length],
                            icon: visualStyles[i % visualStyles.length].icon,
                            iconBg: visualStyles[i % visualStyles.length].iconBg
                        }));
                        setCategories(mapped);
                    }
                }
            } catch (e) {
                console.error("Failed to load dynamic categories", e);
            }
        };
        fetchCategories();
    }, []);

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
                    {categories.slice(0, 8).map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={`${category.id}-${index}`}
                                to={`/tours?category=${encodeURIComponent(category.title)}`}
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

                <div className="mt-16 text-center">
                    <Link to="/tours" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-accent/30 text-sm tracking-wide uppercase">
                        View More Styles
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoryStyles;
