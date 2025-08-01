import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Lim',
    grade: 'Sec 4 Student',
    subject: 'English',
    rating: 5,
    text: 'StudyMate AI helped me improve my essay writing from C to A grade in just 2 months! The feedback is so detailed and helpful.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Marcus Tan',
    grade: 'JC 2 Student',
    subject: 'General Paper',
    rating: 5,
    text: 'The AI tutor understands exactly what GP examiners are looking for. My arguments became much stronger and more structured.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Priya Sharma',
    grade: 'Sec 3 Student',
    subject: 'Tamil',
    rating: 5,
    text: 'Finally found a tutor that helps with Tamil! The comprehension practice really boosted my confidence for O-Levels.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Ahmad Rahman',
    grade: 'Sec 4 Student',
    subject: 'Malay',
    rating: 5,
    text: 'The instant feedback on my Bahasa Melayu essays helped me understand my mistakes immediately. Much better than waiting for teacher feedback.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Li Wei',
    grade: 'JC 1 Student',
    subject: 'Chinese',
    rating: 5,
    text: '中文作文一直是我的弱项，但是AI导师帮助我提高了很多。现在我的作文结构更清晰了。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Emma Wong',
    grade: 'Sec 5 Student',
    subject: 'English',
    rating: 5,
    text: 'The personalized study plan adapted to my learning pace perfectly. I went from failing to getting B+ in my prelims!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Students{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Singapore students who have improved their grades 
            with StudyMate AI's personalized tutoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group hover:-translate-y-2"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-purple-200 group-hover:text-purple-300 transition-colors" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.grade}</p>
                  <p className="text-sm text-purple-600 font-medium">{testimonial.subject}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white text-gray-700 px-8 py-4 rounded-full shadow-lg border border-gray-200">
            <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
            <span className="font-bold text-2xl text-yellow-600 mr-2">4.9/5</span>
            <span>average rating from 10,000+ students</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
