import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Star, MapPin, DollarSign, X, LogOut, MessageSquare, Tag, Map, Briefcase, CheckCircle, Clock } from 'lucide-react';

interface Tour {
    id: string; title: string; location: string; price: number; duration: string;
    status: 'Active' | 'Draft'; tour_type?: string; destination_region?: string;
    image?: string; description?: string; amenities?: string; gallery?: string;
    original_price?: number; badge?: string;
    is_featured?: number; is_hot_deal?: number; is_honeymoon?: number;
    is_recommended?: number; family_trip?: number;
}
interface Taxonomy { id: string; name: string; image?: string; }
interface Inquiry { id: string; name: string; email: string; phone: string; message: string; date: string; status: string; }
interface Blog { id: string; title: string; excerpt: string; image: string; date: string; author: string; content: string; }
interface Review { id: string; name: string; location: string; rating: number; text: string; date: string; }

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'tours' | 'destinations' | 'categories' | 'inquiries' | 'blogs' | 'reviews'>('tours');

    const [tours, setTours] = useState<Tour[]>([]);
    const [destinations, setDestinations] = useState<Taxonomy[]>([]);
    const [categories, setCategories] = useState<Taxonomy[]>([]);
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [reviewForm, setReviewForm] = useState({ name: '', location: '', rating: 5, text: '' });

    // Modals
    const [isTourModalOpen, setIsTourModalOpen] = useState(false);
    const [editingTour, setEditingTour] = useState<Tour | null>(null);
    const [newItemName, setNewItemName] = useState('');
    const [newItemImage, setNewItemImage] = useState('');

    const API_URL = 'http://localhost:5000/api';

    useEffect(() => {
        const storedToken = localStorage.getItem('adminToken');
        if (!storedToken) { navigate('/admin'); return; }
        setToken(storedToken);
        fetchAllData(storedToken);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin');
    };

    const fetchAllData = async (authToken: string) => {
        try {
            const [tRes, dRes, cRes, iRes, bRes, rRes] = await Promise.all([
                fetch(`${API_URL}/tours`),
                fetch(`${API_URL}/destinations`),
                fetch(`${API_URL}/categories`),
                fetch(`${API_URL}/admin/inquiries`, { headers: { 'Authorization': `Bearer ${authToken}` } }),
                fetch(`${API_URL}/blogs`),
                fetch(`${API_URL}/reviews`)
            ]);
            
            if (tRes.ok) setTours(await tRes.json());
            if (dRes.ok) setDestinations(await dRes.json());
            if (cRes.ok) setCategories(await cRes.json());
            if (iRes.ok) setInquiries(await iRes.json());
            if (bRes.ok) setBlogs(await bRes.json());
            if (rRes.ok) setReviews(await rRes.json());
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    };

    // --- TOURS LOGIC ---
    const handleTourSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const tourData: Record<string, unknown> = {
            id: editingTour?.id || `T-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
            title: formData.get('title') as string,
            location: formData.get('location') as string,
            price: parseFloat(formData.get('price') as string),
            duration: formData.get('duration') as string,
            status: formData.get('status') as 'Active' | 'Draft',
            tour_type: formData.get('tour_type') as string,
            destination_region: formData.get('destination_region') as string,
            image: formData.get('image') as string || null,
            description: formData.get('description') as string || null,
            amenities: formData.get('amenities') as string || null,
            gallery: formData.get('gallery') ? JSON.stringify((formData.get('gallery') as string).split('\\n').map(l => l.trim()).filter(Boolean)) : null,
            original_price: parseFloat(formData.get('original_price') as string) || null,
            badge: formData.get('badge') as string || null,
            is_featured: formData.get('is_featured') ? 1 : 0,
            is_hot_deal: formData.get('is_hot_deal') ? 1 : 0,
            is_honeymoon: formData.get('is_honeymoon') ? 1 : 0,
            is_recommended: formData.get('is_recommended') ? 1 : 0,
            family_trip: formData.get('family_trip') ? 1 : 0,
        };

        try {
            const method = editingTour ? 'PUT' : 'POST';
            const url = editingTour ? `${API_URL}/tours/${editingTour.id}` : `${API_URL}/tours`;
            const res = await fetch(url, {
                method, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(tourData)
            });
            if (res.ok) {
                await fetchAllData(token!);
            }
        } catch (error) { console.error(error); }
        setIsTourModalOpen(false);
    };

    const deleteTour = async (id: string) => {
        if (!window.confirm('Delete this tour?')) return;
        try {
            const res = await fetch(`${API_URL}/tours/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
            if (res.ok) setTours(tours.filter(t => t.id !== id));
        } catch (error) { console.error(error); }
    };

    // --- TAXONOMY LOGIC (Destinations & Categories) ---
    const addTaxonomy = async (type: 'destinations' | 'categories') => {
        if (!newItemName.trim()) return;
        const id = `${type === 'destinations' ? 'D' : 'C'}-${Math.floor(Math.random() * 1000)}`;
        try {
            const bodyData: any = { id, name: newItemName };
            if (newItemImage.trim()) bodyData.image = newItemImage.trim();

            const res = await fetch(`${API_URL}/admin/${type}`, {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(bodyData)
            });
            if (res.ok) {
                const item = await res.json();
                if (type === 'destinations') setDestinations([...destinations, item]);
                else setCategories([...categories, item]);
                setNewItemName('');
                setNewItemImage('');
            }
        } catch (error) { console.error(error); }
    };

    const deleteTaxonomy = async (type: 'destinations' | 'categories', id: string) => {
        if (!window.confirm(`Delete this ${type.slice(0, -1)}? It might be in use by some tours.`)) return;
        try {
            const res = await fetch(`${API_URL}/admin/${type}/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
            if (res.ok) {
                if (type === 'destinations') setDestinations(destinations.filter(d => d.id !== id));
                else setCategories(categories.filter(c => c.id !== id));
            }
        } catch (error) { console.error(error); }
    };

    // --- INQUIRIES LOGIC ---
    const updateInquiryStatus = async (id: string, status: string) => {
        try {
            const res = await fetch(`${API_URL}/admin/inquiries/${id}/status`, {
                method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ status })
            });
            if (res.ok) setInquiries(inquiries.map(i => i.id === id ? {...i, status} : i));
        } catch (error) { console.error(error); }
    };

    const deleteInquiry = async (id: string) => {
        if (!window.confirm('Delete this inquiry?')) return;
        try {
            const res = await fetch(`${API_URL}/admin/inquiries/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
            if (res.ok) setInquiries(inquiries.filter(i => i.id !== id));
        } catch (error) { console.error(error); }
    };


    // --- BLOGS LOGIC ---

    const deleteBlog = async (id: string) => {
        if (!window.confirm('Delete this blog?')) return;
        try {
            const res = await fetch(`${API_URL}/admin/blogs/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
            if (res.ok) setBlogs(blogs.filter(b => b.id !== id));
        } catch (error) { console.error(error); }
    };

    // --- REVIEWS LOGIC ---
    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = { id: `REV-${Math.floor(Math.random() * 1000)}`, ...reviewForm };
        try {
            const res = await fetch(`${API_URL}/admin/reviews`, {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(data)
            });
            if (res.ok) {
                await fetchAllData(token!);
                setReviewForm({ name: '', location: '', rating: 5, text: '' });
            }
        } catch (error) { console.error(error); }
    };

    const deleteReview = async (id: string) => {
        if (!window.confirm('Delete this review?')) return;
        try {
            const res = await fetch(`${API_URL}/admin/reviews/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
            if (res.ok) setReviews(reviews.filter(r => r.id !== id));
        } catch (error) { console.error(error); }
    };

    return (

        <div className="min-h-screen bg-slate-50 pt-28 pb-20">
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 font-outfit mb-2">Deshyatraa Admin</h1>
                        <div className="flex items-center gap-4">
                            <span className="text-slate-500 font-medium">Manage tours, destinations, categories, and client inquiries.</span>
                            <div className="h-4 w-px bg-slate-300"></div>
                            <button onClick={handleLogout} className="text-red-500 hover:text-red-600 font-bold text-sm flex items-center gap-1.5 transition-colors">
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Navigation Sidebar */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2">
                            <button onClick={() => setActiveTab('tours')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'tours' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                <Briefcase size={18} /> Tour Packages
                            </button>
                            <button onClick={() => setActiveTab('destinations')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'destinations' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                <Map size={18} /> Regions / Destinations
                            </button>
                            <button onClick={() => setActiveTab('categories')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'categories' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                <Tag size={18} /> Tour Categories
                            </button>

                            <button onClick={() => setActiveTab('blogs')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'blogs' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                <MapPin size={18} /> Travel Blogs
                            </button>
                            <button onClick={() => setActiveTab('reviews')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'reviews' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                <Star size={18} /> Testimonials
                            </button>
                            <div className="h-px bg-slate-100 my-2"></div>
                            <button onClick={() => setActiveTab('inquiries')} className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'inquiries' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                                <div className="flex items-center gap-3"><MessageSquare size={18} /> Inquiries</div>
                                {inquiries.filter(i => i.status === 'New').length > 0 && (
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === 'inquiries' ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600'}`}>
                                        {inquiries.filter(i => i.status === 'New').length} New
                                    </span>
                                )}
                            </button>
                        </div>
                    </aside>

                    {/* Tab Context Container */}
                    <main className="flex-grow">
                        {/* TOURS TAB */}
                        {activeTab === 'tours' && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold font-outfit text-slate-900">Tour Packages</h2>
                                    <button onClick={() => { setEditingTour(null); setIsTourModalOpen(true); }} className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md text-sm">
                                        <Plus size={18} /> Add New Tour
                                    </button>
                                </div>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[800px]">
                                        <thead>
                                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Tour Info</th>
                                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Destination & Type</th>
                                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider text-center">Price/Duration</th>
                                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider text-center">Status</th>
                                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tours.map((t) => (
                                                <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50/50 group">
                                                    <td className="py-4 px-6">
                                                        <div className="font-bold text-slate-900 mb-0.5">{t.title}</div>
                                                        <div className="text-[11px] text-slate-400 font-mono tracking-widest">{t.id}</div>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-1">
                                                            <MapPin size={14} className="text-slate-400" /> {t.location} <span className="text-slate-400 font-normal">({t.destination_region || 'N/A'})</span>
                                                        </div>
                                                        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500">{t.tour_type || 'Uncategorized'}</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <div className="font-bold text-slate-900">${t.price}</div>
                                                        <div className="text-xs text-slate-500">{t.duration}</div>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${t.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>{t.status}</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-right">
                                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <button onClick={() => { setEditingTour(t); setIsTourModalOpen(true); }} className="p-2 text-slate-400 hover:text-accent hover:bg-slate-100 rounded-lg"><Edit2 size={16} /></button>
                                                            <button onClick={() => deleteTour(t.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* DESTINATIONS TAB */}
                        {activeTab === 'destinations' && (
                            <div>
                                <h2 className="text-xl font-bold font-outfit text-slate-900 mb-6">Manage Regions / Destinations</h2>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Add New Destination</label>
                                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
                                        <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="e.g. Middle East" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent" />
                                        <input type="url" value={newItemImage} onChange={(e) => setNewItemImage(e.target.value)} placeholder="Image URL (required for destinations)" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent" />
                                        <button onClick={() => addTaxonomy('destinations')} className="bg-accent text-white px-6 py-2.5 rounded-xl font-bold hover:bg-accent/90 transition-colors shrink-0">Add</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {destinations.map(d => (
                                        <div key={d.id} className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center group shadow-sm hover:shadow relative overflow-hidden">
                                            <div className="font-bold text-slate-700 z-10">{d.name}</div>
                                            <button onClick={() => deleteTaxonomy('destinations', d.id)} className="text-slate-300 hover:text-red-500 p-2 z-10 transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={18} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CATEGORIES TAB */}
                        {activeTab === 'categories' && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-bold font-outfit text-slate-900 mb-6">Manage Tour Categories</h2>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                                    <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-widest text-[11px]">Add New Category</h3>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input type="text" placeholder="Category Name (e.g. Wildlife)" value={newItemName} onChange={e => setNewItemName(e.target.value)} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent font-medium" />
                                        <input type="url" placeholder="Image URL (Optional)" value={newItemImage} onChange={e => setNewItemImage(e.target.value)} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent font-medium" />
                                        <button onClick={() => addTaxonomy('categories')} className="bg-accent text-white px-8 py-2.5 rounded-xl font-bold hover:bg-accent/90 transition-colors whitespace-nowrap">Add Category</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categories.map((c) => (
                                        <div key={c.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-400 overflow-hidden">
                                                    {c.image ? <img src={c.image} alt={c.name} className="w-full h-full object-cover"/> : <Tag size={20} />}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 leading-tight">{c.name}</div>
                                                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{c.id}</div>
                                                </div>
                                            </div>
                                            <button onClick={() => deleteTaxonomy('categories', c.id)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* INQUIRIES TAB */}
                        {activeTab === 'inquiries' && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold font-outfit text-slate-900">Client Inquiries</h2>
                                    <div className="text-sm font-medium text-slate-500">Showing {inquiries.length} submissions</div>
                                </div>
                                <div className="space-y-4">
                                    {inquiries.length === 0 ? (
                                        <div className="bg-white p-12 text-center rounded-2xl border border-slate-100 shadow-sm text-slate-500 font-medium">No inquiries received yet.</div>
                                    ) : inquiries.map(inq => (
                                        <div key={inq.id} className={`bg-white p-6 rounded-2xl border ${inq.status === 'New' ? 'border-accent shadow-md shadow-accent/5' : 'border-slate-100 shadow-sm'} transition-all`}>
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-bold text-slate-900">{inq.name}</h3>
                                                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${inq.status === 'New' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                                            {inq.status}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                                                        <a href={`mailto:${inq.email}`} className="hover:text-primary">{inq.email}</a>
                                                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                                                        <a href={`tel:${inq.phone}`} className="hover:text-primary">{inq.phone}</a>
                                                    </div>
                                                </div>
                                                <div className="text-xs font-bold text-slate-400 font-mono flex items-center gap-1.5"><Clock size={14}/> {new Date(inq.date).toLocaleDateString()}</div>
                                            </div>
                                            <div className="bg-slate-50 p-4 rounded-xl text-slate-700 text-sm italic mb-4">
                                                "{inq.message}"
                                            </div>
                                            <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                                                <button onClick={() => deleteInquiry(inq.id)} className="text-sm font-bold text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">Delete Request</button>
                                                {inq.status === 'New' && (
                                                    <button onClick={() => updateInquiryStatus(inq.id, 'Resolved')} className="flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                                        <CheckCircle size={16} /> Mark Resolved
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* BLOGS TAB */}
                        {activeTab === 'blogs' && (
                            <div className="animate-fade-in">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold font-outfit text-slate-900">Manage Travel Blogs</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {blogs.map(blog => (
                                        <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                                            <div className="h-48 relative overflow-hidden">
                                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                <div className="absolute top-3 right-3 flex gap-2">
                                                    <button onClick={() => deleteBlog(blog.id)} className="bg-white p-2 text-red-600 rounded-full shadow hover:bg-red-50">
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-5 flex flex-col flex-grow">
                                                <span className="text-xs font-bold text-accent mb-2 uppercase">{blog.date}</span>
                                                <h3 className="text-lg font-bold text-slate-900 mb-2">{blog.title}</h3>
                                                <p className="text-sm text-slate-500 line-clamp-2">{blog.excerpt}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* REVIEWS TAB */}
                        {activeTab === 'reviews' && (
                            <div className="animate-fade-in">
                                <h2 className="text-xl font-bold font-outfit text-slate-900 mb-6">Manage Client Testimonials</h2>
                                <form onSubmit={handleReviewSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 space-y-4">
                                    <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-widest text-[11px]">Add New Testimonial</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input type="text" placeholder="Client Name" required value={reviewForm.name} onChange={e => setReviewForm({...reviewForm, name: e.target.value})} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent" />
                                        <input type="text" placeholder="Location (e.g. Mumbai, India)" value={reviewForm.location} onChange={e => setReviewForm({...reviewForm, location: e.target.value})} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent" />
                                        <select value={reviewForm.rating} onChange={e => setReviewForm({...reviewForm, rating: parseInt(e.target.value)})} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-accent">
                                            <option value="5">5 Stars</option>
                                            <option value="4">4 Stars</option>
                                            <option value="3">3 Stars</option>
                                        </select>
                                    </div>
                                    <textarea placeholder="Review Text..." required rows={3} value={reviewForm.text} onChange={e => setReviewForm({...reviewForm, text: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent resize-none"></textarea>
                                    <button type="submit" className="bg-accent text-white px-8 py-2.5 rounded-xl font-bold hover:bg-accent/90 transition-colors">Publish Review</button>
                                </form>

                                <div className="space-y-4">
                                    {reviews.map(review => (
                                        <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                                            <div className="w-12 h-12 rounded-full bg-slate-100 shrink-0 flex items-center justify-center font-bold text-slate-500">{review.name.charAt(0)}</div>
                                            <div className="flex-grow">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                                    <span className="text-xs text-slate-400">• {review.location}</span>
                                                    <div className="flex items-center gap-0.5 ml-3">
                                                        {[...Array(review.rating)].map((_,i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-600 italic">"{review.text}"</p>
                                            </div>
                                            <button onClick={() => deleteReview(review.id)} className="bg-red-50 text-red-600 p-2 rounded-xl hover:bg-red-100 transition-colors"><Trash2 size={18} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                    </main>

                </div>
            </div>

            {/* Tour Form Modal (Overlay) */}
            {isTourModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsTourModalOpen(false)}></div>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
                        <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-6 flex items-center justify-between z-20">
                            <h2 className="text-2xl font-bold font-outfit text-slate-900">
                                {editingTour ? 'Edit Tour' : 'Add New Tour'}
                            </h2>
                            <button onClick={() => setIsTourModalOpen(false)} className="text-slate-400 hover:bg-slate-100 rounded-full p-2 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="p-8">
                            <form className="space-y-6" onSubmit={handleTourSubmit}>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Tour Title</label>
                                    <input type="text" name="title" defaultValue={editingTour?.title} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium" placeholder="e.g. Magical Swiss Alps" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Image URL</label>
                                    <input type="url" name="image" defaultValue={editingTour?.image} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium" placeholder="https://images.unsplash.com/..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Description</label>
                                    <textarea name="description" defaultValue={editingTour?.description} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium resize-none" placeholder="Detailed tour description..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Gallery Image URLs (One per line)</label>
                                    <textarea 
                                        name="gallery" 
                                        defaultValue={editingTour?.gallery ? JSON.parse(editingTour.gallery).join('\\n') : ''} 
                                        rows={4} 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium text-xs font-mono resize-none leading-relaxed" 
                                        placeholder="https://image1.jpg&#10;https://image2.jpg" 
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1 font-medium">These images will populate the masonry gallery on the tour details page.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Specific Location / City</label>
                                        <input type="text" name="location" defaultValue={editingTour?.location} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium" placeholder="e.g. Zurich" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Region</label>
                                        <select name="destination_region" defaultValue={editingTour?.destination_region} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-bold text-slate-700">
                                            {destinations.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Tour Category</label>
                                        <select name="tour_type" defaultValue={editingTour?.tour_type} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-bold text-slate-700">
                                            {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Duration Range</label>
                                        <select name="duration" defaultValue={editingTour?.duration || '1-3 Days'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium text-slate-700">
                                            {['1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'].map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Price ($)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input type="number" name="price" defaultValue={editingTour?.price} required className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-accent font-bold" placeholder="0.00" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Original Price ($)</label>
                                        <input type="number" name="original_price" defaultValue={editingTour?.original_price} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-bold" placeholder="Higher price for strikethrough" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Badge Label</label>
                                        <input type="text" name="badge" defaultValue={editingTour?.badge} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium" placeholder="e.g. Featured, Best Seller, 15% off" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Visibility Status</label>
                                        <select name="status" defaultValue={editingTour?.status || 'Active'} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-bold text-slate-700">
                                            <option value="Active">Active</option>
                                            <option value="Draft">Draft</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wider text-[11px]">Amenities (pipe-separated)</label>
                                    <input type="text" name="amenities" defaultValue={editingTour?.amenities} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent font-medium" placeholder="e.g. 5-star hotel | Desert safari | City tour" />
                                </div>
                                {/* Homepage Visibility Toggles */}
                                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider text-[11px]">Show on Homepage Sections</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {[
                                            { name: 'is_featured', label: 'Featured', checked: editingTour?.is_featured },
                                            { name: 'is_hot_deal', label: 'Hot Deal', checked: editingTour?.is_hot_deal },
                                            { name: 'is_honeymoon', label: 'Honeymoon', checked: editingTour?.is_honeymoon },
                                            { name: 'is_recommended', label: 'Recommended', checked: editingTour?.is_recommended },
                                            { name: 'family_trip', label: 'Family Trip', checked: editingTour?.family_trip },
                                        ].map(toggle => (
                                            <label key={toggle.name} className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-lg border border-slate-200 cursor-pointer hover:border-accent transition-colors">
                                                <input type="checkbox" name={toggle.name} defaultChecked={!!toggle.checked} className="w-4 h-4 text-accent rounded border-slate-300 focus:ring-accent" />
                                                <span className="text-sm font-bold text-slate-700">{toggle.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 pt-6 flex justify-end gap-3 mt-8">
                                    <button type="button" onClick={() => setIsTourModalOpen(false)} className="px-6 py-3 font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">Cancel</button>
                                    <button type="submit" className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5">Save Package</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
