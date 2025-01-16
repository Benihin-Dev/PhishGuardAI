"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import URLChecker from "../components/URLChecker";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    setTimeout(() => {
      const testResult = {
        1: {
          type: "safe",
          message: "This website appears to be safe",
          score: 98,
          details: {
            ssl: true,
            age: "5 years",
            reputation: "Excellent",
            lastScanned: new Date().toLocaleDateString(),
          },
        },
        2: {
          type: "phishing",
          message:
            "Warning: This website has been identified as a potential phishing threat",
          score: 12,
          details: {
            threats: [
              "Suspicious URL pattern",
              "Recently registered domain",
              "Poor SSL configuration",
            ],
            riskLevel: "High",
            reportCount: 15,
            lastDetected: new Date().toLocaleDateString(),
          },
        },
        3: {
          type: "unknown",
          message: "Unable to determine the safety status of this website",
          score: 50,
          details: {
            reason: "Limited data available",
            suggestions: [
              "Manual verification needed",
              "Additional scanning recommended",
            ],
          },
        },
        4: {
          type: "invalid",
          message: "Invalid URL format. Please enter a valid website URL",
          details: {
            error: "URL validation failed",
            format: "https://example.com",
          },
        },
      }[url] || {
        type: "invalid",
        message: "Invalid URL format. Please enter a valid website URL",
      };

      setResult(testResult);
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header /> {/* Header */}
      <main className="flex-grow">
        <Hero /> {/* Hero Section */}
        <URLChecker
          handleSubmit={handleSubmit}
          url={url}
          setUrl={setUrl}
          isLoading={isLoading}
          result={result}
        />
        {/* URL Checker Section */}
        <StatsSection /> {/* Stats Section */}
        <FeaturesSection /> {/* Features Section */}
        <HowItWorksSection /> {/* How it Works Section */}
        <AboutSection /> {/* About Section */}
      </main>
      <Footer /> {/* Footer */}
    </div>
  );
}
