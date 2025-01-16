import React from "react";

export default function StatsCard({ title, value, description }) {
  return (
    <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
          <div className="text-3xl font-bold text-blue-500 my-1">{value}</div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
