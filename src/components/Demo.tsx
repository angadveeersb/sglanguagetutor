import React, { useState } from 'react'
import { Send, Camera, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

const Demo = () => {
  const [activeTab, setActiveTab] = useState('essay')
  const [message, setMessage] = useState('')
  const [showResponse, setShowResponse] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      setShowResponse(true)
      setMessage('')
    }
  }

  const essayFeedback = {
    score: 'B+',
    strengths: ['Clear thesis statement', 'Good use of examples', 'Logical flow'],
    improvements: ['Stronger conclusion needed', 'More varied vocabulary', 'Better transitions between paragraphs'],
    suggestion: 'Try using more sophisticated linking words like "Furthermore" and "Nevertheless" to improve coherence.'
  }

  const comprehensionQuestion = {
    passage: "The rapid advancement of artificial intelligence has transformed various industries...",
    question: "What does the author suggest about the future impact of AI on education?",
    options: [
      "AI will completely replace teachers",
      "AI will enhance personalized learning experiences",
      "AI will make education more expensive",
      "AI will reduce the quality of education"
    ],
    correct: 1
  }

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Try StudyMate AI{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Now
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of personalized AI tutoring. Choose between essay coaching 
            or comprehension practice to see how we can help you improve.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('essay')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'essay'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Essay Coach
              </button>
              <button
                onClick={() => setActiveTab('comprehension')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'comprehension'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Comprehension Practice
              </button>
            </div>
          </div>

          {activeTab === 'essay' && (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Camera className="h-6 w-6 mr-2 text-purple-600" />
                    Upload Your Essay
                  </h3>
                  <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-purple-200 hover:border-purple-400 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Take a photo or upload your essay</p>
                      <p className="text-sm text-gray-500">Supports JPG, PNG, PDF formats</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Analyze Essay
                  </button>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Instant Feedback
                  </h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-gray-700">Overall Score</span>
                      <span className="text-3xl font-bold text-green-600">{essayFeedback.score}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Strengths
                      </h4>
                      <ul className="space-y-1">
                        {essayFeedback.strengths.map((strength, index) => (
                          <li key={index} className="text-sm text-gray-600">• {strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-orange-600 mb-2">Areas for Improvement</h4>
                      <ul className="space-y-1">
                        {essayFeedback.improvements.map((improvement, index) => (
                          <li key={index} className="text-sm text-gray-600">• {improvement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-blue-700 mb-2">AI Suggestion</h4>
                      <p className="text-sm text-blue-600">{essayFeedback.suggestion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'comprehension' && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-green-600" />
                Interactive Comprehension
              </h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Reading Passage</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {comprehensionQuestion.passage}
                </p>
                <p className="text-gray-600 text-sm">
                  [This is a sample passage. The full version would be longer and more detailed.]
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Question: {comprehensionQuestion.question}
                </h4>
                <div className="space-y-3">
                  {comprehensionQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        index === comprehensionQuestion.correct
                          ? 'border-green-400 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <p className="text-green-700 font-medium">
                    ✓ Correct! The passage emphasizes AI's role in personalizing education rather than replacing teachers.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center mx-auto">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
