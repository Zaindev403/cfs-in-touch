"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
    // 1. Add a mounted state
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        // 2. Set mounted to true once the browser is ready
        setMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        // Check scroll position immediately on mount
        handleScroll();
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 3. Simple non-animated version for the Server/Initial render
    if (!mounted) {
        return (
            <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 opacity-0">
                <div className="mx-auto flex items-center justify-between px-6 py-3">
                    <div className="h-10 w-10 bg-slate-800 rounded-lg animate-pulse" />
                </div>
            </header>
        );
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none">
            <motion.div
                initial={false} // Prevents initial animation on mount
                animate={{
                    width: isScrolled ? "90%" : "100%",
                    maxWidth: isScrolled ? "1000px" : "1280px",
                    backgroundColor: isScrolled ? "rgba(15, 23, 42, 0.8)" : "rgba(15, 23, 42, 0)",
                    backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                    border: isScrolled ? "1px solid rgba(0, 210, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0)",
                    y: isScrolled ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="mx-auto flex items-center justify-between rounded-2xl px-6 py-2 sm:py-3 pointer-events-auto shadow-2xl"
            >
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-lg">
                        <Image 
                            src="/logo.png" 
                            alt="Motion-U Logo" 
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-white text-sm sm:text-lg font-bold leading-tight">Motion-U</h1>
                        <p className="text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-widest">CFS in Touch</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Overview", "Curriculum", "Team"].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <motion.button 
                        onClick={() => router.push('/playground')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-black shadow-lg shadow-primary/20"
                    >
                        Enter Playground
                    </motion.button>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Capsule */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden absolute left-4 right-4 top-24 bg-slate-900/95 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl pointer-events-auto"
                    >
                        <a className="text-lg font-medium text-slate-200" href="#">Overview</a>
                        <a className="text-lg font-medium text-slate-200" href="#">Curriculum</a>
                        <a className="text-lg font-medium text-slate-200" href="#">Team</a>
                        <button className="w-full rounded-xl bg-primary py-3 text-base font-bold text-black">
                            Enter Playground
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}