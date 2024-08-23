import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold">DevUI</h3>
                        <p className="text-sm">
                            &copy; 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="text-gray-300 text-sm font-semibold uppercase">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-white">Press Kit</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-4">
                        <h3 className="text-gray-300 text-sm font-semibold uppercase">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Account</a></li>
                            <li><a href="#" className="hover:text-white">Help</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Customer Support</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <h3 className="text-gray-300 text-sm font-semibold uppercase">Legals</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Licensing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
