import React from 'react';
import {  Mail, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#fa93b2] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
  
             <img
               src="src/assets/logo.png" // <-- update this path to your logo file
               alt="FitNation Logo"
               className="h-40" // adjust height as needed
             />
           </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Making fitness social, simple, and motivating. Join thousands who are crushing their goals together.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Teams</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-[#5C1E36] pt-12 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-bold text-lg mb-4">Get Training Tips & App Updates</h3>
            <p className="text-white/80 mb-6">
              Join our newsletter for the latest fitness tips and FitNation news.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#5C1E36] text-white border border-[#5C1E36] focus:border-white outline-none"
              />
              <button className="bg-white text-[#000000] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Mail size={20} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5C1E36] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>&copy; 2025 FitNation. All rights reserved.</p>
          <p>this is an Demo created by Dandi.co.in</p>
          <p>Dandi 
            | Logo Website & Branding Graphics
Discover. Approach. Launch.
Branding & Websites for Startups 🚀
Helping small businesses look BIG online ✨
📩 DM to start your brand journey "https://www.instagram.com/dandi.co.in/"</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;