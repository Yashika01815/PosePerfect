import React from "react";

const AdditionalFeatures = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10" id="additional-features-heading">
        Additional Premium Features
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="additional-features-grid">
        {/* Progress Reporting */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/10 rounded-xl p-6 shadow-lg" id="progress-reporting">
          <div className="flex items-center mb-4" id="progress-reporting-header">
            <div className="w-12 h-12 bg-indigo-600 dark:bg-indigo-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0" id="progress-reporting-icon">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-white" id="progress-reporting-title">End Report &amp; Analytics</h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300" id="progress-reporting-description">
            Comprehensive reports detailing your progress, achievements, and areas for improvement. Track changes over time with detailed visual analytics.
          </p>
          <div className="mt-4 flex justify-end" id="progress-reporting-cta">
            <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Health-Aware Scheduling */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 rounded-xl p-6 shadow-lg" id="health-aware-scheduling">
          <div className="flex items-center mb-4" id="health-aware-scheduling-header">
            <div className="w-12 h-12 bg-green-600 dark:bg-green-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0" id="health-aware-scheduling-icon">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-white" id="health-aware-scheduling-title">Medical History Integration</h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300" id="health-aware-scheduling-description">
            Safely integrate your medical history to receive workout recommendations and scheduling that considers your unique health needs and limitations.
          </p>
          <div className="mt-4 flex justify-end" id="health-aware-scheduling-cta">
            <button className="text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Session Recommendations */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 rounded-xl p-6 shadow-lg" id="session-recommendations">
          <div className="flex items-center mb-4" id="session-recommendations-header">
            <div className="w-12 h-12 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0" id="session-recommendations-icon">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-white" id="session-recommendations-title">Session Recommendations</h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300" id="session-recommendations-description">
            Discover both free and premium yoga/gym sessions, available online and in-person, tailored specifically to your skill level and goals.
          </p>
          <div className="mt-4 flex justify-end" id="session-recommendations-cta">
            <button className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeatures;