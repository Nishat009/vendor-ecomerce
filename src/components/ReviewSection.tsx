
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  productName: string;
}

// Sample review data
const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    rating: 5,
    text: "The quality of this product exceeded my expectations! The sound is crystal clear and the battery lasts all day. Definitely worth the investment.",
    date: "May 12, 2025",
    productName: "Premium Wireless Headphones"
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 4,
    text: "I've been using this smartwatch for a month now and I'm impressed with the features. The only downside is the battery life could be better.",
    date: "May 8, 2025",
    productName: "Smartwatch Pro X3"
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    rating: 5,
    text: "Absolutely love this laptop stand! It's sturdy, adjustable, and looks great on my desk. Has helped tremendously with my posture while working.",
    date: "May 5, 2025",
    productName: "Ultra Slim Laptop Stand"
  },
  {
    id: 4,
    name: "Jessica Brown",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    rating: 4,
    text: "The earbuds are comfortable and the noise cancellation is impressive. Great value for the price point!",
    date: "April 29, 2025",
    productName: "Noise Cancelling Earbuds"
  },
];

const ReviewSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-magenta-light to-hotpink-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Customers Say</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from our satisfied customers about their shopping experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Reviews Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map(review => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold">{review.name}</h4>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-4">
                      "{review.text}"
                    </blockquote>
                    
                    <div className="text-sm text-gray-500">
                      Purchased: <span className="text-magenta font-medium">{review.productName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  activeIndex === index ? 'bg-magenta' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
