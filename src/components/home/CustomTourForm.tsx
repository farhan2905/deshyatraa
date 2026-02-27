import { Send, Sparkles } from 'lucide-react';

const CustomTourForm = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Elements */}
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
                            <p className="font-medium">+1 (555) 123-4567</p>
                            <p className="text-accent">custom@deshyatraa.com</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-3/5 p-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Destination(s)</label>
                                    <input type="text" placeholder="e.g. Italy, Japan" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Est. Budget</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none">
                                        <option>$1,000 - $3,000</option>
                                        <option>$3,000 - $5,000</option>
                                        <option>$5,000 - $10,000</option>
                                        <option>$10,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Tell us about your trip</label>
                                <textarea
                                    rows={4}
                                    placeholder="What is the occasion? What activities do you enjoy?"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="button" className="w-full bg-accent hover:bg-accent-teal text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform hover:-translate-y-1">
                                <Send size={18} /> Send Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomTourForm;
