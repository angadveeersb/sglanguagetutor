import React from 'react'
import { Check, Star, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Free Trial',
    price: 'Free',
    period: '7 days',
    description: 'Perfect for trying out StudyMate AI',
    features: [
      '5 essay reviews',
      '10 comprehension questions',
      'Basic feedback',
      'English only',
      'Email support'
    ],
    icon: Star,
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-50',
    popular: false
  },
  {
    name: 'Student',
    price: '$29',
    period: 'per month',
    description: 'Ideal for individual students',
    features: [
      'Unlimited essay reviews',
      'Unlimited comprehension practice',
      'Detailed AI feedback',
      'All 5 subjects',
      'Personalized study plans',
      'Progress tracking',
      'Priority support'
    ],
    icon: Zap,
    color: 'from-purple-500 to-blue-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-blue-50',
    popular: true
  },
  {
    name: 'Family',
    price: '$79',
    period: 'per month',
    description: 'Best value for families with multiple children',
    features: [
      'Everything in Student plan',
      'Up to 4 student accounts',
      'Family progress dashboard',
      'Parent insights & reports',
      'Dedicated family support',
      'Bulk essay uploads',
      'Advanced analytics'
    ],
    icon: Crown,
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    popular: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your learning journey. 
            All plans include access to our AI tutors trained on Singapore's curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`${plan.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>
                
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                  : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
              }`}>
                {plan.name === 'Free Trial' ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
