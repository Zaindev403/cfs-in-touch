"use client";
import { motion , Variants } from "framer-motion";

export default function ProgramOverview() {
    // Animation settings for the container (staggers the children)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each card
            },
        },
    };

    // Animation settings for each individual card
    const itemVariants: Variants = { // Define the type here
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut" // TS now knows this is a valid Easing string
            }
        },
    };

    const features = [
        {
            icon: "book_5",
            title: "Foundational Knowledge",
            desc: "Understand why version control is the backbone of modern software development and professional engineering."
        },
        {
            icon: "groups",
            title: "Motion-U Community",
            desc: "Join a vibrant community of tech enthusiasts, creators, and mentors who are passionate about building the future."
        },
        {
            icon: "school",
            title: "Peer Mentorship",
            desc: "Learn directly from seniors who have successfully navigated the CFS path and are now industry-ready."
        }
    ];

    return (
        <section className="bg-primary/2 px-4 sm:px-6 py-16 sm:py-24 md:px-20 border-y border-white/5">
            <div className="mx-auto max-w-7xl">
                
                {/* Header Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 sm:mb-16 flex flex-col gap-4 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Program Overview</h2>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-400">
                        A hands-on initiative designed to equip foundation students with industry-standard version control skills and collaborative digital workflows.
                    </p>
                </motion.div>

                {/* Cards Grid with Staggered Reveal */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group rounded-2xl bg-white/3 p-6 sm:p-8 border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-colors relative overflow-hidden"
                        >
                            {/* Subtle hover glow effect */}
                            <div className="absolute -inset-px bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <span className="material-symbols-outlined mb-6 block text-3xl sm:text-4xl text-primary group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </span>
                            <h3 className="mb-3 text-lg sm:text-xl font-bold text-white relative z-10">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-400 relative z-10">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}