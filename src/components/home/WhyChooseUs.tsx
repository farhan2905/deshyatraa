import { Map, CalendarCheck, Headphones } from 'lucide-react';

const features = [
    {
        id: 1,
        icon: <Map size={56} strokeWidth={1} className="text-primary mb-6" />,
        title: 'Expertly Crafted Itineraries',
        desc: 'Our travel experts build personalized journeys tailored exactly to your group’s preferences, ensuring every detail is covered from start to finish.'
    },
    {
        id: 2,
        icon: <CalendarCheck size={56} strokeWidth={1} className="text-primary mb-6" />,
        title: 'Dedicated Group Economics',
        desc: 'Unlock exclusive rates and unbeatable value for corporate offsites, family reunions, and large gatherings without compromising on quality.'
    },
    {
        id: 3,
        icon: <Headphones size={56} strokeWidth={1} className="text-primary mb-6" />,
        title: '24/7 Priority Support',
        desc: 'Travel with complete peace of mind. Our dedicated ground support team is available around the clock to manage any unforeseen events.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-accent font-bold tracking-widest text-sm mb-4 inline-block uppercase">Our Value</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tight">
                        Why choose Desh Yatraa
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white flex flex-col items-center text-center px-4"
                        >
                            {feature.icon}
                            <h3 className="text-2xl font-medium text-primary mb-4 leading-snug">{feature.title}</h3>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
