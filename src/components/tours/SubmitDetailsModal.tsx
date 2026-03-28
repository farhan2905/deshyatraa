import { Check, X } from 'lucide-react';
import { useState } from 'react';

interface SubmitDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourTitle?: string;
    bookingData?: {
        date: string;
        adults: number;
        children: number;
        totalPrice: number;
    };
}

const SubmitDetailsModal = ({ isOpen, onClose, tourTitle = 'General Tour', bookingData }: SubmitDetailsModalProps) => {
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        let finalMessage = `[Package Inquiry for ${tourTitle}]`;
        if (bookingData) {
            finalMessage += `\nTravel Date: ${bookingData.date}`;
            finalMessage += `\nGuests: ${bookingData.adults} Adults, ${bookingData.children} Children`;
            finalMessage += `\nEstimated Total: $${bookingData.totalPrice}\n\n`;
        } else {
            finalMessage += ' ';
        }
        
        finalMessage += formData.get('message') ? formData.get('message') : '(No additional requests)';
        
        try {
            await fetch('http://localhost:5000/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: `INQ-${Math.floor(Math.random() * 10000)}`,
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: finalMessage,
                    date: new Date().toISOString()
                })
            });
            setSubmitted(true);
            setTimeout(() => {
                onClose();
                setSubmitted(false);
            }, 3000);
        } catch(e) { console.error(e); }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden">
                <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:bg-slate-100 rounded-full p-2 transition-colors">
                    <X size={20} />
                </button>
                
                <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-2">Inquire About This Tour</h2>
                    <p className="text-slate-500 mb-8">Leave your details and our travel experts will get back to you shortly.</p>
                    
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                <Check size={40} strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h3>
                            <p className="text-slate-600">We have received your details. Check your email for a copy of the brochure.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Full Name</label>
                                <input name="name" type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent focus:bg-white transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Email Address</label>
                                <input name="email" type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent focus:bg-white transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Phone Number</label>
                                <input name="phone" type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent focus:bg-white transition-colors" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Any Special Requests?</label>
                                <textarea name="message" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent focus:bg-white transition-colors resize-none" placeholder="Dietary requirements, accessibility, etc."></textarea>
                            </div>
                            
                            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl mt-4 shadow-lg transition-all hover:-translate-y-0.5">
                                Submit Details & Request Quote
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubmitDetailsModal;
