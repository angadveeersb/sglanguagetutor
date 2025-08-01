import React, { useState } from 'react'
import { Menu, X, BookOpen, Sparkles } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              StudyMate AI
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
            <a href="#subjects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Subjects</a>
            <a href="#demo" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Try Demo</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Pricing</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
              <a href="#subjects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Subjects</a>
              <a href="#demo" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Try Demo</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Pricing</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
