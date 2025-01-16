import React, { useEffect, useRef } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function LoadingAnimation() {
  const searchIconRef = useRef(null);

  useEffect(() => {
    const moveIconRandomly = () => {
      const icon = searchIconRef.current;
      const parent = icon.parentElement;
      const parentWidth = parent.clientWidth;
      const parentHeight = parent.clientHeight;
      const iconWidth = icon.clientWidth;
      const iconHeight = icon.clientHeight;

      const randomX = Math.random() * (parentWidth - iconWidth);
      const randomY = Math.random() * (parentHeight - iconHeight);

      icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };

    const intervalId = setInterval(moveIconRandomly, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:flex   w-full mx-auto max-w-4xl gap-5  lg:gap-10 items-end justify-center  px-5 sm:px-0">
      <div
        style={{ aspectRatio: 9 / 5 }}
        className="relative mx-auto md:ml-auto  overflow-hidden w-11/12 sm:w-[80%]  md:w-[60%]  mb-8"
      >
        {/* Website mockup */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700">
          <div className="h-6 bg-gray-800 rounded-t-lg border-b border-gray-700 flex items-center px-3 gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 bg-gray-700 rounded w-3/4"></div>
            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
          </div>

          <div className="p-3 space-y-2">
            <div className="h-2 bg-gray-700 rounded w-1/4"></div>
            <div className="h-2 bg-gray-700 rounded w-11/12"></div>
            <div className="h-2 bg-gray-700 rounded w-11/12"></div>
            <div className="h-2 bg-gray-700 rounded w-11/12"></div>
          </div>

          <div className=" w-full flex items-center gap-5 justify-between ">
            <div className="p-3 space-y-2 hidden sm:block w-1/2">
              <div className="h-2 bg-gray-700 rounded w-1/4"></div>
              <div className="h-2 bg-gray-700 rounded w-full"></div>
              <div className="h-2 bg-gray-700 rounded w-full"></div>
              <div className="h-2 bg-gray-700 rounded w-full"></div>
            </div>
            <div className="p-3 space-y-2 hidden sm:block  w-1/2">
              <div className="h-2 bg-gray-700 rounded w-1/4"></div>
              <div className="h-2 bg-gray-700 rounded w-full"></div>
              <div className="h-2 bg-gray-700 rounded w-full"></div>
              <div className="h-2 bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
        {/* Scanning effect */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute -top-12 -left-16 w-24 h-[150%] bg-blue-500/20 blur-md transform rotate-12 animate-scan"></div>
        </div>
        {/* Moving Magnifying Glass */}
        <div
          className="absolute transition-all duration-[3s] w-12 h-12   rounded-full flex items-center justify-center animate-move-around trail"
          ref={searchIconRef}
        >
          <HiMiniMagnifyingGlass className="text-4xl text-white" />
        </div>
      </div>
      <div className="space-y-4 pb-8 md:w-[40%]">
        <div className="text-xl font-semibold text-blue-500">
          Analyzing Website
        </div>
        <div className="text-gray-400 space-y-0 font-thin text-sm ">
          <div className="flex items-center gap-2  ">
            <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"></div>
            <span>Checking URL structure and SSL certificate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-100"></div>
            <span>Analyzing domain reputation and age</span>
          </div>
          <div className="flex items-center gap-2  ">
            <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-200"></div>
            <span>Scanning for potential security threats</span>
          </div>
          <div className="flex items-center gap-2  ">
            <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-300"></div>
            <span>Running AI analysis on website content</span>
          </div>
        </div>
      </div>
    </div>
  );
}
