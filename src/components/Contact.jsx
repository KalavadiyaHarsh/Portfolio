import React from 'react'
import { FaGithub} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";


function Contact() {
    return (
        <div className='w-full h-screen font-["Test_Founders_Grotesk_X-Cond_SmBd"] p-20 flex overflow-hidden'>
            <div className='w-1/2 h-full flex flex-col justify-between '>
                <div className="heading">
                    <h1 className='leading-none -mb-5 text-[6vw] font-semibold uppercase tracking-tighter'>Let's Connect &</h1>
                    <h1 className='leading-none -mb-5 text-[6vw] font-semibold uppercase tracking-tighter mt-6'>Create Something Incredible</h1>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='leading-none -mb-7 text-[4vw] font-semibold uppercase tracking-tight mr-10'>
                    Contact Me
                </h1>

                <div className='dets mt-10 font-["Neue_Montreal"] '>
                    <p className='text-[1.3vw] font-light'>Email: harshkalavadiya192@gmail.com</p>
                    <p className='text-[1.3vw] font-light'>Phone: +91 6359754464</p>

                    <div className='mt-6  flex gap-10'>
                        <div className='flex items-center gap-2 '>
                            <FaGithub className='text-2xl'/>
                            <a className='text-xl font-light underline' href="https://github.com/KalavadiyaHarsh?tab=repositories" target="_blank" rel="noopener noreferrer" > GitHub</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoLogoLinkedin className='text-2xl' />
                        <a className='block text-xl font-light underline' href="https://www.linkedin.com/in/harsh-kalavadiya-1a5680230//" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <form className='mt-10 space-y-2'>
                    <input
                        type='text'
                        placeholder='Your Name'
                        className='w-full border-b border-black bg-transparent py-2 placeholder:text-zinc-700 focus:outline-none'
                    />
                    <input
                        type='email'
                        placeholder='Your Email'
                        className='w-full border-b border-black bg-transparent py-2 placeholder:text-zinc-700 focus:outline-none'
                    />
                    <textarea
                        placeholder='Your Message'
                        rows='4'
                        className='w-full border-b border-black bg-transparent py-1 placeholder:text-zinc-700 focus:outline-none'
                    ></textarea>
                    <button
                        type='submit'
                        className='mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition'
                    >
                        Send
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Contact
