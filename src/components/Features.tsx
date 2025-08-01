import React from 'react'
import { Brain, Camera, Target, BookOpen, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Curriculum-Specific AI',
    description: 'Our tutors are trained on real past papers, notes, and MOE-approved rubrics for O, N, and A levels. No fluff — just what\'s tested.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Camera,
    title: 'Smart Essay Coach',
    description: 'Snap a photo of your essay — AI marks it instantly. Get detailed feedback on structure, content, and language.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BookOpen,
    title: 'Interactive Comprehension Practice',
    description: 'Practice with real-world articles, short stories, and news. AI auto-generates quizzes or full comprehension papers.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Target,
    title: 'Learns How You Learn',
    description: 'Remembers your strengths, weaknesses, and learning style. Adjusts difficulty and pacing accordingly.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Personalized Study Plans',
    description: 'Custom study plans for each student based on their current level and target goals.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate responses and corrections to accelerate your learning process.',
    color: 'from-indigo-500 to-indigo-600'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why StudyMate AI{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For centuries, the most effective learning came from personal tutoring. 
            We're scaling that one-to-one experience using AI — not to replace teachers, 
            but to give every student a coach who's always available, always focused on them.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
