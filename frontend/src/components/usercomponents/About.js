import React from 'react';

export default function About() {
    return (
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 min-h-screen flex items-center justify-center p-8 relative">
            {/* Background Image Section */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/path/to/your/AR-themed-background.jpg')" }}></div>
            
            {/* Overlay to Darken Background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Centered Info Section with Curved Box and Less Padding on Sides */}
            <div className="relative bg-white text-black shadow-2xl rounded-3xl p-10 md:p-16 max-w-3xl w-full mx-2 sm:mx-0 text-center z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Us</h2>
                <p className="text-lg mb-8">
                    We are an innovative AR-based platform that provides users with an immersive experience to explore museums, art exhibits, and much more—all through augmented reality!
                </p>
                <p className="leading-relaxed text-lg mb-4">
                    Our mission is to blend technology with creativity, offering visitors a chance to experience cultural heritage and modern art like never before. Using the power of AR, we bring the museum to your fingertips—explore exhibits in 3D, interact with artifacts, and step into a virtual world that feels incredibly real.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                    Imagine walking through a museum without leaving your home, or experiencing ancient artifacts coming to life right in front of you. This is just the beginning of what we offer—join us in revolutionizing how people experience art and history!
                </p>
                <p className="leading-relaxed text-lg mb-4">
                    Ready to embark on an unforgettable journey through augmented reality? 🚀
                </p>
                <a href="#contact" className="mt-6 inline-block bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
                    Get in Touch
                </a>
            </div>
        </div>
    );
}
