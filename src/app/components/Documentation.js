"use client";
import React from "react";

export default function Documentation() {
  return (
    <div className="min-h-screen pt-28   bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900">
            PhishGuardAI Documentation
          </h1>
          <p className="text-gray-600 mt-2">
            Complete guide to using our AI-powered phishing detection tool
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a
              href="#overview"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              1. Overview
            </a>
            <a
              href="#how-it-works"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              2. How It Works
            </a>
            <a
              href="#getting-started"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              3. Getting Started
            </a>
            <a
              href="#features"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              4. Features
            </a>
            <a
              href="#api-reference"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              5. API Reference
            </a>
            <a
              href="#technical-details"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              6. Technical Details
            </a>
            <a
              href="#faq"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              7. FAQ
            </a>
            <a
              href="#troubleshooting"
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              8. Troubleshooting
            </a>
          </div>
        </div>

        {/* Overview */}
        <section
          id="overview"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            1. Overview
          </h2>
          <p className="text-gray-700 mb-4">
            PhishGuardAI is an advanced phishing detection tool that uses
            machine learning algorithms to analyze URLs and determine if
            they&apos;re potentially malicious. Built as a final year research
            project, it combines cutting-edge AI technology with user-friendly
            design to protect users from phishing attacks.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">Instant Detection</h3>
              <p className="text-blue-700 text-sm mt-1">
                Get results in seconds
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900">90% Accuracy</h3>
              <p className="text-green-700 text-sm mt-1">
                Highly accurate ML model
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900">Free to Use</h3>
              <p className="text-purple-700 text-sm mt-1">
                No registration required
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            2. How It Works
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold  text-blue-600">URL Input</h3>
                <p className="text-gray-700">
                  User enters a URL they want to check for phishing indicators
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold  text-blue-600">
                  Feature Extraction
                </h3>
                <p className="text-gray-700">
                  Our system extracts 14+ features from the URL including domain
                  age, SSL certificate status, URL structure, and more
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold  text-blue-600">ML Analysis</h3>
                <p className="text-gray-700">
                  The machine learning model analyzes these features using
                  trained algorithms to detect phishing patterns
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold  text-blue-600">Results</h3>
                <p className="text-gray-700">
                  Get instant results with confidence score and detailed
                  analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section
          id="getting-started"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            3. Getting Started
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2  text-black">Quick Start</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Visit the PhishGuardAI homepage</li>
                <li>Copy the URL you want to check</li>
                <li>Paste it into the input field</li>
                <li>Click &quot;Check URL&quot; or press Enter</li>
                <li>View your results instantly</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800">
                ⚠️ Important Notes
              </h4>
              <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                <li>
                  • Always include the full URL (with http:// or https://)
                </li>
                <li>• Results are for informational purposes only</li>
                <li>• When in doubt, avoid clicking suspicious links</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            4. Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Detection Capabilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  URL structure analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Domain reputation checking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  SSL certificate validation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Suspicious pattern detection
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Typosquatting identification
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">User Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Instant results (2-3 seconds)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Confidence score display
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Detailed analysis breakdown
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Mobile-friendly interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  No registration required
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section
          id="api-reference"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            5. API Reference
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-black">Endpoint</h3>
              <div className="bg-gray-100 text-blue-600 p-3 rounded-lg font-mono text-sm">
                POST -
                https://phishguardaibackend-production-e66e.up.railway.app/predict
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2  text-black">Request Body</h3>
              <pre className="bg-gray-100 text-blue-600  p-3 rounded-lg text-sm overflow-x-auto">
                {`{
  "url": "https://example.com"
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2  text-black">Response</h3>
              <pre className="bg-gray-100 text-blue-600  p-3 rounded-lg text-sm overflow-x-auto">
                {`{
    "URL": "url": "https://example.com",
    "Prediction": "Phishing",
    "Raw_Prediction_Value": 0,
    "Risk_Level": "High Risk",
    "Domain_Age": "14083 days",
    "Network_Information": {
        "IP Address": "18.155.68.38",
        "Location": "Unknown",
        "Hostname": "new.express.adobe.com",
        "Response Time": "2.25 ms",
        "Subdomain Count": 2,
        "Redirection Count": 0,
        "Redirection Chain": [
            "https://new.express.adobe.com/webpage/TBPcFvEjDVKw9"
        ]
    },
    "SSL_Certificate": {
        "Status": "Valid",
        "Expiry Date": "2026-05-06",
        "Issuer": "Amazon"
    },
    "Features": {
        "having_IP_Address": 0,
        "URL_Length": 51,
        "Shortining_Service": 0,
        "having_At_Symbol": 0,
        "double_slash_redirecting": 0,
        "Prefix_Suffix": 0,
        "SSLfinal_State": 0,
        "having_Sub_Domain": 1,
        "Domain_registeration_length": 14425,
        "Request_URL": 0.0,
        "URL_of_Anchor": 0.0,
        "Links_in_tags": 0.6521738846880919,
        "SFH": 1
    },
    "Probability_Legitimate": "25.38%",
    "Probability_Phishing": "74.62%"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section
          id="technical-details"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            6. Technical Details
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Machine Learning Model</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Our model is trained on a comprehensive dataset of known
                  phishing and legitimate websites, using advanced feature
                  engineering and ensemble methods.
                </p>
                <div className="grid md:grid-cols-2 text-blue-600 gap-4 text-sm">
                  <div>
                    <strong>Algorithms:</strong> Decision Tree Classifier |
                    Random Forest | Gradient Boosting | Naïve Bayes | Weighted
                    Soft Voting
                  </div>
                  <div>
                    <strong>Training Data:</strong> 100,000+ URLs
                  </div>
                  <div>
                    <strong>Features:</strong> 14+ extracted features
                  </div>
                  <div>
                    <strong>Accuracy:</strong> 89.2% on test set
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Key Features Analyzed</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• URL length and complexity</li>
                  <li>• Domain registration age</li>
                  <li>• SSL certificate status</li>
                  <li>• Number of subdomains</li>
                  <li>• Presence of IP addresses</li>
                  <li>• Suspicious keywords</li>
                </ul>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• URL shorteners usage</li>
                  <li>• Special characters count</li>
                  <li>• Domain reputation score</li>
                  <li>• Redirect chains</li>
                  <li>• WHOIS information</li>
                  <li>• Brand impersonation patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            7. Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2  text-black">
                How accurate is PhishGuardAI?
              </h3>
              <p className="text-gray-700">
                Our machine learning model achieves 95.2% accuracy on our test
                dataset, which includes thousands of verified phishing and
                legitimate websites.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2  text-black">
                Is PhishGuardAI free to use?
              </h3>
              <p className="text-gray-700">
                Yes, PhishGuardAI is completely free to use. There are no
                registration requirements or usage limits.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2  text-black">
                What types of URLs can I check?
              </h3>
              <p className="text-gray-700">
                You can check any HTTP or HTTPS URL. This includes websites,
                email links, social media links, and shortened URLs.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2  text-black">
                How long does analysis take?
              </h3>
              <p className="text-gray-700">
                Most URL analyses complete within 2-3 seconds. Complex URLs with
                multiple redirects may take slightly longer.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2  text-black">
                Do you store the URLs I check?
              </h3>
              <p className="text-gray-700">
                We do not store or log the URLs you submit for analysis. All
                processing is done in real-time and data is not retained.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2  text-black">
                Can I integrate PhishGuardAI into my application?
              </h3>
              <p className="text-gray-700">
                Currently, this is a research project and not available for
                commercial integration. However, you can use our web interface
                for personal use.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section
          id="troubleshooting"
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">
            8. Troubleshooting
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Common Issues</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700">
                    Error: &quot;Invalid URL format&quot;
                  </h4>
                  <p className="text-red-600">
                    Make sure your URL includes http:// or https:// at the
                    beginning.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700">
                    Error: &quot;Analysis timeout&quot;
                  </h4>
                  <p className="text-red-600">
                    This may occur with very slow-loading websites. Try again in
                    a few moments.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700">
                    Unexpected results
                  </h4>
                  <p className="text-red-600">
                    Remember that no detection system is 100% perfect. Use
                    results as guidance alongside your own judgment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">
                Best Practices
              </h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Always verify suspicious results manually</li>
                <li>• Check multiple sources for important decisions</li>
                <li>• Report false positives to help improve the system</li>
                <li>• Keep your browser and security software updated</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="font-semibold mb-2  text-black">Need More Help?</h3>
          <p className="text-gray-700 mb-4">
            This is a research project developed as part of a final year study.
            For technical questions or feedback, please contact our development
            team.
          </p>
          <div className="text-sm text-gray-600">
            <p>PhishGuardAI - Final Year Research Project</p>
            <p>Built with Next.js and Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
