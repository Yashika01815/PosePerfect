import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform helps you perfect your yoga and gym poses with real-time feedback and personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Upload or Stream</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Upload a video of your workout or start a live session for real-time pose correction.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">AI Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our advanced AI analyzes your posture and movement, comparing it to expert forms.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Get Feedback</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Receive detailed feedback, corrections, and suggestions to improve your form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
