
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface CountdownProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex gap-2 md:gap-4 text-lg md:text-xl">
      <div className="bg-white rounded-lg p-2 md:p-3 text-center w-16 md:w-20">
        <div className="text-xl md:text-3xl font-bold text-magenta">{hours.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-500">Hours</div>
      </div>
      <div className="bg-white rounded-lg p-2 md:p-3 text-center w-16 md:w-20">
        <div className="text-xl md:text-3xl font-bold text-magenta">{minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-500">Minutes</div>
      </div>
      <div className="bg-white rounded-lg p-2 md:p-3 text-center w-16 md:w-20">
        <div className="text-xl md:text-3xl font-bold text-magenta">{seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-500">Seconds</div>
      </div>
    </div>
  );
};

const FlashSale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 10,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-magenta to-boldred text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <span className="inline-block bg-white text-magenta text-sm font-semibold px-3 py-1 rounded-full">
                Limited Time Only
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flash Sale</h2>
            <p className="text-lg opacity-90 mb-6">
              Grab these amazing deals before they're gone! Up to 70% off on selected items.
            </p>
            
            <div className="mb-8">
              <Countdown 
                hours={timeLeft.hours} 
                minutes={timeLeft.minutes} 
                seconds={timeLeft.seconds} 
              />
            </div>
            
            <button className="bg-white text-magenta hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center btn-hover">
              Shop Flash Sale <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {/* Sale Items */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281503f" 
                  alt="Sunglasses" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-medium">Designer Sunglasses</h4>
              <div className="flex items-center mt-1">
                <span className="font-bold">$49.99</span>
                <span className="ml-2 text-sm line-through opacity-70">$129.99</span>
                <span className="ml-auto bg-white text-boldred text-xs px-2 py-1 rounded font-bold">
                  -60%
                </span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1543512214-318c7553f230" 
                  alt="Smart Watch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-medium">Smart Watch X2</h4>
              <div className="flex items-center mt-1">
                <span className="font-bold">$89.99</span>
                <span className="ml-2 text-sm line-through opacity-70">$199.99</span>
                <span className="ml-auto bg-white text-boldred text-xs px-2 py-1 rounded font-bold">
                  -55%
                </span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46" 
                  alt="Wireless Earbuds" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-medium">Wireless Earbuds</h4>
              <div className="flex items-center mt-1">
                <span className="font-bold">$59.99</span>
                <span className="ml-2 text-sm line-through opacity-70">$149.99</span>
                <span className="ml-auto bg-white text-boldred text-xs px-2 py-1 rounded font-bold">
                  -60%
                </span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12" 
                  alt="Smart Speaker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-medium">Smart Speaker</h4>
              <div className="flex items-center mt-1">
                <span className="font-bold">$79.99</span>
                <span className="ml-2 text-sm line-through opacity-70">$169.99</span>
                <span className="ml-auto bg-white text-boldred text-xs px-2 py-1 rounded font-bold">
                  -53%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
