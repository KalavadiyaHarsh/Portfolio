import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>

            {/* Experience Section */}
            <div className='flex flex-col md:flex-row w-full border-t-[1px] pt-10 mt-10 border-black gap-16'>

                {/* Left - Experience Text */}
                <div className='w-full md:w-1/2'>
                    <h1 className='text-5xl md:text-6xl font-semibold mb-6 uppercase font-["Neue_Montreal"]'>My Experience</h1>

                    {/* Internship 1 */}
                    <div className="mb-10 font-['Test_Founders_Grotesk_X-Cond_SmBd']">
                        <h2 className='text-xl font-bold uppercase'>MERN Stack Developer – Internship</h2>
                        <p className='text-sm text-zinc-700 mt-1'>📍 Feb – April 2025 | <span className='font-semibold'>Infotact Solutions</span></p>
                        <ul className='list-disc pl-5 mt-2 text-[15px] leading-relaxed'>
                            <li>Built a collaborative team chat platform using the MERN stack.</li>
                            <li>Implemented JWT-based authentication, Socket.io real-time messaging, and middleware validation.</li>
                            <li>Integrated Google Gemini API for AI-powered code suggestions via <code>@ai</code> commands.</li>
                            <li>Strengthened expertise in full-stack, real-time communication, and AI integration.</li>
                        </ul>
                    </div>

                    {/* Internship 2 */}
                    <div className='font-["Test_Founders_Grotesk_X-Cond_SmBd"]'>
                        <h2 className='text-xl font-bold uppercase '>MERN Stack Developer – Internship</h2>
                        <p className='text-sm text-zinc-700 mt-1'>📍 Currently Working (2025) | <span className='font-semibold'>Adis Technologies</span></p>
                        <ul className='list-disc pl-5 mt-2 text-[15px] leading-relaxed'>
                            <li>Contributing to modern web applications with MongoDB, Express.js, React.js, and Node.js.</li>
                            <li>Focused on backend APIs, frontend components, and responsive UI design.</li>
                            <li>Enhancing skills in building scalable, production-ready applications.</li>
                        </ul>
                    </div>
                    <div className='w-52'>

                        <a
                            href="https://drive.google.com/file/d/1W_5_LGzsNQLvWlowE0tCJM5KSzj_Igss/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center uppercase font-["Neue_Montreal"] gap-6 px-8 py-3 mt-10 bg-zinc-900 rounded-full text-white text-sm tracking-wide'
                        >
                            View My Resume
                            <div className='w-10 h-10 rounded-full bg-white'></div>
                        </a>
                    </div>
                </div>

                {/* Right - Image */}
                <div className='w-full md:w-1/2 h-[70vh] bg-yellow-400 rounded-3xl overflow-hidden'>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Developer at work"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
