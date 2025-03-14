"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content - Text and CTA */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
              Perfect Your <span className="text-green-600 dark:text-green-500">Yoga & Gym</span> Poses with AI
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Get real-time feedback on your form, personalized corrections, and track your progress with our AI-powered pose correction technology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#upload" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Try Now
              </a>
              <a href="#how-it-works" className="px-6 py-3 bg-white dark:bg-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-600 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-600 rounded-lg font-medium transition duration-300 text-center shadow hover:shadow-md">
                How It Works
              </a>
            </div>
            <div className="mt-4 flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg shadow-md">
              <span className="bg-green-500 text-white rounded-full p-1">
                ✅
              </span>
              <span className="bg-purple-500 text-white rounded-full p-1">
                ⏳
              </span>
              <p className="text-sm text-gray-800 dark:text-white font-medium">10,000+ users improving their form</p>
            </div>
          </div>

          {/* Right Content - Illustration/Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center h-64 sm:h-72 md:h-96">
              <div className="text-white text-center">
                <div className="w-24 h-24 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xl font-medium">AI Pose Analysis Demo</p>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                  ✅
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Realtime Feedback</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Instant corrections</p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  ⚡
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">AI Analysis</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Detailed reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}