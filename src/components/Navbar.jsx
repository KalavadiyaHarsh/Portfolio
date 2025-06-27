import React, { useEffect, useState } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scroll down → hide
      } else {
        setShowNavbar(true); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-[999] w-full px-6 md:px-20 py-6 bg-white shadow-sm font-["Neue_Montreal"] flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className='logo'>
        <h1 className='text-2xl md:text-4xl text-zinc-700 font-semibold'>Harsh Kalavadiya</h1>
      </div>

      {/* Nav Links */}
      <div className="links hidden md:flex gap-10">
        {["Home", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className={`text-xl capitalize hover:text-black transition-all duration-200 ${index === 4 ? "ml-16" : ""}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
