"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Call() {

    const router = useRouter();

    // Animation for the card rising up
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            } 
        }
    };

    return (
        <section className="px-4 sm:px-6 py-16 sm:py-24 md:px-20 text-center bg-slate-950 overflow-hidden">
            <div className="mx-auto max-w-4xl relative">
                
                {/* Decorative Background Glow */}
                <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full animate-pulse" />

                <motion.div 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative z-10 rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-black p-8 sm:p-12 border border-primary/30 shadow-2xl shadow-primary/10"
                >
                    <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                        Ready to push your <br className="hidden sm:block" /> 
                        <span className="text-primary">first code?</span>
                    </h2>
                    
                    <p className="mb-8 sm:mb-10 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Join hundreds of foundation students in the ultimate blue-themed Git playground. Empower your engineering journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button 
                            onClick={() => router.push('/playground')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 210, 255, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto rounded-xl bg-primary px-8 sm:px-12 py-4 sm:py-5 text-lg font-bold text-black transition-colors"
                        >
                            Enter Playground
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="w-full sm:w-auto rounded-xl border border-white/10 px-8 sm:px-12 py-4 sm:py-5 text-lg font-bold text-white transition-colors"
                        >
                            Contact Mentors
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}