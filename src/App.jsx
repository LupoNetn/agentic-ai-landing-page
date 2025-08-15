import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
   <>
   <div className="relative">
     <Navbar />
    <div className='container mx-auto px-8'>
     <header id='home'>
       <Header />
     </header>
    </div>
   </div>
    </>
  )
}

export default App
