import React from "react";
import FeatureCard from "./FeatureCard";
//icons
import {
  FaShieldAlt,
  FaChartBar,
  FaLock,
  FaRobot,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={FaRobot}
            title="AI-Powered Analysis"
            description="Advanced machine learning algorithms analyze multiple factors to detect phishing attempts."
          />
          <FeatureCard
            icon={FaBrain}
            title="Real-time Detection"
            description="Instant website analysis with real-time threat detection and prevention."
          />
          <FeatureCard
            icon={FaDatabase}
            title="Comprehensive Database"
            description="Access to a vast database of known phishing sites and patterns."
          />
          <FeatureCard
            icon={FaLock}
            title="SSL Verification"
            description="Advanced SSL certificate validation and security checks."
          />
          <FeatureCard
            icon={FaChartBar}
            title="Detailed Reports"
            description="Get comprehensive reports with threat details and recommendations."
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Continuous Protection"
            description="24/7 monitoring and updates to protect against new threats."
          />
        </div>
      </div>
    </section>
  );
}
