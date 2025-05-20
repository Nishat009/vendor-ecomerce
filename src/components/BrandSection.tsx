
import React from 'react';

interface Brand {
  id: number;
  name: string;
  logo: string;
}

// Sample brand data
const brands: Brand[] = [
  {
    id: 1,
    name: "TechLife",
    logo: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
  },
  {
    id: 2,
    name: "AudioPro",
    logo: "https://images.unsplash.com/photo-1618233981844-b8dc84829894?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "UrbanGear",
    logo: "https://images.unsplash.com/photo-1624762335025-2a879b8de9a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "SmartTech",
    logo: "https://images.unsplash.com/photo-1646766360897-34c92cb6545a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "FutureHub",
    logo: "https://images.unsplash.com/photo-1625014618427-fbc980b974f5"
  }
];

const BrandSection: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover products from top global brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map(brand => (
            <div key={brand.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow h-24 md:h-32">
              <div className="w-full h-full relative">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="absolute inset-0 w-full h-full object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
