import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br rounded-2xl from-[#0f3a64] to-[#5a7a98] text-white mt-20 relative overflow-hidden px-6 py-12 pb-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-green-300 to-yellow-400 animate-rainbow bg-[length:200%_100%]"></div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10 relative">
                <div className="hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-100 text-transparent bg-clip-text shadow-sm relative overflow-hidden after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-shine  animate-shine">
                        PokéAPI Explorer
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                        Discover the fascinating world of Pokemon through our interactive application.
                    </p>
                </div>

                <div className="hover:-translate-y-1 transition-transform">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-4">Usefull links</h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>
                            <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all">▶ PokéAPI</a>
                        </li>
                        <li>
                            <a href="https://www.pokemon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all">▶ Official Pokemon Website</a>
                        </li>
                        <li>
                            <a href="https://bulbapedia.bulbagarden.net/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all">▶ Bulbapedia</a>
                        </li>
                    </ul>
                </div>

                <div className="hover:-translate-y-1 transition-transform">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-4">Features</h4>
                    <ul className="space-y-2 text-sm italic text-gray-200">
                        <li>Search Pokemon</li>
                        <li>Complete Details</li>
                        <li>Statistics</li>
                        <li>Evolutions</li>
                    </ul>
                </div>

                <div className="hover:-translate-y-1 transition-transform">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-4">Contact</h4>
                    <div className="flex gap-4 mt-2">
                        <a href="#" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-gray-200 hover:bg-yellow-100/20 hover:text-yellow-300 hover:-translate-y-1 transition-all shadow-md">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-gray-200 hover:bg-yellow-100/20 hover:text-yellow-300 hover:-translate-y-1 transition-all shadow-md">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-gray-200 hover:bg-yellow-100/20 hover:text-yellow-300 hover:-translate-y-1 transition-all shadow-md">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm text-gray-400">
                <p>© {currentYear} PokéAPI Explorer. All Right Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
