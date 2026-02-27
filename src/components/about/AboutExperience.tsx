
import { MapPin, Calendar, Smile, Shield } from 'lucide-react';

const AboutExperience = () => {
    const features = [
        {
            icon: <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />,
            title: "Guaranteed routes",
            desc: "Lorem ipsum dolor sit amet consectetur. Amet ut consequat neque ac sagittis nulla rutrum.",
            align: "text-right"
        },
        {
            icon: <Calendar className="w-8 h-8 text-white" strokeWidth={1.5} />,
            title: "Easy booking",
            desc: "Lorem ipsum dolor sit amet consectetur. Amet ut consequat neque ac sagittis nulla rutrum.",
            align: "text-left"
        },
        {
            icon: <Smile className="w-8 h-8 text-white" strokeWidth={1.5} />,
            title: "Client happiness",
            desc: "Lorem ipsum dolor sit amet consectetur. Amet ut consequat neque ac sagittis nulla rutrum.",
            align: "text-right"
        },
        {
            icon: <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />,
            title: "Best tour guidance",
            desc: "Lorem ipsum dolor sit amet consectetur. Amet ut consequat neque ac sagittis nulla rutrum.",
            align: "text-left"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tight">
                        Create an unforgettable travel experience for you
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Dictumst arcu adipiscing cursus in sollicitudin. A non pharetra quis faucibus lacus. Ullamcorper dictum magna sem faucibus.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 max-w-6xl mx-auto cursor-default">
                    {/* Left Column (items 0 and 2) */}
                    <div className="flex flex-col gap-16 lg:w-1/3">
                        <div className="flex flex-col items-end text-right">
                            <div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6">
                                {/* SVG outline icon instead of Lucide because the screenshot has fine line custom icons */}
                                <img src="https://cdn-icons-png.flaticon.com/512/3065/3065961.png" alt="Map" className="w-8 h-8 opacity-70" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{features[0].title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[280px]">
                                {features[0].desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-right">
                            <div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838558.png" alt="Smile" className="w-8 h-8 opacity-70" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{features[2].title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[280px]">
                                {features[2].desc}
                            </p>
                        </div>
                    </div>

                    {/* Center Image Component */}
                    <div className="lg:w-1/3 flex justify-center relative">
                        {/* Main Arched Image */}
                        <div className="relative w-[300px] h-[450px] rounded-t-full rounded-b-full overflow-hidden border-8 border-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-10">
                            <img
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop"
                                alt="Temple"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Small Overlapping Circular Image */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-xl z-20">
                            <img
                                src="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=400&auto=format&fit=crop"
                                alt="Pagoda at sunset"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative thin line border surrounding the arched shape */}
                        <div className="absolute w-[320px] h-[470px] rounded-t-full rounded-b-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    </div>

                    {/* Right Column (items 1 and 3) */}
                    <div className="flex flex-col gap-16 lg:w-1/3">
                        <div className="flex flex-col items-start text-left">
                            <div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Calendar" className="w-8 h-8 opacity-70" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{features[1].title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[280px]">
                                {features[1].desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6">
                                <img src="https://cdn-icons-png.flaticon.com/512/814/814513.png" alt="Shield" className="w-8 h-8 opacity-70" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{features[3].title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[280px]">
                                {features[3].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutExperience;
