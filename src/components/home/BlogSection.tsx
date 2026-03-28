import { CalendarDays, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Blog {
    id: string; title: string; excerpt: string; image: string; date: string; author: string;
}

const BlogSection = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then(r => r.json()).then(setBlogs).catch(() => {});
    }, []);

    if (blogs.length === 0) return null;

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Travel Stories & Tips</span>
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">Blogs by Desh Yatraa</h2>
                    <p className="text-slate-600 text-lg">
                        Read our latest travel guides, tips, and stories to inspire your next adventure across India.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                            <div className="h-60 overflow-hidden relative">
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
                                    Read Story <ArrowRight size={18} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
