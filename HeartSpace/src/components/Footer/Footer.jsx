import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0a0407] border-t border-white/5 py-12 px-6">
        <div className=" max-w-7xl mx-auto flex  md:row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-2xl">favorite</span>
            <span className="font-bold text-xl text-white">HeartSpace</span>
          </div>
          <div className=" text-center ">
            <p className="text-slate-400  text-sm">Made with infinite <span className="text-primary">❤️</span> for you.</p>
            <p className="text-slate-600 text-[10px] mt-1 uppercase tracking-widest">© 2026 Personal love  Blog. All feelings reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
