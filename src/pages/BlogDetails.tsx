import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';

interface Blog {
    id: string; title: string; excerpt: string; image: string; date: string; author: string; content?: string;
}

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then(res => res.json())
            .then((data: Blog[]) => {
                const found = data.find(b => b.id === id);
                setBlog(found || null);
                setIsLoading(false);
            })
            .catch(e => console.error("Could not fetch blog", e));
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen pt-24 bg-slate-50 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen pt-32 pb-20 bg-slate-50 text-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
                <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                <Link to="/blogs" className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors">Browse Blogs</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-white">
            <div className="container mx-auto px-4 md:px-12 max-w-4xl">
                
                <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent font-medium transition-colors mb-8">
                    <ArrowLeft size={16} /> Back to Articles
                </Link>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-outfit text-slate-900 mb-6 leading-tight">
                    {blog.title}
                </h1>

                <div className="flex items-center gap-6 text-slate-500 font-medium pb-8 border-b border-slate-100 mb-8">
                    <div className="flex items-center gap-2">
                        <User size={18} className="text-accent" />
                        <span className="text-slate-800 font-bold">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} className="text-slate-400" />
                        <span>{blog.date}</span>
                    </div>
                </div>

                <div className="rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 mb-12 h-[60vh] min-h-[400px]">
                    <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                <article className="prose prose-lg prose-slate max-w-none prose-headings:font-outfit prose-headings:font-bold prose-a:text-accent">
                    {/* If content exists, render it. Otherwise fallback to excerpt */}
                    {blog.content ? (
                        blog.content.split('\\n').map((paragraph, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed mb-6 text-lg">{paragraph}</p>
                        ))
                    ) : (
                        <p className="text-slate-700 leading-relaxed mb-6 text-lg">{blog.excerpt}</p>
                    )}
                </article>

                <div className="mt-16 pt-8 border-t border-slate-100 text-center">
                    <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-6">Enjoyed this article?</h3>
                    <Link to="/blogs" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                        Read More Travel Stories
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
