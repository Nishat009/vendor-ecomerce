
import React from 'react';

// Category interface
interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

// Sample categories data
const categories: Category[] = [
  {
    id: 1,
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    count: 42
  },
  {
    id: 2,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    count: 38
  },
  {
    id: 3,
    name: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    count: 27
  },
  {
    id: 4,
    name: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    count: 23
  },
  {
    id: 5,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    count: 56
  },
  {
    id: 6,
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4",
    count: 19
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of products across popular categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map(category => (
            <div key={category.id} className="group relative card-hover">
              <div className="h-36 md:h-44 rounded-xl overflow-hidden bg-gray-100">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl flex flex-col justify-end p-4 text-white">
                <h3 className="font-medium text-lg">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} Products</p>
              </div>
              
              <a href="#" className="absolute inset-0" aria-label={`Browse ${category.name}`}></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
