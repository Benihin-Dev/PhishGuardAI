import React from "react";
import LoadingAnimation from "./LoadingAnimation";
import ResultComponent from "./ResultComponent";

export default function URLChecker({
  handleSubmit,
  url,
  setUrl,
  isLoading,
  result,
}) {
  return (
    <section id="url-checker" className="pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className=" p-4 sm:p-8 rounded-sm   border-gray-700 shadow-xl">
          <h2 className="text-2xl font-semibold mb-12 text-center">
            Check Website Safety
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="sm:flex gap-2 pb-10 border-b border-gray-700">
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
                className="px-6 py-2 text-sm sm:text-base  sm:py-3 mt-2 sm:mt-0 w-full sm:w-fit bg-blue-600  hover:bg-blue-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[140px] justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin  "></div>
                    Checking...
                  </>
                ) : (
                  "Check URL"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        result && (
          <div className=" w-full sm:w-10/12 md:w-9/12 mx-auto">
            <ResultComponent result={result} />
          </div>
        )
      )}
    </section>
  );
}
