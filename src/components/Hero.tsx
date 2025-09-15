import React, { useState, useEffect } from 'react';
import { Play, Star, Users, Trophy } from 'lucide-react';
import Navigation from './Navigation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#5C1E36] via-[#000000] to-[#5C1E36] overflow-hidden">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6">
              Track.
              <br />
              <span className="text-white">Compete.</span>
              <br />
              Improve.
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              A fitness app that makes progress social, simple, and motivating.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-white text-[#5C1E36] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button 
                onClick={scrollToFeatures}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#5C1E36] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                See Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-white" />
                <span className="font-semibold">25K+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy size={20} className="text-white" />
                <span className="font-semibold">10K challenges joined</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-white fill-current" />
                ))}
                <span className="ml-2 font-semibold">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className={`relative transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-[#6e3c4f] to-[#000000] rounded-[2.5rem] overflow-hidden relative">
                {/* Phone UI Content */}
                <div className="p-6 text-white">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-8 text-sm">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Today's Progress</h2>
                    <p className="text-white/80">Crush today. Log it.</p>
                  </div>
                  <div className="flex items-center flex-col gap-6">
  
                   <img
                     src="src/assets/logo.png" // <-- update this path to your logo file
                     alt="FitNation Logo"
                     className="h-12" // adjust height as needed
                   />
                 </div>

                  {/* Progress Ring */}
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#000000" strokeWidth="8" fill="none" />
                      <circle 
                        cx="64" cy="64" r="56" 
                        stroke="#FFFFFF" 
                        strokeWidth="8" 
                        fill="none"
                        strokeDasharray={351}
                        strokeDashoffset={100}
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">72%</div>
                        <div className="text-xs text-white/80">Daily Goal</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-[#000000] rounded-lg">
                      <span>Steps</span>
                      <span className="text-white font-bold">8,547</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#000000] rounded-lg">
                      <span>Calories</span>
                      <span className="text-white font-bold">487</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#000000] rounded-lg">
                      <span>Minutes</span>
                      <span className="text-white font-bold">45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white text-[#5C1E36] p-3 rounded-xl font-bold animate-bounce">
              Streak: 7 days! 🔥
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;