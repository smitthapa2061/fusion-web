'use client';

import { Check, MonitorPlay, Trophy, Calculator, Shirt, Palette, Globe, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pricingData = {
    broadcast: [
        {
            name: "Manual",
            price: "$1",
            period: "/game",
            description: "Budget-friendly option with manually managed live data.",
            features: [
                "Manual Data Entry",
                "No Live Feed ",
                "Basic Match Information",
                "Slower Update",
                "Best for Small / Local Events"
            ],
            highlight: false
        },
        {
            name: "API",
            price: "$4",
            period: "/game",
            description: "Automated live data powered by real-time API feeds.",
            features: [
                "Live Feed ",
                "Real-Time Score & Stats",
                "High Accuracy & Speed",
                "Ideal for Professional Broadcasts",
                "Supports Advanced Overlays"
            ],
            highlight: true
        }
    ],

    tournament: [
        {
            name: "Event Management",
            price: "Inbox Us",
            period: " for pricing",
            description: "End-to-end esports event handling with custom support.",
            features: [
                "Broadcast Production Support",
                "Graphics & Overlay Design",
                "Room Card & Lobby Management",
                "Moderator Support",
                "Custom Solutions Based on Event Size"
            ],
            highlight: false
        }
    ],
    graphics: [
        {
            name: "Single project",
            price: "Inbox Us",
            period: " for pricing",
            description: "Custom single-design service based on your specific requirement.",
            features: [
                "Thumbnail Design (YouTube / Stream)",
                "Social Media Post & Story",
                "Banner & Cover Design",
                "Personal Cards,Broucher",
                "Poster, Flyer & Announcement",
                "Revisions Based on Discussion",
                "Message Us to Discuss Pricing"
            ],
            highlight: false
        },
        {
            name: "Monthly",
            price: "$50",
            period: "/month",
            description: "Unlimited graphic design support for teams, streamers & organizers.",
            features: [
                "Thumbnails, Banners & Covers",
                "Social Media Posts & Stories",
                "Personal Cards,Broucher",
                "Posters, Flyers & Event Creatives",
                "All Platform Sizes (FB, IG, YT, X)",
                "Unlimited Revisions",
                "Priority Support & Fast Delivery"
            ],
            highlight: true
        }
    ],

    jersey: [
        {
            name: "Jersey Design",
            price: "$20",
            period: "/design",
            description: "Professional custom jersey design tailored to your team identity.",
            features: [
                "Unique & Modern Jersey Design",
                "Custom Team Colors & Patterns",
                "Sponsor & Logo Placement",
                "Front & Back Design",
                "High-Resolution Preview",
                "Revisions Included"
            ],
            highlight: false
        },
        {
            name: "Jersey Printing",
            price: "$13",
            period: "/piece",
            description: "Premium-quality jersey printing with long-lasting comfort and colors.",
            features: [
                "Premium Fabric Quality",
                "High-Quality Sublimation Print",
                "Sweat-Resistant & Breathable Material",
                "Long-Lasting Colors (No Fade)",
                "Suitable for Competitive & Casual Play"
            ],
            highlight: false
        }
    ],

    web: [
        {
            name: "Website Development",
            price: "Inbox Us",
            period: " for pricing",
            description: "Custom-built websites designed to elevate your brand, engage users, and scale with your esports journey.",
            features: [
                "Custom UI/UX Design (No Templates)",
                "Mobile & Desktop Responsive",
                "Team / Tournament / Business Websites",
                "Fast Performance & SEO Friendly",
                "Admin Panel & CMS Integration",
                "Custom Features Based on Your Needs"
            ],
            highlight: false
        }
    ],

    team: [
        {
            name: "Team Management",
            price: "Inbox Us",
            period: " for pricing",
            description: "Complete management solutions to help esports teams operate professionally and grow sustainably.",
            features: [
                "Player & Roster Management",
                "Match & Scrim Scheduling",
                "Team Statistics & Performance Tracking",
                "Contract & Payment Assistance",
                "Sponsor & Brand Coordination",
                "Custom Tools Based on Team Size"
            ],
            highlight: false
        }
    ],
};

const categories = [
    { id: 'broadcast', label: 'Broadcasting', icon: MonitorPlay },
    { id: 'tournament', label: 'Event mgmt', icon: Trophy },
    { id: 'graphics', label: 'Graphics Design', icon: Palette },
    { id: 'jersey', label: 'Jersey Design', icon: Shirt },
    { id: 'web', label: 'Website Dev', icon: Globe },
    { id: 'team', label: 'Team Mgmt', icon: Calculator },
];

export default function Pricing() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof pricingData>('broadcast');

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 animate-pulse">Flexible Pricing</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-6">
                        YOUR NEEDS <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">OUR SERVICE</span>
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Transparent pricing packages tailored for organizers, teams, and content creators.
                    </p>
                </div>

                {/* Category Selector - 6 Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as keyof typeof pricingData)}
                            className={`relative px-4 py-3 md:px-6 md:py-4 rounded-xl flex items-center gap-2 font-bold transition-all duration-300 border border-white/10 group ${activeCategory === cat.id
                                ? 'bg-white text-black scale-105 shadow-[0_0_20px_rgba(255,255,255,0.4)] border-transparent'
                                : 'bg-[#0a0a0a] text-gray-400 hover:bg-white/10 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                }`}
                        >
                            <cat.icon size={18} className={`transition-colors duration-300 ${activeCategory === cat.id ? 'text-purple-600' : 'text-gray-500 group-hover:text-yellow-400'}`} />
                            <span className="relative z-10 uppercase text-sm tracking-wider">{cat.label}</span>

                            {/* Active Tab Background Animation */}
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-xl bg-linear-to-r from-white to-gray-200"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    style={{ zIndex: 0 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Pricing Cards */}
                <div
                    className={`grid gap-8 max-w-4xl mx-auto ${pricingData[activeCategory].length === 1
                        ? 'grid-cols-1 place-items-center'
                        : 'md:grid-cols-2'
                        }`}
                >                    <AnimatePresence mode="wait">
                        {pricingData[activeCategory].map((plan, idx) => (
                            <motion.div
                                key={`${activeCategory}-${plan.name}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className={`relative p-1 rounded-3xl ${plan.highlight
                                    ? 'bg-linear-to-b from-purple-500 to-yellow-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                                    : 'bg-white/10 border border-white/5 hover:border-white/20'
                                    }`}
                            >
                                <div className="h-full bg-[#0a0a0a] p-8 rounded-[22px] flex flex-col relative overflow-hidden group">
                                    {plan.highlight && (
                                        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                            Popular
                                        </div>
                                    )}

                                    <div className="mb-6 relative z-10">
                                        <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                        <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                                    </div>

                                    <div className="mb-8 relative z-10">
                                        <span className="text-4xl font-black text-white">{plan.price}</span>
                                        <span className="text-gray-500 font-medium">{plan.period}</span>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <Check size={16} className="text-purple-500 mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/9779804344434?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan for ${categories.find(c => c.id === activeCategory)?.label}. Can we discuss the details?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-4 font-bold uppercase tracking-wider rounded-xl transition-all duration-300 relative z-10 flex items-center justify-center ${plan.highlight
                                            ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]'
                                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-purple-500/50'
                                            }`}
                                    >
                                        Choose Plan
                                    </a>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
