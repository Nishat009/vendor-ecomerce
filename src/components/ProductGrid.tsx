
import React from 'react';
import ProductCard from './ProductCard';

// Mock products data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Smartwatch Pro X3",
    price: 199.99,
    rating: 4.8,
    reviewCount: 84,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    isNew: true,
  },
  {
    id: 3,
    name: "Ultra Slim Laptop Stand",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.2,
    reviewCount: 56,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    isSale: true,
  },
  {
    id: 4,
    name: "Wireless Phone Charger",
    price: 29.99,
    rating: 4.0,
    reviewCount: 42,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  },
  {
    id: 5,
    name: "Premium Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviewCount: 63,
    image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d",
    isSale: true,
  },
  {
    id: 6,
    name: "Ultra HD Action Camera",
    price: 149.99,
    rating: 4.6,
    reviewCount: 38,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 7,
    name: "Digital Drawing Tablet",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.4,
    reviewCount: 29,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764",
    isSale: true,
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    price: 59.99,
    rating: 4.3,
    reviewCount: 47,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    isNew: true,
  },
];

interface ProductGridProps {
  title: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle }) => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
