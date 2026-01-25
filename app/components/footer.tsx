'use client';

import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative bg-[#020202] border-t border-white/5 pt-20 pb-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50 blur-sm"></div>
            <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="relative w-12 h-12 transition-transform group-hover:scale-110 duration-300">
                                <Image
                                    src="/fusion_yolenl.png"
                                    alt="Fusion Esports Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-xl text-white tracking-tighter italic">FUSION</span>
                                <span className="text-xs font-bold text-yellow-500 tracking-[0.2em]">ESPORTS</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Elevating the esports experience through professional broadcasting, tournament management, and premium team support. World-class production for world-class competition.
                        </p>
                    </div>

                    {/* Contact - Socials */}
                    <div className="md:text-right flex flex-col md:items-end">
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Connect With Us</h4>
                        <div className="flex flex-wrap gap-4 justify-end">
                            {/* Discord */}
                            <a
                                href="https://discord.gg/mwNHTxwKEk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-xl flex items-center justify-center text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(88,101,242,0.2)] hover:shadow-[0_0_25px_rgba(88,101,242,0.5)]"
                                title="Join Discord"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 127.14 96.36">
                                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c2.36-24.44-5.42-48.18-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/9779804344434"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]"
                                title="WhatsApp"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/fusiones0?igsh=ZWZ5Y2plM2kzbG9q"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-[#E1306C]/10 border border-[#E1306C]/20 rounded-xl flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(225,48,108,0.2)] hover:shadow-[0_0_25px_rgba(225,48,108,0.5)]"
                                title="Instagram"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* Email / Gmail */}
                            <a
                                href="mailto:fusion1nepal@gmail.com"
                                className="w-14 h-14 bg-[#EA4335]/10 border border-[#EA4335]/20 rounded-xl flex items-center justify-center text-[#EA4335] hover:bg-[#EA4335] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(234,67,53,0.2)] hover:shadow-[0_0_25px_rgba(234,67,53,0.5)]"
                                title="Email Us"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-6 text-right">
                            <p className="text-xs text-gray-500 mb-1">Business Inquiries</p>
                            <a href="mailto:fusion1nepal@gmail.com" className="text-lg font-black text-white hover:text-yellow-400 transition-colors tracking-wide">
                                fusion1nepal@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Fusion Esports. All rights reserved.
                        <span className="hidden md:inline mx-2 text-white/10">|</span>
                        <span className="block md:inline mt-1 md:mt-0">Built for Dominance.</span>
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold text-white transition-all uppercase tracking-wider"
                    >
                        Back to Top
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
