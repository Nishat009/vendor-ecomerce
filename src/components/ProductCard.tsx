
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  isNew = false,
  isSale = false,
}) => {
  // Calculate discount percentage if there's an original price
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 card-hover">
      {/* Product Image with Badges */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-magenta text-white text-xs px-2 py-1 rounded-md">NEW</span>
          )}
          {isSale && (
            <span className="bg-boldred text-white text-xs px-2 py-1 rounded-md">
              {discountPercentage}% OFF
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-magenta-light hover:text-white transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-medium text-gray-800 hover:text-magenta truncate">{name}</h3>
        
        {/* Price */}
        <div className="flex items-center mt-1">
          <span className="font-bold text-lg text-magenta-dark">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Ratings */}
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-500">({reviewCount})</span>
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-gray-100 hover:bg-magenta hover:text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
          <ShoppingCart size={18} className="mr-2" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
