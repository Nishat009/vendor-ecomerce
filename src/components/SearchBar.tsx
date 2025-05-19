
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement actual search functionality here
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xs">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-magenta/50 focus:border-magenta"
        />
        <button
          type="submit"
          className="absolute left-0 top-0 h-full px-3 text-gray-400 flex items-center"
        >
          <Search size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
