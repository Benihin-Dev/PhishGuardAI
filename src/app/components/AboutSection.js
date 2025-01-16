import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">About PhishGuard AI</h2>
        <p className="text-gray-400 text-lg mb-8">
          PhishGuard AI is a cutting-edge cybersecurity tool that uses advanced
          artificial intelligence and machine learning algorithms to protect
          users from phishing attacks. Our system continuously learns and adapts
          to new threats, providing real-time protection against malicious
          websites.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
