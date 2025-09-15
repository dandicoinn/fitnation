import React, { useState, useRef } from 'react';
import { Activity, Users, TrendingUp, Play, Heart, Target } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Track & Log Everything',
    description: 'Steps, workouts, heart rate — all in one place.',
    benefit: 'Never miss a beat of your fitness journey.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Play,
    title: 'Guided Workouts',
    description: 'Quick-start routines for all fitness levels.',
    benefit: 'From beginner to beast mode in minutes.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Users,
    title: 'Community & Challenges',
    description: 'Join, create, and compete with others.',
    benefit: 'Make fitness social and stay motivated.',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: TrendingUp,
    title: 'Progress & Insights',
    description: 'Weekly charts, streaks, and achievement badges.',
    benefit: 'See how far you\'ve come and where you\'re going.',
    image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#000000] mb-4">
            Everything You Need to
            <span className="text-[#5C1E36]"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make your fitness journey enjoyable, social, and results-driven.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`transform transition-all duration-500 ${isHovered ? 'translate-x-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-[#5C1E36] text-white transform transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="font-['Montserrat'] font-extrabold text-3xl text-[#000000]">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <p className="text-[#5C1E36] font-bold text-lg mb-6">
                      {feature.benefit}
                    </p>

                    <button className="bg-[#000000] text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-80 object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#5C1E36]/20 to-transparent"></div>
                    
                    {/* Floating Stats */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#000000]">
                        <Heart className="text-[#5C1E36]" size={16} />
                        <span>+24% improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;