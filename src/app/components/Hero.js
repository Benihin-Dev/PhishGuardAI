import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className=" pt-20 sm:pt-40 pb-0 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, duration: 0.2 }}
        className="container mx-auto text-center relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold mt-10 mb-6">
          Protect Yourself from
          <span className="text-blue-500"> Phishing Attacks</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Our advanced AI-powered system helps you identify and avoid phishing
          websites with real-time analysis and machine learning technology.
        </p>
      </motion.div>
    </section>
  );
}
