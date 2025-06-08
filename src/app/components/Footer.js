import React from "react";
import Link from "next/link";

//icons
import { FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 pt-12 pb-5 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaShieldAlt className="text-2xl text-blue-500" />
              <span className="text-xl font-bold">PhishGuard AI</span>
            </div>
            <p className="text-gray-400">
              Protecting users from phishing attacks with advanced AI
              technology.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-blue-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-blue-400 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  className="hover:text-blue-400 transition-colors"
                >
                  Stats
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/documentation"
                  className="hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation#api-reference"
                  className="hover:text-blue-400 transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/Benihin-Dev/Research_Website_for_PhishGuradAI.git"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://researchwebsiteforphishguradai.vercel.app/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t font-thin border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PhishGuard AI. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
