import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [mood, setMood] = useState('loved');

  useEffect(() => {
    // ডার্ক মোড এবং ডিফল্ট থিম এনাবল করা
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'loved');
  }, []);

  const changeMood = (selectedMood) => {
    setMood(selectedMood);
    document.documentElement.setAttribute('data-theme', selectedMood);
  };

  const cards = [
    { id: 1, tag: 'LOVED', date: 'October 24, 2023', title: 'Just because you exist', desc: 'I looked at you today while you were making coffee and realized how lucky I am...' },
    { id: 2, tag: 'SAD', date: 'November 02, 2023', title: "It's okay to not be okay", desc: "Please don't force a smile for me. I love your rainy days just as much as your sunny ones..." },
    { id: 3, tag: 'HAPPY', date: 'November 15, 2023', title: 'Capturing that laugh', desc: "That joke wasn't even funny, but seeing your eyes crinkle up like that made my entire week..." }
  ];

  return (
    <div className="min-h-screen bg-background-dark font-display">
      {/* Navigation */}
     

      <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <button className="inline-flex items-center gap-2 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 hover:border-primary transition-colors">
          <span className="text-primary">✦</span> Random Memory
        </button>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          How is your heart <span className="text-primary transition-colors duration-500">feeling right now?</span>
        </h1>
        
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
          The world changes color with your feelings. Pick a mood to transform this space and see messages written just for this moment.
        </p>

        {/* Mood Selector */}
        <div className="inline-flex flex-wrap justify-center gap-3 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md mb-24">
          {[
            { id: 'happy', label: 'Happy', icon: '😊' },
            { id: 'sad', label: 'Sad', icon: '😔' },
            { id: 'angry', label: 'Angry', icon: '😤' },
            { id: 'anxious', label: 'Anxious', icon: '😰' },
            { id: 'loved', label: 'Loved', icon: '❤️' }
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => changeMood(m.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                mood === m.id ? 'mood-active scale-105' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>{m.icon}</span> {m.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card) => (
            <div key={card.id} className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group flex flex-col text-left">
              <div className="h-64 bg-slate-800 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{card.tag}</div>
                {/* Placeholder for images from your design */}
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                  <span className="material-icons-round text-xs">schedule</span> {card.date}
                </p>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{card.desc}</p>
                
                {/* কার্ডের নিচের বাটন (যেটা বাদ পড়েছিল) */}
                <a href="#" className="inline-flex items-center text-primary text-sm font-bold gap-2 group/link">
                  Read full message 
                  <span className="material-icons-round text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <section className="py-20 border-t border-white/5">
          <span className="material-icons-round text-primary/20 text-6xl mb-6">format_quote</span>
          <p className="text-2xl md:text-3xl font-light italic text-slate-400 max-w-3xl mx-auto leading-relaxed">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </p>
          <p className="mt-6 text-sm font-bold text-primary tracking-widest uppercase">— Maya Angelou</p>
        </section>
      </main>

      {/* Footer (যেটা বাদ পড়েছিল) */}
     
    </div>
  );
};

export default Home;