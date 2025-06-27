import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';

function NextEyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const Eye = () => (
        <div className="w-[200px] h-[200px] rounded-full bg-[#F4F4F4] flex items-center justify-center shadow-lg">
            <div className="relative w-[120px] h-[120px] rounded-full bg-[#212121]">
                <div
                    style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                    className="absolute top-1/2 left-1/2 w-full h-8 -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="w-4 h-4 rounded-full bg-[#F4F4F4]"></div>
                </div>
                <p className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">PLAY</p>
            </div>
        </div>
    );

    return (
        <div className='w-full h-screen overflow-hidden border-b-[1px] border-black mt-10'>
            <div data-scroll data-scroll-speed = "-.9" className="font-['Neue_Montreal'] bg-[#CDEA68] rounded-2xl ml-20 mr-20 mb-32 px-20 pt-12 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tight space-y-2 mt-16">
                        <div>Build.</div>
                        <div>Innovate.</div>
                        <div>Deliver.</div>
                    </h2>
                </div>

                <div className="flex justify-center items-center gap-10 -mt-7">
                    <Eye />
                    <Eye />
                </div>
            </div>
        </div>
    );
}

export default NextEyes;
