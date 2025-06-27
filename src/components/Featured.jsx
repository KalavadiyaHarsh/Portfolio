import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const [flipped, setFlipped] = useState([false, false, false, false]);

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    const toggleFlip = (index) => {
        const newFlips = [...flipped];
        newFlips[index] = !newFlips[index];
        setFlipped(newFlips);
    };

    const cardData = [
        {
            title: "CollabAI Chat",
            image: "Chat-cuate.png",
            description: `Built a real-time team chat platform using the MERN stack with secure, project-specific environments.
Integrated JWT authentication, Socket.io messaging, and middleware validation.
Implemented persistent chat history and "@ai" command support via Google Gemini API.
Strengthened skills in full-stack, real-time communication, and practical AI integration.`,
            backColor: "bg-[#CDEA68] text-black"
        },
        {
            title: "M-Parts",
            image: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: `Developed a responsive e-commerce website using the MERN stack for selling mobile phone spare parts, repair tools, and
accessories. The platform features a clean UI with red-black accents, categorized product listings, and detailed product
pages with images, pricing, and reviews. Implemented key functionalities including search and filtering, wish list, add-to-cart, secure checkout with multiple payment
options, user authentication, account management, and order tracking. The website is SEO-optimized, mobile-friendly, SSL
-secured, and includes essential informational pages along with live chat support and social media integration.`,
            backColor: "bg-[#004D43] text-white"
        },
        {
            title: "Tomato",
            image: "food-delivery-online.avif",
            description: `Designed and developed a Web App utilizing Node.js, Express.js, and MongoDB for backend functionality, and HTML/CSS
for frontend presentation. Implemented features allowing users to select and display various food items, with a cart feature enabling item updates and
removals, enhancing user interaction and functionality.`,
            backColor: "bg-[#004D43] text-white"
        },
        {
            title: "Typing Speed Test",
            image: "Typing-bro.png",
            description: `The website helps you check your typing speed and accuracy. It measures how fast you type and tracks the number of 
errors you make. A typing tool that offers practice tests and feedback to track and improve typing skills`,
            backColor: "bg-[#CDEA68] text-black"
        }
    ];

    return (
        <div className='w-full py-20 font-["Test_Founders_Grotesk_X-Cond_SmBd"]'>
            <div className='w-full px-20 border-b-[1px] border-zinc-900 pb-16'>
                <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight uppercase'>Projects</h1>
            </div>

            <div className='px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={() => handleHover(index)}
                        onHoverEnd={() => handleHoverEnd(index)}
                        onClick={() => toggleFlip(index)}
                        className='cardcontainer relative w-full h-[75vh] cursor-pointer'
                        style={{ perspective: '1000px' }}
                    >
                        {!flipped[index] && (
                            <h1 className={`absolute flex overflow-hidden z-[9] leading-none text-6xl font-['Test_Founders_Grotesk_X-Cond_SmBd'] tracking-tight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                                card.title === "CollabAI Chat" ? "text-blue-600" : 
                                card.title === "Typing Speed Test" ? "text-red-400" :
                                card.title === "Tomato" ? "text-black" :
                                "text-[#CDEA68]"
                                }`}>
                                {card.title.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "100%" }}
                                        animate={cards[index]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                                        className="inline-block"
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </h1>
                        )}

                        <div
                            className='w-full h-full relative transition-transform duration-700 ease-in-out rounded-xl'
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}
                        >
                            {/* Front Side */}
                            <div
                                className='absolute w-full h-full'
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                            >
                                <img className='w-full h-full object-cover rounded-xl' src={card.image} alt={card.title} />
                            </div>

                            {/* Back Side */}
                            <div
                                className={`absolute w-full h-full ${card.backColor} p-10 flex items-center justify-center text-center text-lg font-["Neue_Montreal"] rounded-xl`}
                                style={{
                                    transform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden'
                                }}
                            >
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Featured;
