import React, { useState, useEffect } from 'react';

const PostDetail = () => {
  // ধরুন এই ডাটাটি API থেকে আসছে
  const [post, setPost] = useState({
    title: "The silence was deafening.",
    mood: "happy", // loved, happy, sad, angry, anxious
    date: "Oct 26, 2023",
    time: "08:15 PM",
    location: "Living Room, Tense Silence",
    quote: "I didn't want to shout. I really didn't. But when you walked away while I was still speaking, it felt like setting a match to dry kindling.",
    content: `The frustration isn't about the dishes or the schedule. It never is. It's about that split second where I feel invisible in my own home. My chest tightens, the heat rises up my neck, and suddenly everything looks red.`,
    intensity: 85,
    vibeStatus: "Fiery"
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', post.mood);
  }, [post.mood]);

  // মুড অনুযায়ী আইকন এবং লেবেল ম্যাপ
  const moodMap = {
    angry: { label: 'Angry / Frustrated', icon: 'local_fire_department', color: 'text-orange-500' },
    loved: { label: 'Loved / Romantic', icon: 'favorite', color: 'text-pink-500' },
    sad: { label: 'Sad / Gloomy', icon: 'cloud', color: 'text-blue-500' },
    happy: { label: 'Happy / Joyful', icon: 'sunny', color: 'text-yellow-500' }
  };

  return (
    <div className="min-h-screen bg-background-dark text-mood-text font-display transition-colors duration-700">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full glass-panel">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-mood-text/60 hover:text-primary transition-all group">
            <span className="material-icons-round p-2 rounded-full bg-white/5 group-hover:bg-primary/10">arrow_back</span>
            <span className="text-sm font-medium">Back to Journal</span>
          </a>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="material-icons-round text-primary animate-pulse text-2xl">whatshot</span>
            <span className="font-serif italic font-bold text-white text-lg tracking-tight">Heartfelt</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-red-600 p-[2px]">
              <div className="h-full w-full rounded-full bg-background-dark overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=8" alt="User" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Ambient Background Orbs */}
        <div className="fixed top-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="fixed bottom-40 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Section */}
          <article className="lg:col-span-8 space-y-10">
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-primary/20 border border-primary/30 px-5 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-primary/10">
                <span className="material-symbols-outlined text-primary text-base">{moodMap[post.mood].icon}</span>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">{moodMap[post.mood].label}</span>
              </div>
              <span className="text-mood-text/40 text-sm">{post.date} • {post.time}</span>
              <div className="flex items-center gap-1 text-mood-text/40 text-sm">
                <span className="material-icons-round text-sm">location_on</span>
                {post.location}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              {post.title.split('. ')[0]} <br/>
              <span className="mood-gradient-text italic">{post.title.split('. ')[1]}</span>
            </h1>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent opacity-80 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1516589174184-c685266e48fc?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Emotional"
              />
              <button className="absolute bottom-6 right-6 z-20 bg-primary p-4 rounded-full text-white shadow-xl hover:scale-110 transition-transform">
                <span className="material-icons-round">thumb_down</span>
              </button>
            </div>

            {/* Prose Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-2xl font-serif italic text-mood-text/90 border-l-4 border-primary pl-8 py-4 bg-white/5 rounded-r-xl">
                "{post.quote}"
              </p>
              <p className="text-mood-text/70 leading-relaxed text-xl">
                {post.content}
              </p>
              <h3 className="text-3xl font-serif text-white mt-12 mb-6">Cooling the embers</h3>
              <p className="text-mood-text/70 leading-relaxed">
                I'm writing this because I can't speak it yet without my voice shaking. I'm angry, yes. But underneath the anger, I'm just scared that we're drifting.
              </p>
            </div>

            {/* Response Section */}
            <section className="bg-surface-dark/40 border border-primary/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                <span className="material-icons-round text-primary">edit_note</span>
                My Response
              </h3>
              <textarea 
                className="w-full bg-background-dark/50 border border-white/10 rounded-2xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                rows="4"
                placeholder="I'm listening. I'm sorry I walked away..."
              ></textarea>
              <div className="flex justify-end gap-4 mt-6">
                <button className="text-mood-text/50 font-bold hover:text-white transition-colors">Save Draft</button>
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                  Send Reply <span className="material-icons-round text-sm">send</span>
                </button>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-surface-dark to-background-dark p-8 rounded-3xl border border-primary/20 shadow-xl">
              <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Current Vibe</h4>
              <div className="flex items-baseline gap-2 mb-4">
                <p className="text-4xl font-serif font-bold text-white">{post.vibeStatus}</p>
                <span className="text-primary text-sm font-medium">+ High Intensity</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${post.intensity}%` }}></div>
              </div>
              <p className="text-xs text-mood-text/40">Intensity is high ({post.intensity}%). Consider a deep breath before replying.</p>
            </div>

            <div className="bg-surface-dark/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm sticky top-28">
              <h4 className="text-xl font-serif font-bold text-white mb-6">Similar Intensity</h4>
              <div className="space-y-6">
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 overflow-hidden shrink-0">
                    <img src="https://i.pravatar.cc/150?u=10" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Past" />
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Gloomy</span>
                    <h5 className="text-white text-sm font-bold group-hover:text-primary transition-colors">Heavy rain thoughts</h5>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 border border-white/10 rounded-xl text-xs font-bold text-mood-text/40 uppercase tracking-widest hover:bg-white/5 transition-all">
                View Full History
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-10">
        <button className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group animate-bounce">
          <span className="material-icons-round text-background-dark text-3xl group-hover:text-primary transition-colors">shuffle</span>
        </button>
      </div>

      <footer className="py-12 border-t border-white/5 text-center mt-12 bg-background-dark">
        <p className="text-mood-text/30 font-serif italic">Made with <span className="text-primary">♥</span> for us.</p>
      </footer>
    </div>
  );
};

export default PostDetail;