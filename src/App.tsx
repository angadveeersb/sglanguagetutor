import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Subjects from './components/Subjects'
import Demo from './components/Demo'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <Features />
      <Subjects />
      <Demo />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
