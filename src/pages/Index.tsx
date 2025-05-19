
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import FlashSale from '../components/FlashSale';
import CategorySection from '../components/CategorySection';
import BrandSection from '../components/BrandSection';
import BlogSection from '../components/BlogSection';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroBanner />
        <CategorySection />
        <ProductGrid 
          title="Featured Products" 
          subtitle="Discover our top-rated products and best sellers"
        />
        <FlashSale />
        <BrandSection />
        <BlogSection />
        <ReviewSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
