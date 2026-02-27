import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 z-50 relative">
                    <div className={`font-display font-medium text-2xl tracking-tight transition-colors ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}>
                        DESH YATRAA
                    </div>
                </Link>

                {/* Right Actions - Minimalist */}
                <div className="flex items-center gap-6 z-50">
                    <button className={`relative transition-colors hover:opacity-70 ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}>
                        <ShoppingBag size={24} strokeWidth={1.5} />
                        <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                            0
                        </span>
                    </button>

                    <button
                        className={`transition-colors hover:opacity-70 ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>

                {/* Sidebar Navigation Dropdown (replacing the standard nav) */}
                <div className={`fixed top-0 right-0 w-full md:w-96 h-screen bg-white transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col pt-32 px-12 gap-8 shadow-2xl z-40`}>
                    {[
                        { label: 'Destinations', path: '/destinations' },
                        { label: 'Tours', path: '/tours' },
                        { label: 'Groups', path: '/groups' },
                        { label: 'About', path: '/about' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="text-4xl font-light text-primary hover:text-accent transition-colors tracking-tight"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-8 border-t border-gray-100 pt-8">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 z-50">
                            DESH YATRAA
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
