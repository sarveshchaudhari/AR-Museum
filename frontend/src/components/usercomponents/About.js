import React from 'react';

export default function About() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center justify-center p-8 relative">
            {/* Background Image Section */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}></div>
            
            {/* Overlay to Darken Background */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Info Section in a Professional Box */}
            <div className="relative bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-10 md:p-16 max-w-lg text-center transition-colors duration-500 z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-600 dark:text-purple-400">About Us</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    We are passionate about creating innovative solutions that enhance user experiences and drive technological advancements.
                </p>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-lg mb-4">
                    Our mission is to deliver scalable and efficient solutions tailored to meet our clients' needs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, facilis.
                </p>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-lg">
                    Join us on this journey to innovate and inspire! 🚀
                </p>
                <a href="#contact" className="mt-6 inline-block bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
                    Get in Touch
                </a>
            </div>
        </div>
    );
}
