"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {

    const router = useRouter();

    return (
        <section className="relative px-4 sm:px-6 py-12 sm:py-20 md:px-20 md:py-32 overflow-hidden bg-slate-950">
            {/* Animated Background Glow */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-0 right-0 -z-10 h-64 w-64 bg-primary/20 blur-[120px] rounded-full"
            />

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    
                    {/* Left Side: Text Animation */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6 sm:gap-8"
                    >
                        <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1 border border-primary/30">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Motion-U Initiative</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
                            CFS in <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">Touch</span>
                        </h1>
                        
                        <p className="max-w-lg text-base sm:text-lg text-slate-400">
                            Bridging the gap between curiosity and Git mastery. Motion-U is visiting foundation students to empower the next generation of developers.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button 
                                onClick={() => location.href="https://docs.google.com/forms/d/e/1FAIpQLSc8lZgwMt7g4oQxVyo0JvvmuLLr3MUnTQSIOPwCPj93SpEuww/viewform?usp=dialog"}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-black shadow-[0_0_20px_rgba(0,210,255,0.3)]"
                            >
                                Register Now
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Side: Visual Animation */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glow Effect behind image */}
                        <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl animate-pulse"></div>
                        
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-primary/30 bg-slate-900 shadow-2xl">
                             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                             {/* Your Logo or Image goes here */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-primary/30 bg-slate-900 shadow-2xl"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoNs0CrwKhP39XBw3c9ClurKaJcnDZGHSewR-mFVHvqFkFgGIN-3Jii2P1baHXSKdSPZGhGwmbIFhH8-zogIK1rYiGZV6oTWfEuWjQbsTLmXjS_oNuRIBAOsVPD2gZ3Ssb9WKcBbIJBRQsTabajirdcrBTBTGrg-CGtlvjcGLo0TvuP2bNnDQ6jdNNT9UCIKAHm0Ljguje_5KG55cy7JK0OEJbAjyHSHPGgFDb60dQ-N0RxBoq2aLqxetXaW6cMXYAKbF3tkAfExk')" ,
                                backgroundSize: "cover" , 
                                backgroundPosition: "center"
                            }}>
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                        </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}