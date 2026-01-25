'use client';

import { ExternalLink, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Products() {
    return (
        <section id="products" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05)_0%,transparent_50%)]"></div>
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-yellow-400/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-white font-bold tracking-[0.2em] uppercase text-[1rem] mb-4 animate-pulse">featured </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">PRODUCTS</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Cutting-edge tools and platforms designed to elevate the esports experience for organizers, players, and fans.
                    </p>
                </div>

                {/* Featured Product: ScoreSync */}
                <div className="mb-24">
                    <div className="relative group rounded-3xl p-1 bg-gradient-to-br from-purple-600 via-indigo-600 to-yellow-400">
                        <div className="absolute inset-0 bg-purple-600/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative bg-[#0a0a0a] rounded-[22px] overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 items-center">
                                {/* Content */}
                                <div className="space-y-8 order-2 lg:order-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                                        <Sparkles size={12} className="fill-current" /> Featured Product
                                    </div>

                                    <div>
                                        <h4 className="text-3xl md:text-5xl font-black text-white italic tracking-tight mb-4">SCORESYNC</h4>
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            The ultimate tournament utility platform. Seamlessly manage branded overlays, real-time scoring, and broadcast graphics integration. Elevate your production quality instantly.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href="https://scoresyncnp.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black font-black uppercase tracking-wider -skew-x-12 hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                                        >
                                            <span className="skew-x-12 flex items-center gap-2">
                                                Launch App <ExternalLink size={20} />
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                {/* Logo / Visual */}
                                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 group-hover:scale-110">
                                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[80px] animate-pulse"></div>
                                        <Image
                                            src="/logo.png"
                                            alt="ScoreSync Logo"
                                            fill
                                            className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] z-10"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coming Soon Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[300px]">
                                <div className="w-20 h-20 rounded-2xl bg-[#151515] border border-dashed border-white/20 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all duration-500">
                                    <Clock className="w-10 h-10 text-gray-600 group-hover:text-yellow-400 transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <div className="text-xs font-bold text-purple-500 uppercase tracking-widest">In Development</div>
                                    <h5 className="text-2xl font-black text-white/50 group-hover:text-white transition-colors">COMING SOON</h5>
                                    <p className="text-sm text-gray-500 max-w-[200px] mx-auto">
                                        Innovative esports solution currently under construction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
