import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fresh Cart - Online Grocery',
  description: 'Your one-stop shop for fresh groceries',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold">
                  Fresh Cart
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}