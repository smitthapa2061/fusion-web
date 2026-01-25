'use client';

import { Trophy, Users, Globe, Cpu, Swords, CalendarCheck, ArrowRight, Play, Zap, Target, Palette, Clapperboard, Code, Bot, Menu, X, Shirt } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Products from './product';
import Pricing from './pricing';
import Footer from './footer';

const streams = [
    {
        id: "IssSsBNHX6U",
        url: "https://www.youtube.com/live/IssSsBNHX6U?si=eXlQ1Lc6kwETxLfy",
        title: "[NP] DROGON SERIES 1 [ GRAND FINAL DAY 3] #HLX #NEPX #YJ #ASL",
        subtitle: "Live Stream"
    },
    {
        id: "pc4Z-jeNRZc",
        url: "https://www.youtube.com/live/pc4Z-jeNRZc?si=GZ613BiOeOY2qbpU",
        title: "[NP]SNOW STORM LEAGUE S2 | PRIZEPOOL WORTH RS 25,000 | #HLx #TGB #GORE #BHD",
        subtitle: "Live Stream"
    },
    {
        id: "c8qmBPYJ8FQ",
        url: "https://www.youtube.com/live/c8qmBPYJ8FQ?si=RGyn1JHkk-VYWzU_",
        title: "RSD THE BATTLE ZONE SEASON 2 GRAND FINALS DAY 3 !",
        subtitle: "Live Stream"
    },
    {
        id: "O_zT7S2ullQ",
        url: "https://www.youtube.com/live/O_zT7S2ullQ?si=dO_9rXM8qPPAW11L",
        title: "[NP] DANGER DEVICE INVITATION S - 3 | GRAND FINAL DAY - 2 | #HORAA #DRS #YJ #TS #SF #NEPx #YG #KRJP",
        subtitle: "Live Stream"
    },
    {
        id: "teyM2Bf0uFg",
        url: "https://www.youtube.com/live/teyM2Bf0uFg?si=soLyjtb4iXl0pNWj",
        title: "[EN] LEGENDS OF PUBG MOBILE | DAY 1 | START OF A NEW ERA !!! #roz #scam #one #GRx",
        subtitle: "Live Stream"
    },
    {
        id: "bluWCQSDYo4",
        url: "https://www.youtube.com/live/bluWCQSDYo4?si=XpBUZKpGBb4u6fpd",
        title: "MESD GRAND FINALS PRESENTED BY RGLxTZxG7",
        subtitle: "Live Stream"
    },
    {
        id: "IvJ-xSXNzdY",
        url: "https://www.youtube.com/watch?v=IvJ-xSXNzdY",
        title: "Fusion Esports Live Stream Event - Match 1",
        subtitle: "Live Stream"
    },
    {
        id: "u9nT78FQuQE",
        url: "https://www.youtube.com/watch?v=u9nT78FQuQE",
        title: "Fusion Esports Live Stream Event - Match 2",
        subtitle: "Live Stream"
    },
    {
        id: "W_veu2R2QB0",
        url: "https://www.youtube.com/watch?v=W_veu2R2QB0",
        title: "Fusion Esports Live Stream Event - Match 3",
        subtitle: "Live Stream"
    },
    {
        id: "h29MqWGK8CA",
        url: "https://www.youtube.com/watch?v=h29MqWGK8CA",
        title: "Fusion Esports Live Stream Event - Match 4",
        subtitle: "Live Stream"
    },
    {
        id: "ONjwjVKkCKE",
        url: "https://www.youtube.com/watch?v=ONjwjVKkCKE",
        title: "Fusion Esports Live Stream Event - Match 5",
        subtitle: "Live Stream"
    }
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % streams.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const currentStream = streams[currentIndex];

    return (
        <div className="bg-[#050505] min-h-screen selection:bg-yellow-400 selection:text-black overflow-x-hidden">

            {/* Embedded Navbar */}
            <nav className="fixed top-0 left-0 right-0 w-full bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 z-50 transition-all duration-300 supports-backdrop-filter:bg-[#050505]/60 h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex items-center">
                            <Link href="/" className="shrink-0 flex items-center gap-3 group">
                                <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110 duration-300">
                                    <Image
                                        src="/fusion_yolenl.png"
                                        alt="Fusion Esports Logo"
                                        fill
                                        className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-10">
                            {['Home', 'Products', 'Services', 'Pricing', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-yellow-400 relative py-2 group transition-colors duration-300"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                                </Link>
                            ))}
                        </div>

                       

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-yellow-400 p-2 transition-colors z-60 relative"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay with Premium Animations */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-2xl z-55 pt-24 px-6 flex flex-col md:hidden"
                        >
                            <div className="flex flex-col space-y-6">
                                {['Home', 'Products', 'Services', 'Pricing', 'Contact'].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-2xl font-black uppercase tracking-wider text-white hover:text-yellow-400 relative py-2 group block"
                                        >
                                            <span className="relative z-10">{item}</span>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </motion.div>
                                ))}

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-start lg:items-center overflow-hidden pt-28 lg:pt-0">
                {/* Abstract Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                    {/* Glows */}
                    <div className="absolute -top-[20%] right-[0%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                    <div className="absolute bottom-[0%] -left-[10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] bg-yellow-400/10 rounded-full blur-[80px] animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full mt-8 lg:mt-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Text Content */}
                        <div className="relative z-10 space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">

                            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] italic pt-4 lg:pt-0">
                                <span className="block text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">FUSION</span>
                                <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-indigo-500 to-purple-500 animate-gradient-x">ESPORTS</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-medium border-l-4 border-yellow-500 pl-6">
                                Your strategic partner for event management, live broadcasting, and professional media production.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a
                                    href="https://wa.me/9779804344434"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-yellow-400 text-black rounded-none -skew-x-12 font-black tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.4)] inline-block text-center"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-2 skew-x-12">
                                        CONTACT US <Zap size={20} className="fill-black" />
                                    </span>
                                </a>
                                <a
                                    href="https://www.youtube.com/@Fusion01966"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-none -skew-x-12 font-bold tracking-wider hover:bg-white/10 hover:border-purple-500 hover:text-purple-400 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <span className="skew-x-12 flex items-center gap-2">
                                        WATCH STREAM <Play size={18} className="fill-current group-hover:text-purple-400 transition-colors" />
                                    </span>
                                </a>
                            </div>

                            <div className="pt-8 lg:pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 border-t border-white/10">
                                <div className="flex -space-x-4">
                                    {streams.map((stream, i) => (
                                        <a
                                            key={stream.id}
                                            href={stream.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden relative shadow-lg hover:z-10 hover:scale-110 transition-transform cursor-pointer group ${i === currentIndex ? 'ring-2 ring-yellow-400 z-10' : ''}`}
                                        >
                                            <Image
                                                src={`https://img.youtube.com/vi/${stream.id}/hqdefault.jpg`}
                                                alt={stream.title}
                                                width={56}
                                                height={56}
                                                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300"
                                            />
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="relative z-10 w-full flex items-center justify-center perspective-[2000px] mt-8 lg:mt-0">
                            {/* 3D Composition */}
                            <div className="relative w-full max-w-[320px] md:max-w-md lg:max-w-lg aspect-square animate-float-slow mx-auto">

                                {/* Glowing Ring */}
                                <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-spin-slow-reverse"></div>
                                <div className="absolute inset-4 rounded-full border border-dashed border-yellow-500/20 animate-spin-slow"></div>

                                {/* Main Card Container for Animation */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden z-20">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -100, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-[#0a0a0a] rounded-3xl shadow-[0_0_50px_rgba(147,51,234,0.25)] border border-purple-500/30 overflow-hidden"
                                        >

                                            {/* Glass Overlay Effect */}
                                            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-50 z-20 pointer-events-none"></div>

                                            {/* Banner Image Area */}
                                            <div className="h-2/3 bg-transparent relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                                                <Image
                                                    src={`https://img.youtube.com/vi/${streams[currentIndex].id}/hqdefault.jpg`}
                                                    alt={streams[currentIndex].title}
                                                    fill
                                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-110 group-hover:scale-100"
                                                    priority
                                                />
                                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                                    <span className="px-2 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-[0_0_10px_rgba(220,38,38,0.5)] animate-pulse">Live</span>
                                                </div>

                                                {/* Play Button Overlay */}
                                                <a
                                                    href={streams[currentIndex].url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 flex items-center justify-center z-20"
                                                >
                                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer group-hover:bg-purple-600/80">
                                                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                                                    </div>
                                                </a>
                                            </div>

                                            {/* Content Area */}
                                            <div className="h-1/3 p-6 relative z-10">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="w-full">
                                                        <div className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1">{streams[currentIndex].title}</div>
                                                        <h3 className="text-white font-black text-xl italic tracking-tight line-clamp-1">{streams[currentIndex].subtitle}</h3>
                                                    </div>
                                                </div>
                                                <div className="w-full bg-gray-800 h-1.5 rounded-full mt-4 overflow-hidden">
                                                    {/* Animated Progress Bar matching duration */}
                                                    <motion.div
                                                        key={`progress-${currentIndex}`}
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 10, ease: "linear" }}
                                                        className="h-full bg-linear-to-r from-purple-500 to-yellow-500"
                                                    />
                                                </div>
                                                <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                                                    <span>LIVE PREVIEW</span>
                                                    <span className="text-white">STREAM {currentIndex + 1}/{streams.length}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <Products />

            {/* Services Section */}
            <section id="services" className="py-24 relative overflow-hidden bg-[#080808]">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 animate-pulse">Our Services</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-6 relative inline-block">
                            BUILT FOR <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">DOMINANCE</span>
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                            </svg>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service Cards */}
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative p-1 bg-linear-to-b from-white/10 to-transparent hover:from-purple-500 hover:to-yellow-500 rounded-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="h-full bg-[#0d0d0d] p-8 rounded-xl relative overflow-hidden">

                                    {/* Hover Glow */}
                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-[#1a1a1a] border border-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:border-yellow-400/50 transition-colors duration-300 group-hover:scale-110">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-2xl font-black text-white mb-4 italic uppercase">{service.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm font-medium border-l-2 border-transparent group-hover:border-purple-500 pl-0 group-hover:pl-4 transition-all duration-300">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowRight className="text-yellow-400 w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <Pricing />

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

const services = [
    {
        title: "Broadcasting",
        description: "Professional live streaming production with multi-camera setups, replay systems, and custom overlays for Twitch & YouTube.",
        icon: <Globe className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />,
    },
    {
        title: "event Management",
        description: "End-to-end event administration including rule enforcement, player communication, bracket handling, and scheduling.",
        icon: <Trophy className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />,
    },
    {
        title: "Graphics Design",
        description: "High-impact visual identity creation, including social media assets, stream overlays, thumbnails, and branding packages.",
        icon: <Palette className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />,
    },
    {
        title: "Jersey Design & Printing",
        description: "Custom sublimation jerseys designed and printed with premium quality materials for your whole team.",
        icon: <Shirt className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors" />,
    },
    {
        title: "Website Development",
        description: "Custom tournament portals, team websites, and esports platforms built with modern tech stacks for speed and performance.",
        icon: <Code className="w-8 h-8 text-white group-hover:text-indigo-400 transition-colors" />,
    },
    {
        title: "Team Management",
        description: "Automated management via modern bot systems, covering financial records, team data tracking, and social media workflows.",
        icon: <Bot className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" />,
    },
];
