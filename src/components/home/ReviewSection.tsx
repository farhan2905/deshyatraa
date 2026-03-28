import { Star, MessageSquareQuote } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Review {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
}

const ReviewSection = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
            .catch(() => {});
    }, []);

    if (reviews.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">What Our Travelers Say</h2>
                    <p className="text-slate-600 text-lg">
                        Read verified reviews from our happy customers who experienced the best of India with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                            <MessageSquareQuote size={40} className="text-slate-100 absolute top-8 right-8 group-hover:text-accent/10 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={18} 
                                        className={i < review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"} 
                                    />
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow relative z-10 text-[15px] italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-slate-500 font-bold text-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-[15px]">{review.name}</h4>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;

