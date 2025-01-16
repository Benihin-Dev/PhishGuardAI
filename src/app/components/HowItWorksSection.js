import React from "react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 my-5 border-gray-800 border-y ">
      <h2 className="text-2xl font-bold mb-10 text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">1</div>
          <h3 className="font-semibold mb-2">Paste URL</h3>
          <p className="text-gray-400 mx-auto  w-8/12">
            Enter the suspicious website URL in the input box above
          </p>
          <div className=" w-full pt-5 sm:pt-0 flex items-center justify-center">
            <div className="  h-2   w-8 border-b mt-3"> </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">2</div>
          <h3 className="font-semibold mb-2">AI Analysis</h3>
          <p className="text-gray-400 mx-auto  w-8/12">
            Our ML model analyzes various features of the website
          </p>
          <div className=" w-full pt-5 sm:pt-0 flex items-center justify-center">
            <div className="  h-2  w-8 border-b  mt-3"> </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">3</div>
          <h3 className="font-semibold mb-2">Get Results</h3>
          <p className="text-gray-400 mx-auto  w-8/12">
            Receive detailed analysis and safety recommendation
          </p>
          <div className=" hidden sm:flex w-full pt-5 sm:pt-0   items-center justify-center">
            <div className="  h-2   w-8 border-b mt-3"> </div>
          </div>
        </div>
      </div>
    </section>
  );
}
