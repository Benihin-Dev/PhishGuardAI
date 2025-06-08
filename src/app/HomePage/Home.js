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

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <URLChecker
          url={url}
          setUrl={setUrl}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          result={result}
          setResult={setResult}
        />
        <StatsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
