import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="material-icons-round text-primary text-3xl group-hover:scale-110 transition-transform">favorite</span>
            <span className="font-bold text-2xl tracking-tight text-white">HeartSpace</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : "text-slate-300 hover:text-primary transition-colors"}>Home</NavLink>
            <NavLink to="/all-posts" className={({ isActive }) => isActive ? "text-primary" : "text-slate-300 hover:text-primary transition-colors"}>All Memories</NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-4">
                <Link to="/login" className="text-slate-300 hover:text-primary transition-colors text-sm font-semibold">Login</Link>
                <Link to="/signup" className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                  Signup
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/add-post" className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                  <span className="material-icons-round text-lg">edit</span> Write Message
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hidden sm:block p-2 text-slate-400 hover:text-red-500 transition-colors cursor-pointer outline-none" 
                  title="Logout"
                >
                  <span className="material-icons-round text-xl">logout</span>
                </button>
              </div>
            )}

            {/* Mobile Menu Button (Hamburger) */}
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-slate-300 outline-none">
              <span className="material-icons-round text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-[280px] z-[80] bg-[#12060b] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Button Header */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons-round text-3xl">close</span>
          </button>
        </div>

        {/* Links List */}
        <div className="flex flex-col px-8 gap-6">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `text-xl cursor-pointer font-semibold pb-2 border-b border-white/5 ${isActive ? 'text-primary' : 'text-slate-200'}`}>
            Home
          </NavLink>
          
          <NavLink to="/all-posts" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `text-xl cursor-pointer font-semibold pb-2 border-b border-white/5 ${isActive ? 'text-primary' : 'text-slate-200'}`}>
            All Memories
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink to="/add-post" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `text-xl cursor-pointer font-semibold pb-2 border-b border-white/5 ${isActive ? 'text-primary' : 'text-slate-200'}`}>
                Write Message
              </NavLink>
              <button onClick={handleLogout} className="bg-primary text-center py-3 rounded-xl font-bold text-white  cursor-pointer items-center flex justify-center">
                <span className="material-icons-round cursor-pointer">logout</span> Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-4 mt-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-slate-200 cursor-pointer">Login</Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="bg-primary text-center py-3 rounded-xl font-bold text-white  cursor-pointer">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;