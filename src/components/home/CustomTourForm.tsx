import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

const CustomTourForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', destinations: '', budget: '$1,000 - $3,000', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email) return;
        setSending(true);
        try {
            await fetch('http://localhost:5000/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: `INQ-${Date.now()}`,
                    name: formData.name,
                    email: formData.email,
                    phone: '',
                    message: `[Custom Tour Request] Destinations: ${formData.destinations} | Budget: ${formData.budget} | ${formData.message}`,
                    date: new Date().toISOString()
                })
            });
            setSent(true);
            setFormData({ name: '', email: '', destinations: '', budget: '$1,000 - $3,000', message: '' });
            setTimeout(() => setSent(false), 4000);
        } catch (e) { console.error(e); }
        finally { setSending(false); }
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

                    {/* Left Side: Info */}
                    <div className="w-full md:w-2/5 bg-primary p-10 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                        <Sparkles className="text-accent mb-6" size={40} />
                        <h3 className="text-3xl font-outfit font-bold mb-4">Design Your Dream Trip</h3>
                        <p className="text-slate-300 leading-relaxed text-sm mb-8">
                            Can't find the perfect package? Let our travel experts craft a bespoke itinerary customized to your exact preferences, budget, and travel style.
                        </p>
                        <div className="mt-auto pt-8 border-t border-white/10">
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Direct Contact</p>
                            <p className="font-medium">+91 98765 43210</p>
                            <p className="text-accent">custom@deshyatraa.com</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-3/5 p-10">
                        {sent && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-xl text-sm font-medium text-center">✅ Request sent successfully! We'll contact you soon.</div>}
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Name</label>
                                    <input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" required />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Email Address</label>
                                    <input type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Destination(s)</label>
                                    <input type="text" placeholder="e.g. Rajasthan, Kerala" value={formData.destinations} onChange={e => setFormData({...formData, destinations: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Est. Budget</label>
                                    <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none">
                                        <option>₹10,000 - ₹30,000</option>
                                        <option>₹30,000 - ₹50,000</option>
                                        <option>₹50,000 - ₹1,00,000</option>
                                        <option>₹1,00,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Tell us about your trip</label>
                                <textarea
                                    rows={4}
                                    placeholder="What is the occasion? What activities do you enjoy?"
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" disabled={sending} className="w-full bg-accent hover:bg-accent-teal text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform hover:-translate-y-1 disabled:opacity-60">
                                <Send size={18} /> {sending ? 'Sending...' : 'Send Request'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomTourForm;
