import React from "react";
import { motion } from "framer-motion";

export default function StatsCard({ card }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.7, once: true }}
      className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-200">{card.title}</h3>
          <div className="text-3xl font-bold text-blue-500 my-1">
            {card.value}
          </div>
          <p className="text-gray-400 text-sm">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
