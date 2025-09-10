import React from 'react';
import { Train } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Train className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-xl font-bold text-gray-900">Rail Connect</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/account/signin"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Sign In
            </a>
            <a
              href="/account/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;