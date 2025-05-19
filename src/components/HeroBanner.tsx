
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-magenta-dark to-hotpink-dark text-white py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-white opacity-10 transform -skew-x-12"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-boldred rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-magenta rounded-full opacity-20 blur-2xl translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Summer Collection
              <span className="block mt-2 text-boldred-light">2025</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              Discover our hottest new styles with bold colors and trendy designs. Limited time offers available now!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-magenta-dark hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center btn-hover">
                Shop Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="bg-transparent hover:bg-white/10 font-semibold py-3 px-8 rounded-full border border-white transition duration-300 btn-hover">
                View Lookbook
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 animate-scale-in">
            {/* Hero Image */}
            <div className="relative">
              <div className="w-[320px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Fashion model with products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-40 md:w-48">
                <p className="text-magenta font-bold">24% OFF</p>
                <p className="text-gray-800 text-sm">First order discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
