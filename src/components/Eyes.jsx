import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

    return (
        <div className='eyes w-full h-screen bg-slate-300 overflow-hidden'>
            <div data-scroll data-scroll-speed = "-.9" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-8  '>
                                <div className=' w-8 h-8 rounded-full bg-zinc-100'></div>
                            </div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">PLAY</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-8  '>
                                <div className=' w-8 h-8 rounded-full bg-zinc-100'></div>
                            </div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">PLAY</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Eyes
