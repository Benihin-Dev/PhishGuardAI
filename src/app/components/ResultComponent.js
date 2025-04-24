import React from "react";
import { motion } from "framer-motion";
import {
  FaTimesCircle,
  FaCheckCircle,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaGlobe,
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

export default function ResultComponent({ result }) {
  const resultStyles = {
    safe: {
      bg: "bg-[#000]",
      border: "border-green-500",
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Safe Website",
      textColor: "text-green-500",
      gradient: "from-green-500/20 to-green-900/20",
      cardBg: "bg-green-950/50",
      cardBorder: "border-green-800",
      cardTitle: "text-green-200",
    },
    phishing: {
      bg: "bg-[#000]",
      border: "border-red-500",
      icon: <FaTimesCircle className="text-5xl text-red-500" />,
      title: "Phishing Detected",
      textColor: "text-red-500",
      gradient: "from-red-500/20 to-red-900/20",
      cardBg: "bg-red-950/50",
      cardBorder: "border-red-800",
      cardTitle: "text-red-200",
    },
    unknown: {
      bg: "bg-[#000]",
      border: "border-yellow-500",
      icon: <FaQuestionCircle className="text-5xl text-yellow-500" />,
      title: "Unable to Determine",
      textColor: "text-yellow-500",
      gradient: "from-yellow-500/20 to-yellow-900/20",
      cardBg: "bg-yellow-950/50",
      cardBorder: "border-yellow-800",
      cardTitle: "text-yellow-200",
    },
    invalid: {
      bg: "bg-[#000]",
      border: "border-gray-500",
      icon: <FaExclamationTriangle className="text-5xl text-gray-500" />,
      title: "Invalid URL",
      textColor: "text-gray-500",
      gradient: "from-gray-500/20 to-gray-900/20",
      cardBg: "bg-gray-900/50",
      cardBorder: "border-gray-700",
      cardTitle: "text-gray-200",
    },
  }[result.type];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
      className={`mt-8 p-6 rounded-xl ${resultStyles.bg} ${resultStyles.border} border backdrop-blur-sm`}
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
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {result.type === "safe" && (
          <>
            <div className={`p-4 rounded-lg ${resultStyles.cardBg} border ${resultStyles.cardBorder}`}>
              <h4 className={`font-semibold ${resultStyles.cardTitle} mb-3 flex items-center gap-2`}>
                <FaShieldAlt /> Security Checks
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  {result.details.ssl ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                  <span>SSL Certificate: {result.details.ssl ? "Valid" : "Invalid"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-green-500" />
                  <span>Domain Age: {result.details.age}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Reputation: {result.details.reputation}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-green-800">
                  <div className="text-xs text-gray-300">Probability Assessment:</div>
                  <div className="flex justify-between mt-1">
                    <div className="text-green-400">{result.details.legitimateProb} Legitimate</div>
                    <div className="text-red-400">{result.details.phishingProb} Phishing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${resultStyles.cardBg} border ${resultStyles.cardBorder}`}>
              <h4 className={`font-semibold ${resultStyles.cardTitle} mb-3 flex items-center gap-2`}>
                <FaNetworkWired /> Network Information
              </h4>
              <div className="space-y-1 text-sm text-gray-300">
                {result.details.networkInfo && (
                  <>
                    <p><span className="text-gray-400">IP Address:</span> {result.details.networkInfo["IP Address"]}</p>
                    <p><span className="text-gray-400">Hostname:</span> {result.details.networkInfo.Hostname}</p>
                    <p><span className="text-gray-400">Response Time:</span> {result.details.networkInfo["Response Time"]}</p>
                    
                    {/* Location Information */}
                    <div className="mt-2 pt-2 border-t border-green-800">
                      <p className="flex items-center gap-1 text-gray-400">
                        <FaMapMarkerAlt /> Location:
                      </p>
                      {typeof result.details.networkInfo.Location === 'object' ? (
                        <div className="ml-4 mt-1">
                          <p>Country: {result.details.networkInfo.Location.Country || "Unknown"}</p>
                          <p>Region: {result.details.networkInfo.Location.Region || "Unknown"}</p>
                          <p>City: {result.details.networkInfo.Location.City || "Unknown"}</p>
                          <p>ISP: {result.details.networkInfo.Location.ISP || "Unknown"}</p>
                        </div>
                      ) : (
                        <p className="ml-4 mt-1">{result.details.networkInfo.Location || "Unknown"}</p>
                      )}
                    </div>
                    
                    {/* SSL Certificate Information */}
                    <div className="mt-2 pt-2 border-t border-green-800">
                      <p className="flex items-center gap-1 text-gray-400">
                        <FaLock /> SSL Certificate:
                      </p>
                      <div className="ml-4 mt-1">
                        <p>Status: {result.details.sslCertificate?.Status || "Unknown"}</p>
                        <p>Expiry Date: {result.details.sslCertificate?.["Expiry Date"] || "Unknown"}</p>
                        <p>Issuer: {result.details.sslCertificate?.Issuer || "Unknown"}</p>
                      </div>
                    </div>
                    
                    <p className="mt-2 pt-2 border-t border-green-800 flex items-center gap-1">
                      <FaClock className="text-gray-400" /> 
                      <span className="text-gray-400">Last Scanned:</span> {result.details.lastScanned}
                    </p>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {result.type === "phishing" && (
          <>
            <div className={`p-4 rounded-lg ${resultStyles.cardBg} border ${resultStyles.cardBorder}`}>
              <h4 className={`font-semibold ${resultStyles.cardTitle} mb-3 flex items-center gap-2`}>
                <FaExclamationTriangle /> Detected Threats
              </h4>
              <ul className="space-y-2 text-sm">
                {result.details.threats && result.details.threats.map((threat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-red-800">
                <div className="text-xs text-gray-300">Probability Assessment:</div>
                <div className="flex justify-between mt-1">
                  <div className="text-green-400">{result.details.legitimateProb} Legitimate</div>
                  <div className="text-red-400">{result.details.phishingProb} Phishing</div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${resultStyles.cardBg} border ${resultStyles.cardBorder}`}>
              <h4 className={`font-semibold ${resultStyles.cardTitle} mb-3 flex items-center gap-2`}>
                <FaInfoCircle /> Risk Assessment
              </h4>
              <div className="text-sm text-gray-300">
                <p>
                  Risk Level:{" "}
                  <span className="text-red-500 font-semibold">
                    {result.details.riskLevel}
                  </span>
                </p>
                <p>Domain Age: {result.details.age || "Unknown"}</p>
                <p>Report Count: {result.details.reportCount}</p>
                <p>Last Detected: {result.details.lastDetected}</p>
                
                {/* SSL Certificate Information */}
                <div className="mt-3 pt-3 border-t border-red-800">
                  <p className="flex items-center gap-1 text-gray-400">
                    <FaLock /> SSL Certificate:
                  </p>
                  <div className="ml-4 mt-1">
                    <p>Status: {result.details.sslCertificate?.Status || "Unknown"}</p>
                    <p>Expiry Date: {result.details.sslCertificate?.["Expiry Date"] || "Unknown"}</p>
                    <p>Issuer: {result.details.sslCertificate?.Issuer || "Unknown"}</p>
                  </div>
                </div>
                
                {result.details.networkInfo && (
                  <div className="mt-3 pt-3 border-t border-red-800">
                    <p className="flex items-center gap-1 text-gray-400">
                      <FaNetworkWired /> Network Details:
                    </p>
                    <div className="ml-4 mt-1">
                      <p>IP Address: {result.details.networkInfo["IP Address"]}</p>
                      <p>Hostname: {result.details.networkInfo.Hostname}</p>
                      <p>Redirections: {result.details.networkInfo["Redirection Count"]}</p>
                      
                      {/* Location Information */}
                      <div className="mt-2">
                        <p className="text-gray-400">Location:</p>
                        {typeof result.details.networkInfo.Location === 'object' ? (
                          <div className="ml-4">
                            <p>Country: {result.details.networkInfo.Location.Country || "Unknown"}</p>
                            <p>Region: {result.details.networkInfo.Location.Region || "Unknown"}</p>
                            <p>City: {result.details.networkInfo.Location.City || "Unknown"}</p>
                            <p>ISP: {result.details.networkInfo.Location.ISP || "Unknown"}</p>
                          </div>
                        ) : (
                          <p className="ml-4">{result.details.networkInfo.Location || "Unknown"}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
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
    </motion.div>
  );
}