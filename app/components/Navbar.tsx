import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Fresh Cart
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/categories" className="hover:text-green-200">
              Categories
            </Link>
            <Link href="/deals" className="hover:text-green-200">
              Deals
            </Link>
            <Link href="/cart" className="hover:text-green-200">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}