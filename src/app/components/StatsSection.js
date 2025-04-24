import React from "react";
import StatsCard from "./StatsCard"; 

export default function StatsSection() {
  const statsCard = [
    {
      title: "Websites Analyzed",
      value: "1M+",
      description: "Websites scanned and analyzed for threats",
    },
    {
      title: "Users Protected",
      value: "500K+",
      description: "Active users protected from phishing",
    },
    {
      title: "Threats Detected",
      value: "50K+",
      description: "Phishing attempts prevented",
    },
    {
      title: "AI Accuracy",
      value: "99.9%",
      description: "Detection accuracy rate",
    },
  ];
  return (
    <section
      id="stats"
      className="py-16 px-4 bg-gradient-to-b from-transparent to-gray-900/50"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCard.map((card, index) => (
            <StatsCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
