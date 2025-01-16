import React, { useEffect, useState } from "react";
import {
  FaTimesCircle,
  FaCheckCircle,
  FaQuestionCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function ResultComponent({ result }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = result.score || 0;
    if (start === end) return;

    let incrementTime = (2 / end) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [result.score]);

  const resultStyles = {
    safe: {
      bg: "bg-[#000]",
      border: "border-green-500",
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Safe Website",
      textColor: "text-green-500",
      gradient: "from-green-500/20 to-green-900/20",
    },
    phishing: {
      bg: "bg-[#000]",
      border: "border-red-500",
      icon: <FaTimesCircle className="text-5xl text-red-500" />,
      title: "Phishing Detected",
      textColor: "text-red-500",
      gradient: "from-red-500/20 to-red-900/20",
    },
    unknown: {
      bg: "bg-[#000]",
      border: "border-yellow-500",
      icon: <FaQuestionCircle className="text-5xl text-yellow-500" />,
      title: "Unable to Determine",
      textColor: "text-yellow-500",
      gradient: "from-yellow-500/20 to-yellow-900/20",
    },
    invalid: {
      bg: "bg-[#000]",
      border: "border-gray-500",
      icon: <FaExclamationTriangle className="text-5xl text-gray-500" />,
      title: "Invalid URL",
      textColor: "text-gray-500",
      gradient: "from-gray-500/20 to-gray-900/20",
    },
  }[result.type];

  return (
    <div
      className={`mt-0 p-6 font-thin rounded-xl ${resultStyles.bg} ${resultStyles.border} border backdrop-blur-sm`}
    >
      <div className="flex items-start gap-6">
        <div
          className={`p-4 rounded-lg bg-gradient-to-br ${resultStyles.gradient}`}
        >
          {resultStyles.icon}
        </div>
        <div className="flex-grow">
          <h3 className={`text-2xl font-bold ${resultStyles.textColor} mb-2`}>
            {resultStyles.title}
          </h3>
          <p className="text-gray-300 text-lg">{result.message}</p>

          {result.score !== undefined && (
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-400">Safety Score:</div>
                <div className="flex-grow h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      animatedScore > 80
                        ? "bg-green-500"
                        : animatedScore > 60
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    } transition-all duration-1000`}
                    style={{ width: `${animatedScore}%` }}
                  ></div>
                </div>
                <div className={`font-bold ${resultStyles.textColor}`}>
                  {animatedScore}%
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {result.type === "safe" && (
          <>
            <div className="p-4 rounded-lg bg-green-950/50 border border-green-800">
              <h4 className="font-semibold text-green-200 mb-3">
                Security Checks
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>SSL Certificate: Valid</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Domain Age: {result.details.age}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Reputation: {result.details.reputation}</span>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-green-950/50 border border-green-800">
              <h4 className="font-semibold text-green-200 mb-3">
                Additional Information
              </h4>
              <div className="space-y-0 text-sm text-gray-300">
                <p>Last scanned: {result.details.lastScanned}</p>
                <p>All security checks passed</p>
                <p>No known threats detected</p>
              </div>
            </div>
          </>
        )}

        {result.type === "phishing" && (
          <>
            <div className="p-4 rounded-lg bg-red-950/50 border border-red-800">
              <h4 className="font-semibold text-red-200 mb-3">
                Detected Threats
              </h4>
              <ul className="space-y-1 text-sm">
                {result.details.threats.map((threat, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-950/50 border border-red-800">
              <h4 className="font-semibold text-red-200 mb-3">
                Risk Assessment
              </h4>
              <div className=" text-sm text-gray-300">
                <p>
                  Risk Level:{" "}
                  <span className="text-red-500 font-semibold">
                    {result.details.riskLevel}
                  </span>
                </p>
                <p>Report Count: {result.details.reportCount}</p>
                <p>Last Detected: {result.details.lastDetected}</p>
              </div>
            </div>
          </>
        )}

        {result.type === "unknown" && (
          <div className="col-span-2 p-4 rounded-lg bg-yellow-950/50 border border-yellow-800">
            <h4 className="font-semibold text-yellow-200 mb-3">
              Analysis Details
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300">{result.details.reason}</p>
              <div>
                <h5 className="font-medium text-yellow-200 mb-2">
                  Suggestions:
                </h5>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {result.details.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {result.type === "invalid" && (
          <div className="col-span-2 p-4 rounded-lg bg-gray-900/50 border border-gray-700">
            <h4 className="font-semibold text-gray-200 mb-3">Error Details</h4>
            <div className="space-y-2 text-gray-300">
              <p>{result.details.error}</p>
              <p>
                Expected format:{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  {result.details.format}
                </code>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
