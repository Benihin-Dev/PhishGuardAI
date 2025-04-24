import React from "react";
import { motion } from "framer-motion"; 

export default function HowItWorksSection() {
  const sectionData = [
    {
      title: "Paste URL",
      description: "Enter the suspicious website URL in the input box above",
    },
    {
      title: "AI Analysis",
      description: "Our ML model analyzes various features of the website",
    },
    {
      title: "Get Results",
      description: "Receive detailed analysis and safety recommendation",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="py-24 my-5  overflow-hidden border-gray-800 border-b "
    >
      <motion.h2
        whileInView={{
          scale: 1.05,
        }}
        viewport={{ margin: "-10px" }}
        className="text-2xl font-bold mb-10 text-center"
      >
        How It Works
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {sectionData.map((section, index) => (
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            key={index}
            className="text-center"
          >
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {index + 1}
            </div>
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-400 mx-auto  w-8/12">
              {section.description}
            </p>
            <div className=" hidden sm:flex w-full pt-5 sm:pt-0   items-center justify-center">
              <div className="  h-2   w-8 border-b mt-3"> </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
