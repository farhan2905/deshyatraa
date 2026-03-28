import { MessageCircle, X, Check } from 'lucide-react';
import { useState } from 'react';

const FloatingInquiry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        try {
            await fetch('http://localhost:5000/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: `INQ-${Math.floor(Math.random() * 10000)}`,
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: `[General Inquiry] ${formData.get('message')}`,
                    date: new Date().toISOString()
                })
            });
            setSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                setSubmitted(false);
            }, 3000);
        } catch(e) { console.error(e); }
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#FF7F50] hover:bg-[#FF6347] text-white py-3 px-4 rounded-l-xl shadow-2xl flex flex-col items-center gap-2 z-40 transition-all hover:pr-6 group border border-r-0 border-white/20"
                title="Inquire Now"
            >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                <span className="writing-vertical-rl text-sm font-bold tracking-widest uppercase origin-center rotate-180">
                    Inquire Now
                </span>
                <style>{`
                    .writing-vertical-rl { writing-mode: vertical-rl; }
                `}</style>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 p-8 md:p-10">
                        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:bg-slate-100 rounded-full p-2 transition-colors">
                            <X size={20} />
                        </button>
                        
                        <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-2">Have a Question?</h2>
                        <p className="text-slate-500 mb-6 text-sm">Tell us what you're looking for, and our experts will help you craft the perfect itinerary.</p>
                        
                        {submitted ? (
                            <div className="text-center py-10">
                                <div className="mx-auto w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4"><Check size={32} strokeWidth={3} /></div>
                                <h3 className="text-xl font-bold text-slate-900">Request Sent!</h3>
                                <p className="text-slate-600 mt-2 text-sm">We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input name="name" type="text" required placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent text-sm font-medium" />
                                <input name="email" type="email" required placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent text-sm font-medium" />
                                <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent text-sm font-medium" />
                                <textarea name="message" required rows={3} placeholder="What destinations or types of packages are you interested in?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent text-sm font-medium resize-none"></textarea>
                                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-xl mt-2 shadow-lg transition-all hover:-translate-y-0.5">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingInquiry;
