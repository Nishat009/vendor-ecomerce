
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-magenta-dark to-hotpink-dark text-white py-16 md:py-24">
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
              <div className="w-[320px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl mb-20 ml-40 absolute top-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fashion model with products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[320px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ">
                <img 
                  src="https://images.unsplash.com/photo-1731763104706-a70d249efb71?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
