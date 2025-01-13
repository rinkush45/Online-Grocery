import Image from 'next/image';
import Link from 'next/link';
import dairy from '../app/Images/Dairy.jpg'

export default function Home() {
  const categories = [
    { name: 'Fruits & Vegetables', image: dairy },
    { name: 'Dairy & Eggs', image: '/images/dairy.jpg' },
    { name: 'Meat & Fish', image: '/images/meat.jpg' },
    { name: 'Bakery', image: '/images/bakery.jpg' },
  ];

  const featuredProducts = [
    { name: 'Fresh Organic Bananas', price: 2.99, image: '/images/bananas.jpg' },
    { name: 'Farm Fresh Eggs', price: 3.99, image: '/images/eggs.jpg' },
    { name: 'Whole Grain Bread', price: 4.49, image: '/images/bread.jpg' },
    { name: 'Organic Milk', price: 3.49, image: '/images/milk.jpg' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Fresh Groceries Delivered to Your Door</h1>
            <p className="text-xl mb-8">Get fresh produce and everyday essentials delivered in minutes</p>
            <Link 
              href="/categories"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gray-200" />
                {/* Add actual images later */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gray-200" />
                {/* Add actual images later */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-green-600 font-bold mt-2">${product.price}</p>
                <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your groceries delivered within hours</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
              <p className="text-gray-600">100% fresh and high-quality products</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive prices on all products</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}