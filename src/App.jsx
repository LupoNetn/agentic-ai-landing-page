import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'

const App = () => {
  return (
   <>
   <div className="relative">
     <Navbar />
    <div className='container mx-auto px-8'>
     <header id='home'>
       <Header />
     </header>

     <main>
      <section id='services'>
        <Services />
      </section>
     </main>
    </div>
   </div>
    </>
  )
}

export default App
