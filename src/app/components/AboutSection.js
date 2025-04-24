import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });
  const [divHeight, setDivHeight] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // console.log("Scroll Y Progress:", value * 100);
      setDivHeight(value * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <section id="about" className="py-16 px-4 ">
      <motion.div
        ref={targetRef}
        className="container mx-auto max-w-4xl text-center"
      >
        <motion.h2
          style={{
            backgroundSize: `${divHeight * 3}% 100%`,
            backgroundImage: "linear-gradient(90deg, white, white)",
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
          }}
          className="text-3xl text-[#7b7b7b47]  w-fit mx-auto font-bold mb-6"
        >
          About PhishGuard AI
        </motion.h2>

        <p className="text-lg mb-8 text-[#80808037]">
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, white, white)",
              backgroundRepeat: "no-repeat",
              backgroundClip: "text",
              backgroundSize: `${
                divHeight > 33 ? (divHeight - 34) * 3 : 0
              }% 100%`,
            }}
          >
            PhishGuard AI is a cutting-edge cybersecurity tool that uses
            advanced artificial intelligence and machine learning algorithms to
            protect users from phishing attacks. Our system continuously learns
            and adapts to new threats, providing real-time protection against
            malicious websites.
          </span>
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
