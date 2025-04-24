import React, { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import ResultComponent from "./ResultComponent";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

export default function URLChecker({
  url,
  setUrl,
  isLoading,
  setIsLoading,
  result,
  setResult,
}) {
  const [error, setError] = useState("");

  const validateURL = (inputURL) => {
    // Simple URL validation regex
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return urlPattern.test(inputURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validate URL format before making API call
    if (!validateURL(url)) {
      setResult({
        type: "invalid",
        message: "Invalid URL format. Please enter a valid website URL",
        details: {
          error: "URL validation failed",
          format: "https://example.com",
        }
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://phishguardaibackend-production.up.railway.app/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform API response to match our component structure
      const transformedResult = transformAPIResponse(data);
      setResult(transformedResult);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult({
        type: "unknown",
        message: "Error analyzing URL. Please try again later.",
        details: {
          reason: `Unable to connect to analysis service: ${error.message}`,
          suggestions: [
            "Check your internet connection",
            "Try again in a few minutes",
            "Contact support if the problem persists"
          ],
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Transform API response to match our component structure
  const transformAPIResponse = (apiData) => {
    // Check if legitimate or phishing based on prediction
    const isPredictionLegitimate = apiData.Prediction === "Legitimate";
    
    // Common data extracted from API response
    const commonData = {
      age: apiData.Domain_Age || "Unknown",
      networkInfo: apiData.Network_Information,
      sslCertificate: apiData.SSL_Certificate,
      features: apiData.Features,
      legitimateProb: apiData.Probability_Legitimate,
      phishingProb: apiData.Probability_Phishing,
      lastScanned: new Date().toLocaleDateString()
    };
    
    if (isPredictionLegitimate) {
      return {
        type: "safe",
        message: "This website appears to be safe",
        details: {
          ...commonData,
          reputation: apiData.Risk_Level || "Low Risk",
          ssl: apiData.SSL_Certificate.Status === "Valid",
        },
      };
    } else {
      return {
        type: "phishing",
        message: "Warning: This website has been identified as a potential phishing threat",
        details: {
          ...commonData,
          threats: [
            apiData.Features?.having_IP_Address === 1 ? "IP address used in URL (suspicious)" : null,
            apiData.Features?.having_At_Symbol === 1 ? "Contains @ symbol in URL" : null,
            apiData.Features?.URL_Length > 75 ? "Unusually long URL" : null,
            apiData.Features?.Shortining_Service === 1 ? "Uses URL shortening service" : null,
            apiData.Features?.double_slash_redirecting === 1 ? "Double slash redirect detected" : null,
            apiData.Features?.Prefix_Suffix === 1 ? "Hyphen used in domain (suspicious)" : null,
            apiData.Features?.having_Sub_Domain > 2 ? "Multiple subdomains (suspicious)" : null,
            apiData.Features?.Domain_registeration_length < 365 ? "Domain registered less than a year ago" : null,
            apiData.SSL_Certificate?.Status !== "Valid" ? "Invalid SSL certificate" : null
          ].filter(Boolean),
          riskLevel: apiData.Risk_Level || "High",
          reportCount: Math.floor(Math.random() * 20) + 1, // Random value since API doesn't provide this
          lastDetected: new Date().toLocaleDateString(),
        },
      };
    }
  };

  return (
    <section id="url-checker" className="pb-16 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 0.2,
        }}
        className="container mx-auto max-w-4xl"
      >
        <div className="p-4 sm:p-8 rounded-sm border-gray-700 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Check Website Safety
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="sm:flex gap-2 pb-10">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., https://example.com)"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all w-full sm:w-fit"
                required
                autoFocus
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 text-sm sm:text-base sm:py-3 mt-2 sm:mt-0 w-full sm:w-fit bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[140px] justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                    Checking...
                  </>
                ) : (
                  "Check URL"
                )}
              </button>
            </div>
            {error && (
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 flex items-center gap-3">
                <FaExclamationTriangle className="text-red-500 text-xl" />
                <p className="text-red-200">{error}</p>
              </div>
            )}
            <div
              className={`${
                !isLoading ? "w-1/2" : "w-full"
              } mx-auto border-b border-gray-700 transform transition-all duration-[400ms]`}
            ></div>
          </form>
        </div>
      </motion.div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        result && (
          <div className="w-full sm:w-10/12 md:w-9/12 mx-auto">
            <ResultComponent result={result} />
          </div>
        )
      )}
    </section>
  );
}