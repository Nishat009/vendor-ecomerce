
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Tech Gadgets for 2025",
    excerpt: "Discover the latest innovations that are set to transform your digital life this year.",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Tech"
  },
  {
    id: 2,
    title: "How to Choose the Perfect Headphones",
    excerpt: "A comprehensive guide to finding headphones that match your lifestyle and audio preferences.",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b",
    category: "Buying Guide"
  },
  {
    id: 3,
    title: "The Evolution of Smart Home Technology",
    excerpt: "From basic automation to AI-powered assistants: how smart homes have evolved over the years.",
    date: "May 5, 2025",
    image: "https://images.unsplash.com/photo-1558403194-611308249627",
    category: "Smart Home"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our tech insights and guides</p>
          </div>
          <a href="#" className="text-magenta hover:text-magenta-dark font-medium flex items-center mt-4 md:mt-0">
            View All Articles <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <a href="#" className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center text-sm mb-3">
                    <span className="text-magenta font-medium">{post.category}</span>
                    <span className="mx-2">•</span>
                    <time className="text-gray-500">{post.date}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 hover:text-magenta transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-magenta font-medium">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
