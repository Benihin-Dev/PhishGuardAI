import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-10%", once: true }}
      className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm"
    >
      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 w-fit">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-lg font-semibold text-gray-200 mt-4 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
