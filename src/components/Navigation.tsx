import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#F8F8F8FF]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
  
  <img
    src="src/assets/logo.png" // <-- update this path to your logo file
    alt="FitNation Logo"
    className="h-12" // adjust height as needed
  />
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="#5C1E36 hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="#5C1E36 hover:text-white transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="#5C1E36 hover:text-white transition-colors font-medium">
              Pricing
            </a>
            <a href="#community" className="#5C1E36 hover:text-white transition-colors font-medium">
              Community
            </a>
            <button className="bg-black text-[#5C1E36] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#5C1E36] border-t border-[#000000] py-4">
            <div className="container mx-auto px-6 space-y-4">
              <a href="#features" className="block text-white/80 hover:text-white transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="block text-white/80 hover:text-white transition-colors font-medium">
                How It Works
              </a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors font-medium">
                Pricing
              </a>
              <a href="#community" className="block text-white/80 hover:text-white transition-colors font-medium">
                Community
              </a>
              <button className="w-full bg-white text-[#5C1E36] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;