import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Smartphone } from 'lucide-react';

const screenshots = [
  {
    title: 'Dashboard',
    description: 'Track your daily progress and see your streak',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Workout Screen',
    description: 'Follow guided workouts with real-time tracking',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Community Feed',
    description: 'Connect with others and share achievements',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Progress Charts',
    description: 'Visualize your fitness journey over time',
    image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Challenges',
    description: 'Join weekly challenges and compete with friends',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Profile & Badges',
    description: 'Earn badges and track your achievements',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const AppPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#000000] to-[#5C1E36]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-white mb-4">
            See FitNation in
            <span className="text-white"> Action</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get a closer look at the app that's transforming fitness journeys worldwide.
          </p>
        </div>

        {/* Screenshot Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Main Screenshot Display */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={screenshots[currentSlide].image}
                      alt={screenshots[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Info */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4 shadow-lg max-w-xs text-center">
                  <h3 className="font-bold text-[#0B2340] mb-1">
                    {screenshots[currentSlide].title}
                  </h3>
                  <p className="text-sm text-[#8A9BB0]">
                    {screenshots[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mb-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Download Buttons */}
        <div className="text-center">
          <p className="text-white/80 mb-6">Download FitNation today and start your journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;