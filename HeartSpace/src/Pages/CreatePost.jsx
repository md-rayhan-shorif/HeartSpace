import React, { useState, useEffect } from 'react';

const CreatePost = () => {
  const [activeMood, setActiveMood] = useState('loved');
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'loved');
  }, []);

  const moods = [
    { id: 'loved', label: 'Loved', icon: 'favorite', color: 'primary' },
    { id: 'happy', label: 'Happy', icon: 'sentiment_satisfied', color: '#f59e0b' },
    { id: 'grateful', label: 'Grateful', icon: 'auto_awesome', color: '#10b981' },
    { id: 'dreamy', label: 'Dreamy', icon: 'filter_drama', color: '#8b5cf6' },
    { id: 'nostalgic', label: 'Nostalgic', icon: 'music_note', color: '#6366f1' },
  ];

  const handleMoodChange = (id) => {
    setActiveMood(id);
    document.documentElement.setAttribute('data-theme', id);
  };

  return (
    <div className="bg-background-dark text-white font-display min-h-screen theme-transition">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-primary">
            <span className="material-icons-round">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">New Memory</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-400 hover:text-primary transition-colors">
            Save Draft
          </button>
          <button className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/25 transition-all transform hover:scale-105 flex items-center gap-2">
            <span>Publish Love Note</span>
            <span className="material-icons-round text-sm">favorite</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1 space-y-10">
          {/* Mood Selector */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Select Mood & Theme</label>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                Active Theme: {activeMood.charAt(0).toUpperCase() + activeMood.slice(1)}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleMoodChange(m.id)}
                  className={`group flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                    activeMood === m.id 
                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-background-dark shadow-lg shadow-primary/30' 
                    : 'bg-surface-dark border border-white/5 text-slate-400 hover:border-primary/50'
                  }`}
                >
                  <span className="material-icons-round text-xl">{m.icon}</span>
                  <span className="text-sm font-medium">{m.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Title Input */}
          <section className="relative">
            <div className="flex items-end gap-4">
              <input
                className="w-full bg-transparent border-0 border-b-2 border-white/10 focus:border-primary px-0 py-4 text-3xl lg:text-4xl font-bold placeholder-slate-700 focus:ring-0 transition-colors outline-none"
                placeholder="Give this moment a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              <button className="mb-4 shrink-0 flex items-center gap-2 text-sm text-primary hover:text-white bg-primary/10 hover:bg-primary/20 border border-primary/20 px-3 py-2 rounded-full transition-all">
                <span className="material-icons-round text-lg">casino</span>
                <span className="hidden sm:inline">Random Inspiration</span>
              </button>
            </div>
          </section>

          {/* Image Upload */}
          <section>
            <label className="block text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Capture the Moment</label>
            <div className="w-full h-48 rounded-xl border-2 border-dashed border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer flex flex-col items-center justify-center text-center group">
              <div className="p-4 rounded-full bg-surface-dark group-hover:bg-primary/10 transition-colors mb-3">
                <span className="material-icons-round text-3xl text-slate-500 group-hover:text-primary">add_photo_alternate</span>
              </div>
              <p className="text-sm text-slate-300 font-medium">Drag & drop your photo here</p>
              <p className="text-xs text-slate-500 mt-1">or click to browse files</p>
            </div>
          </section>

          {/* Editor Area */}
          <section className="h-full flex flex-col">
            <div className="flex items-center gap-1 mb-2 border-b border-white/5 pb-2">
              {['format_bold', 'format_italic', 'format_underlined', 'link', 'format_list_bulleted'].map((icon) => (
                <button key={icon} className="p-2 rounded hover:bg-white/5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-icons-round text-lg">{icon}</span>
                </button>
              ))}
            </div>
            <div 
              className="rich-editor w-full min-h-[200px] bg-transparent text-lg leading-relaxed text-slate-200 outline-none placeholder-slate-600 resize-none font-light py-4" 
              contentEditable="true" 
              data-placeholder="Write your heart out..."
            ></div>
          </section>
        </div>

        {/* Sidebar Preview */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-28">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Live Theme Preview
              </h3>
            </div>

            {/* Preview Card */}
            <div className="bg-surface-dark rounded-xl overflow-hidden shadow-2xl border border-primary/20 relative group transition-all duration-500">
              <div className="relative w-full aspect-[4/3] bg-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-primary/10 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="material-icons-round text-white text-sm">favorite</span>
                  <span className="text-xs font-semibold text-white uppercase">{activeMood}</span>
                </div>
              </div>
              
              <div className="p-6 relative -mt-12 z-10">
                <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-background-dark/80 backdrop-blur border border-white/10 text-xs text-primary font-mono">
                  Oct 24, 2023
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                  {title || 'Your Title Here'}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-3">
                  The content you write will appear here in the preview. It will automatically update as you type and change moods.
                </p>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-surface-dark flex items-center justify-center text-[10px] text-primary font-bold">ME</div>
                  </div>
                  <button className="text-slate-500 hover:text-primary">
                    <span className="material-icons-round">more_horiz</span>
                  </button>
                </div>
              </div>
            </div>

            {/* TipBox */}
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 flex gap-3 items-start">
              <span className="material-icons-round text-primary text-lg mt-0.5">lightbulb</span>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-1">Theme Tip: {activeMood}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Try to capture how you feel in this moment. The {activeMood} theme will highlight your emotions beautifully.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default CreatePost;