"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function GitCurriculum() {
    // TypeScript-safe variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    const items = [
        { title: "Commit & Push", desc: "Master the art of saving progress and syncing with remote servers.", img: "/git-1.jpg" },
        { title: "Branching", desc: "Develop multiple features simultaneously without breaking anything.", img: "/git-2.jpg" },
        { title: "Merge Conflicts", desc: "Resolve code overlaps and differences like a professional dev.", img: "/git-3.jpg" },
        { title: "GitHub Flow", desc: "Learn the standard industry workflow for collaboration.", img: "/git-4.jpg" },
    ];

    return (
        <section className="px-4 sm:px-6 py-16 sm:py-24 md:px-20 bg-slate-950">
            <div className="mx-auto max-w-7xl">
                
                {/* Title Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        What you will learn <span className="text-primary">(Git)</span>
                    </h2>
                </motion.div>

                {/* Staggered Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                >
                    {items.map((item, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            className="flex flex-col gap-4 group"
                        >
                            {/* Image Container with Hover Scale */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-slate-800 transition-all group-hover:border-primary/50 duration-500">
                                <Image 
                                    src={item.img} 
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay for that high-tech blue tint */}
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}