
import React, { useState } from 'react';
import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-magenta-pink-gradient">
                MAGENSHOP
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-magenta font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-magenta font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-magenta font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-magenta font-medium">Deals</a>
            <a href="#" className="text-gray-700 hover:text-magenta font-medium">Blog</a>
          </nav>

          {/* Search, Cart, Wishlist */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart size={20} className="text-gray-600 hover:text-hotpink" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <ShoppingCart size={20} className="text-gray-600 hover:text-magenta" />
              <span className="absolute -top-1 -right-1 bg-boldred text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="mb-4">
              <SearchBar />
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-magenta py-2 border-b">Home</a>
              <a href="#" className="text-gray-700 hover:text-magenta py-2 border-b">Shop</a>
              <a href="#" className="text-gray-700 hover:text-magenta py-2 border-b">Categories</a>
              <a href="#" className="text-gray-700 hover:text-magenta py-2 border-b">Deals</a>
              <a href="#" className="text-gray-700 hover:text-magenta py-2 border-b">Blog</a>
            </nav>
            <div className="flex space-x-4 mt-4 pb-2">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-magenta">
                <Heart size={18} />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-magenta">
                <ShoppingCart size={18} />
                <span>Cart (3)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
