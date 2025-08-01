import React from 'react'
import { ArrowRight, Star, Users, BookOpen, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Singapore Students
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Personal AI Tutor for{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                English & Mother Tongue
              </span>{' '}
              Mastery
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hyper-personalised AI tutors trained on Singapore's national curriculum, 
              guiding students step-by-step in Comprehension and Essay Writing for 
              <span className="font-semibold text-purple-600"> O, N & A Level success</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-semibold">4.9/5</span> rating
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-1" />
                <span className="font-semibold">10,000+</span> students
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-500 mr-1" />
                <span className="font-semibold">5</span> subjects
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
                alt="Students studying together"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Essay Score</span>
                  <span className="text-2xl font-bold text-green-600">A+</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-5/6"></div>
                </div>
                <p className="text-sm text-gray-600">
                  "Great improvement in structure and content analysis!"
                </p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
              MOE Approved!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
