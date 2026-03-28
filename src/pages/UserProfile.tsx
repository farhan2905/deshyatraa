import { useState, useEffect } from 'react';
import { User, History, Receipt, Gift, LogOut, ChevronRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [userInfo, setUserInfo] = useState<any>(null);
    const [bookings, setBookings] = useState<any[]>([]);
    const [invoices, setInvoices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const userData = localStorage.getItem('user');
            if (!userData) {
                navigate('/login');
                return;
            }
            
            const { token } = JSON.parse(userData);
            try {
                const res = await fetch('http://localhost:5000/api/user/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('user');
                    navigate('/login');
                    return;
                }
                
                if (!res.ok) throw new Error('Failed to load profile');
                
                const data = await res.json();
                setUserInfo(data.user);
                setBookings(data.bookings);
                setInvoices(data.invoices);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error || !userInfo) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                    <p className="text-red-500 font-bold mb-4">{error || "Could not load profile"}</p>
                    <button onClick={() => window.location.reload()} className="px-6 py-2 bg-slate-900 text-white rounded-lg">Retry</button>
                </div>
            </div>
        );
    }

    const renderProfile = () => (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">Profile Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                        <p className="font-medium text-slate-900">{userInfo.name}</p>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                        <p className="font-medium text-slate-900">{userInfo.email}</p>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</label>
                        <p className="font-medium text-slate-900">{userInfo.phone}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Address</label>
                        <p className="font-medium text-slate-900">{userInfo.address}</p>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Member Since</label>
                        <p className="font-medium text-slate-900">{userInfo.member_since || 'January 2024'}</p>
                    </div>
                </div>
            </div>
            <button className="mt-8 px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg text-sm transition-colors hover:bg-slate-800">
                Edit Profile
            </button>
        </div>
    );

    const renderHistory = () => (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">Booking History</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="py-4 font-bold text-slate-500 text-sm">Booking ID</th>
                            <th className="py-4 font-bold text-slate-500 text-sm">Tour Name</th>
                            <th className="py-4 font-bold text-slate-500 text-sm">Date</th>
                            <th className="py-4 font-bold text-slate-500 text-sm">Amount</th>
                            <th className="py-4 font-bold text-slate-500 text-sm">Status</th>
                            <th className="py-4 font-bold text-slate-500 text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length === 0 ? (
                            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No booking history available.</td></tr>
                        ) : bookings.map((b) => (
                            <tr key={b.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <td className="py-4 text-sm font-medium text-slate-900">{b.id}</td>
                                <td className="py-4 text-sm text-slate-700">{b.tour}</td>
                                <td className="py-4 text-sm text-slate-700">{b.date}</td>
                                <td className="py-4 text-sm text-slate-700">{b.price}</td>
                                <td className="py-4 text-sm">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${b.status === 'Upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                                        {b.status}
                                    </span>
                                </td>
                                <td className="py-4">
                                    <button className="text-accent hover:text-accent-hover text-sm font-bold flex items-center gap-1">
                                        Details <ChevronRight size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderInvoices = () => (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-outfit">Invoices</h2>
            <div className="space-y-4">
                {invoices.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">No invoices generated yet.</div>
                ) : invoices.map((inv) => (
                    <div key={inv.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex gap-4 items-center mb-4 sm:mb-0">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                                <Receipt size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{inv.id}</h4>
                                <p className="text-sm text-slate-500">{inv.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="font-bold text-slate-900">{inv.amount}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{inv.status}</span>
                            <button className="p-2 text-slate-400 hover:text-accent hover:bg-slate-50 rounded-full transition-colors" title="Download Invoice">
                                <Download size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderRewards = () => (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
            <div className="w-24 h-24 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift size={48} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2 font-outfit">Rewards Program</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">Earn points on every booking and redeem them for exclusive discounts on your future travels.</p>
            
            <div className="inline-block bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Your Current Balance</p>
                <div className="text-5xl font-extrabold text-accent mb-2">{userInfo.points || 0} <span className="text-2xl text-slate-400">pts</span></div>
                <p className="text-sm text-slate-600">= ${(userInfo.points || 0) / 100} in travel credit</p>
            </div>
        </div>
    );

    const navItems = [
        { id: 'profile', label: 'My Profile', icon: User },
        { id: 'history', label: 'Booking History', icon: History },
        { id: 'invoices', label: 'Invoices', icon: Receipt },
        { id: 'rewards', label: 'Rewards', icon: Gift }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold">
                                    {userInfo.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{userInfo.name}</h3>
                                    <p className="text-sm text-slate-500">Explorer</p>
                                </div>
                            </div>
                            
                            <ul className="space-y-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.id}>
                                            <button 
                                                onClick={() => setActiveTab(item.id)}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                                    activeTab === item.id 
                                                    ? 'bg-accent/10 text-accent' 
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                }`}
                                            >
                                                <Icon size={20} />
                                                {item.label}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <button onClick={() => { localStorage.removeItem('user'); navigate('/login'); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-colors">
                                    <LogOut size={20} />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="w-full lg:w-3/4">
                        {activeTab === 'profile' && renderProfile()}
                        {activeTab === 'history' && renderHistory()}
                        {activeTab === 'invoices' && renderInvoices()}
                        {activeTab === 'rewards' && renderRewards()}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
