import { useState } from 'react'

import './App.css'

import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import PostDetail from './Pages/PostDetail'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
     <div className='min-h-screen bg-white dark:bg-[#0a0a0c] flex flex-col'>
      
      
      <Header />
      
    
      <main className='flex-grow'>
      
        <Outlet />
      </main>
      
      
      <Footer />
    </div>
    </>
  )
}

export default App
