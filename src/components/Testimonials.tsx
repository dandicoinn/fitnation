import React from 'react';
import { Star, Trophy, Users, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'FitNation transformed my fitness routine. The community challenges keep me motivated every single day!',
    achievement: 'Lost 25 lbs in 4 months'
  },
  {
    name: 'Marcus Chen',
    location: 'New York, NY',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The guided workouts are perfect for my busy schedule. 15 minutes a day and I\'ve never felt stronger.',
    achievement: '180-day streak'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Austin, TX',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'I love how social and supportive the community is. We celebrate each other\'s wins like family!',
    achievement: 'Challenge champion 3x'
  }
];

const stats = [
  { icon: Users, value: '25K+', label: 'Active Users' },
  { icon: Trophy, value: '10K+', label: 'Challenges Completed' },
  { icon: TrendingUp, value: '92%', label: 'Users See Results' },
  { icon: Star, value: '4.9', label: 'App Store Rating' }
];

const Testimonials = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Community Stats */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#000000] mb-4">
            Join the
            <span className="text-[#5C1E36]"> FitNation Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Thousands of people are already crushing their goals together.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5C1E36]/10 rounded-full mb-4">
                    <Icon className="text-[#5C1E36]" size={24} />
                  </div>
                  <div className="font-['Montserrat'] font-extrabold text-3xl text-[#000000] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#5C1E36] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#000000]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-4 inline-block bg-[#5C1E36]/10 text-[#5C1E36] px-3 py-1 rounded-full text-sm font-bold">
                {testimonial.achievement}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge Leaderboard Preview */}
        <div className="bg-gradient-to-r from-[#000000] to-[#5C1E36] rounded-2xl p-8 text-center">
          <h3 className="font-['Montserrat'] font-extrabold text-2xl text-white mb-4">
            This Week's Challenge: "10K Steps Daily"
          </h3>
          <p className="text-white/80 mb-6">
            Join 2,847 people taking on this week's fitness challenge
          </p>
          
          {/* Mock Leaderboard */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-6">
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">🥇</span>
                  <span>Alex Chen</span>
                </div>
                <span className="font-bold">15,847 steps</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <div className="flex items-center gap-3">
                  <span>🥈</span>
                  <span>Maria Garcia</span>
                </div>
                <span>14,203 steps</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <div className="flex items-center gap-3">
                  <span>🥉</span>
                  <span>You</span>
                </div>
                <span>12,956 steps</span>
              </div>
            </div>
          </div>

          <button className="bg-white text-[#5C1E36] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            Join This Challenge
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;