import React from 'react'
import { BookOpen, Globe, Languages, FileText, PenTool } from 'lucide-react'

const subjects = [
  {
    icon: BookOpen,
    name: 'English',
    description: 'Comprehensive essay writing and comprehension practice',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    levels: ['O-Level', 'N-Level', 'A-Level']
  },
  {
    icon: Globe,
    name: 'General Paper',
    description: 'Critical thinking and argumentative essay skills',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    levels: ['A-Level']
  },
  {
    icon: Languages,
    name: 'Chinese',
    description: '华文作文与理解能力提升',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    levels: ['O-Level', 'N-Level', 'A-Level']
  },
  {
    icon: FileText,
    name: 'Malay',
    description: 'Bahasa Melayu penulisan dan pemahaman',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    levels: ['O-Level', 'N-Level', 'A-Level']
  },
  {
    icon: PenTool,
    name: 'Tamil',
    description: 'தமிழ் எழுத்து மற்றும் புரிதல் திறன்கள்',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    levels: ['O-Level', 'N-Level', 'A-Level']
  }
]

const Subjects = () => {
  return (
    <section id="subjects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Subjects{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Covered
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master all your language subjects with AI tutors specifically trained 
            for Singapore's education system.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className={`${subject.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2`}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${subject.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <subject.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {subject.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {subject.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {subject.levels.map((level, levelIndex) => (
                  <span 
                    key={levelIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 rounded-full text-lg font-semibold">
            Perfect for Secondary & JC Students • O-Level, N-Level, A-Level Preparation
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subjects
