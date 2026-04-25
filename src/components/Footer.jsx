import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">BookStore</h3>
                        <p className="text-sm">Your favorite online book shopping destination.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Books</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Add Book</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
                        <p className="text-sm">Email: info@bookstore.com</p>
                        <p className="text-sm">Phone: +994 12 345 67 89</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>&copy; 2026 BookStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer