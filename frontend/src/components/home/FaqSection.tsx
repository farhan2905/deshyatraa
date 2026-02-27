import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        id: 1,
        question: "How do I book a tour with Desh Yatraa?",
        answer: "Booking a tour is simple. Browse our destinations, select your preferred package, and click 'Book Now'. Our dedicated agents will reach out within 24 hours to finalize details."
    },
    {
        id: 2,
        question: "Can I customize a group travel itinerary?",
        answer: "Absolutely! We specialize in custom itineraries for corporate offsites, family reunions, and large groups. Contact our support team to tailor a package to your exact needs."
    },
    {
        id: 3,
        question: "Do you offer international tour packages?",
        answer: "Yes, besides exploring the incredible beauty of India, we offer curated international packages to trending destinations like Bali, Dubai, Thailand, and Europe."
    },
    {
        id: 4,
        question: "What is your cancellation policy?",
        answer: "We offer flexible cancellation policies depending on the package. Generally, full refunds are available up to 30 days before departure. Please check the specific terms of your selected tour."
    }
];

const FaqSection = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column - Image & Contact Card */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[600px] w-full max-w-sm rounded-[24px] overflow-hidden ml-auto lg:mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?q=80&w=800&auto=format&fit=crop"
                                alt="Traveler looking at map"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlapping Contact Card */}
                        <div className="absolute top-1/2 left-0 lg:-left-12 transform -translate-y-1/2 bg-accent p-8 rounded-2xl text-white shadow-2xl max-w-xs z-10">
                            <h3 className="text-xl font-bold mb-4 font-display leading-tight">Do you have more question?</h3>
                            <Link to="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-white pb-1 hover:text-white/80 transition-colors">
                                Help & FAQs <ChevronDown className="-rotate-90" size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-accent font-bold tracking-widest text-sm mb-4 inline-block uppercase">FAQs</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tight mb-10">
                            Answer & Question
                        </h2>

                        <div className="flex flex-col gap-4">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openId === faq.id ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]' : 'bg-gray-50'}`}
                                >
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    >
                                        <span className={`text-lg font-medium pr-8 ${openId === faq.id ? 'text-accent' : 'text-primary'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openId === faq.id ? 'bg-accent/10 rotate-180' : 'bg-white'}`}>
                                            <ChevronDown size={20} className={openId === faq.id ? 'text-accent' : 'text-gray-400'} />
                                        </div>
                                    </button>

                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-500 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqSection;
