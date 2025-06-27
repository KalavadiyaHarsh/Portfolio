import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 2 }  // Updated to 2s
    }
};

function LandingPage() {
    return (
        <section className="min-h-screen w-full bg-white text-black flex flex-col font-['Test_Founders_Grotesk_X-Cond_SmBd']">
            {/* Space for fixed Navbar */}
            <div className="pt-[120px] px-6 md:px-20 flex flex-col gap-6 mt-10 -mb-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col gap-6"
                >
                    {/* Intro */}
                    <div className="flex items-center gap-4">
                        <motion.img
                            src="ChatGPT Image Jun 27, 2025, 05_14_10 PM.png"
                            alt="Brand visual icon"
                            className="h-14 w-14 rounded-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ease: [0.87, 0, 0.13, 1], duration: 2 }}  
                        />
                        <motion.h1
                            className="text-3xl md:text-7xl font-bold"
                            variants={itemVariants}
                        >
                            Hi, I'm Harsh Kalavadiya
                        </motion.h1>
                    </div>

                    {/* Role */}
                    <motion.h2
                        className="text-2xl md:text-5xl font-semibold uppercase"
                        variants={itemVariants}
                    >
                        Full Stack Web Developer
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        className="text-lg md:text-3xl text-gray-700 max-w-4xl"
                        variants={itemVariants}
                    >
                        I'm a full-stack web developer specializing in the MERN stack. I love building real-time, scalable applications and crafting seamless digital experiences for modern businesses.
                    </motion.p>
                </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
                className="mt-24 px-6 md:px-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}  
            >
                {/* Add CTA buttons or content here */}
            </motion.div>
        </section>
    );
}

export default LandingPage;
