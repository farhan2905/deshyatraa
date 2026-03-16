import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-6 md:px-12">

                {/* Horizontal Newsletter Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pb-16 mb-16 border-b border-gray-200 gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-medium text-primary tracking-tight">
                            Sign up for our latest destination updates
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 flex max-w-lg relative">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-gray-50 border border-gray-200 outline-none pl-6 pr-40 py-5 w-full text-primary placeholder:text-gray-400 font-medium rounded-full"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-accent hover:bg-accent-hover text-white px-8 rounded-full text-sm font-bold uppercase tracking-widest transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt="Desh Yatraa Logo"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Discover unforgettable travel experiences. We curate the best trips for corporations, groups, and individuals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Destinations', 'Tour Packages', 'Travel Guides', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <Link to="#" className="text-gray-500 hover:text-accent font-medium transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-8">Support</h4>
                        <ul className="space-y-4">
                            {['FAQ', 'Terms & Conditions', 'Privacy Policy', 'Customer Service'].map((link) => (
                                <li key={link}>
                                    <Link to="#" className="text-gray-500 hover:text-accent font-medium transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-8">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                                <span className="text-gray-500 font-medium">D-22 Aagam Viviana,Opp Florence Vesu,395007</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-accent shrink-0" />
                                <span className="text-gray-500 font-medium">+91 9898225561</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-accent shrink-0" />
                                <span className="text-gray-500 font-medium">info@deshyatraa.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
                    <div className="text-gray-500 font-medium">
                        &copy; {new Date().getFullYear()} Desh Yatraa.
                    </div>

                    {/* Solid Orange Circular Social Icons */}
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 rounded-full bg-accent hover:bg-black text-white flex items-center justify-center transition-colors">
                                <Icon size={18} fill="currentColor" className="text-white" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
