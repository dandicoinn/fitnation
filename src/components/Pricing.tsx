import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Basic activity tracking',
      'Community access',
      'Weekly challenges',
      'Progress dashboard',
      'Basic workout library'
    ],
    buttonText: 'Create Account — It\'s free',
    buttonStyle: 'border-2 border-[#00E676] text-[#00E676] hover:bg-[#00E676] hover:text-white',
    popular: false
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: 'monthly',
    description: 'For serious fitness enthusiasts',
    features: [
      'Everything in Free',
      'Unlimited guided workouts',
      'Personal training plans',
      'Advanced analytics',
      'Priority community features',
      'Custom challenge creation',
      'Apple Health & Google Fit sync',
      'No ads'
    ],
    buttonText: 'Start 7-day free trial',
    buttonStyle: 'bg-[#00E676] text-[#0B2340] hover:bg-[#00C853]',
    popular: true,
    savings: 'Save 20% with yearly'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#000000] mb-4">
            Choose Your
            <span className="text-[#5C1E36]"> Fitness Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready to unlock your full potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'border-2 border-[#5C1E36]' : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#5C1E36] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-['Montserrat'] font-extrabold text-2xl text-[#000000] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-[#000000]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
                {plan.savings && (
                  <div className="mt-2">
                    <span className="bg-[#5C1E36]/10 text-[#5C1E36] px-3 py-1 rounded-full text-sm font-bold">
                      {plan.savings}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-[#5C1E36] flex-shrink-0" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional CTAs */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Teams */}
          <div className="bg-[#000000] text-white p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-white" size={24} />
              <h3 className="font-bold text-xl">For Teams</h3>
            </div>
            <p className="text-white/80 mb-6">
              Boost workplace wellness with group challenges, team leaderboards, and corporate analytics.
            </p>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#000000] transition-colors">
              Talk to Sales
            </button>
          </div>

          {/* Integrations */}
          <div className="bg-white border-2 border-[#5C1E36] p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-[#5C1E36] rounded"></div>
              <h3 className="font-bold text-xl text-[#000000]">Integrations</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Seamlessly connect with Apple Health, Google Fit, Fitbit, and other wearable devices.
            </p>
            <button className="bg-[#5C1E36] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5C1E36]/90 transition-colors">
              View All Integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;