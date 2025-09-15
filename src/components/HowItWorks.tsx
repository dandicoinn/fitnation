import React, { useState, useEffect } from 'react';
import { UserPlus, Play, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Profile & Set Goals',
    description: 'Set up your profile and define what success looks like for you.',
    details: 'Quick onboarding with personalized goal setting based on your fitness level and preferences.'
  },
  {
    icon: Play,
    title: 'Track Sessions & Workouts',
    description: 'Log activities or follow guided workouts tailored to your goals.',
    details: 'Choose from hundreds of workouts or simply track your own activities with smart logging.'
  },
  {
    icon: Trophy,
    title: 'Join Challenges & Share',
    description: 'Connect with the community, compete in challenges, and celebrate wins.',
    details: 'Join weekly challenges, share achievements, and motivate others in your fitness journey.'
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#000000] mb-4">
            Get Started in
            <span className="text-[#5C1E36]"> 3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From setup to success — we'll guide you every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-20 right-20 h-1 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-[#5C1E36] rounded-full transition-all duration-1000"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>

              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index <= activeStep;
                const isCurrent = index === activeStep;

                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center relative z-10 cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 transform ${
                      isActive 
                        ? 'bg-[#5C1E36] text-white scale-110' 
                        : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300'
                    } ${isCurrent ? 'animate-pulse' : ''}`}>
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div className={`text-center max-w-xs transition-all duration-500 ${
                      isCurrent ? 'transform scale-105' : ''
                    }`}>
                      <h3 className={`font-bold text-lg mb-2 ${
                        isActive ? 'text-[#000000]' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                      
                      {isCurrent && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border-2 border-[#5C1E36] animate-fadeIn">
                          <p className="text-sm text-gray-600">
                            {step.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isCurrent = index === activeStep;

              return (
                <div 
                  key={index}
                  className={`border rounded-xl p-6 transition-all duration-500 ${
                    isCurrent 
                      ? 'border-[#5C1E36] bg-gradient-to-r from-[#5C1E36]/5 to-transparent' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#5C1E36] text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      <Icon size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${
                        isActive ? 'text-[#000000]' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm mb-3 ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                      
                      {isCurrent && (
                        <p className="text-sm text-gray-600 bg-white p-3 rounded-lg">
                          {step.details}
                        </p>
                      )}
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight className="text-[#5C1E36] mt-2" size={20} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-[#5C1E36] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#5C1E36]/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;