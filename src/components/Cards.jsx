import React from 'react';

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 items-center px-20 flex gap-5'>

      {/* 1st Column */}
      <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>

        {/* Frontend Card */}
        <div className='card w-1/2 h-full relative flex flex-col justify-center items-center rounded-xl bg-[#1F1F1F] text-white p-4 font-["Neue_Montreal"]'>
          <h2 className='text-2xl font-semibold mb-7 mt-9'>Frontend</h2>
          <div className='flex flex-wrap justify-center gap-3'>
            <img src="Harsh_html_icon.png" className='w-8 h-8' alt="HTML" />
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-128.png" className='w-8 h-8' alt="CSS" />
            <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png" className='w-8 h-8' alt="JS" />
            <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-128.png" className='w-8 h-8' alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='w-8 h-8' alt="Tailwind" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" className='w-8 h-8' alt="Bootstrap" />
          </div>
        </div>

        {/* Backend Card */}
        <div className='card w-1/2 h-full relative flex flex-col justify-center items-center rounded-xl bg-[#1F1F1F] text-white p-4'>
          <h2 className='text-2xl font-semibold mb-7'>Backend</h2>
          <div className='flex flex-wrap justify-center gap-5'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className='w-10 h-10' alt="Node.js" />
            <img src="https://w7.pngwing.com/pngs/212/722/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text.png" className='w-20 h-6' alt="Express" />
          </div>
        </div>

      </div>

      {/* 2nd Column */}
      <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>

        {/* Database Card */}
        <div className='card w-1/2 h-full relative flex flex-col justify-center items-center rounded-xl bg-[#1F1F1F] text-white p-4'>
          <h2 className='text-2xl font-semibold mb-7 -mt-1'>Databases</h2>
          <div className='flex flex-wrap justify-center gap-3'>
            <img src="Mododb.png" className='w-20 h-10' alt="MongoDB" />
          </div>
        </div>

        {/* Programming Languages Card */}
        <div className='card w-1/2 h-full relative flex flex-col justify-center items-center rounded-xl bg-[#1F1F1F] text-white p-4'>
          <h2 className='text-xl md:text-2xl font-semibold mb-6 mt-5 text-center'>
            Programming Languages
          </h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <img src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-128.png" className='w-10 h-10' alt="JavaScript" />
            <img src="C++.png" className='w-10 h-10' alt="C++" />
            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-128.png" className='w-10 h-10' alt="Java" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Cards;
