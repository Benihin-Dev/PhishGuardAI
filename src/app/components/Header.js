import React from "react";
import { FaShieldAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-black/30 sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaShieldAlt className="text-2xl text-blue-500" />
          <span className="text-xl font-bold">PhishGuard AI</span>
        </div>
        <div className=" hidden sm:flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#features" className="hover:text-blue-400 transition-colors">
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-blue-400 transition-colors"
          >
            How it Works
          </a>
          <a href="#stats" className="hover:text-blue-400 transition-colors">
            Stats
          </a>
        </div>
      </nav>
    </header>
  );
}
