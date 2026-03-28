import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, User, ArrowRight, ArrowLeft } from 'lucide-react';

interface Blog {
    id: string; title: string; excerpt: string; image: string; date: string; author: string; content?: string;
}

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            })
            .catch(e => console.error("Could not fetch blogs", e));
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen pt-24 bg-slate-50 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 relative overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-white py-16 text-center relative mb-12">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold font-outfit mb-4">Travel Journal</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">Discover destination guides, insider tips, and incredible travel stories curated by the Desh Yatraa team.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-medium transition-colors mb-10"><ArrowLeft size={16} /> Back to Home</Link>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                    <CalendarDays size={14} className="text-accent" />
                                    {blog.date}
                                </div>
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-4">
                                    <User size={16} className="text-slate-400" />
                                    <span>By <span className="font-bold text-slate-800">{blog.author}</span></span>
                                </div>
                                <h3 className="text-xl font-bold font-outfit text-slate-900 mb-4 leading-snug group-hover:text-accent transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                    {blog.excerpt}
                                </p>
                                <Link to={`/blogs/${blog.id}`} className="text-slate-900 font-bold flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-widest text-sm mt-auto w-max">
                                    Read Article <ArrowRight size={18} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {blogs.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-slate-400 mb-2">No Articles Yet</h3>
                        <p className="text-slate-500">Check back later for exciting travel stories!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
