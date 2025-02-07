// pages/HomePage.js
import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer"; // Import the Footer component

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title and Description */}
        <h1 className="text-center text-5xl sm:text-5xl lg:text-6xl font-bold text-gray-900 bg-emerald-300 inline-block py-2 px-6 rounded-lg mb-6 transition-all duration-300 hover:bg-emerald-400 max-w-full mx-auto">
          Find the Perfect Look for You
        </h1>
        <p className="text-left text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 font-medium max-w-full mx-auto">
          Discover a world of stylish, eco-friendly clothing that fits your lifestyle
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {/* Featured Products */}
        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
