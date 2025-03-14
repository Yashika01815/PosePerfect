import React from 'react';

const DietPlans: React.FC = () => {
  return (
    <section id="diet-plans" className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Personalized Diet Plans</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Optimize your nutrition to complement your yoga and fitness journey with AI-recommended meal plans tailored to your practice.
          </p>
        </div>

        {/* Diet Plan Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-3 bg-green-600"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Activity-Based Nutrition</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our AI analyzes your workout patterns and intensity to recommend optimal nutrition that supports your specific practice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Calorie recommendations based on activity level</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Macro adjustments for performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Recovery-focused nutrition timing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-3 bg-indigo-600"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Personalized Preferences</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Customize your meal plans based on dietary restrictions, preferences, and personal goals for a truly tailored experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Multiple diet types (vegan, keto, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Allergy and intolerance accommodations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Cultural food preferences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-3 bg-purple-600"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Health Integration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Incorporate your medical history and health goals into your nutrition plan for a holistic approach to wellness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Medical condition accommodations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Nutritionist-approved recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Health goal-oriented nutrition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-amber-600 dark:text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 22V12h6v10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Diet Plan Types</h3>
          </div>

          <div className="space-y-4 mb-6">
            {["Balanced Diet", "Plant-Based", "Strength & Recovery", "Medical-Specific"].map((plan, index) => {
              const colors = ["green", "blue", "purple", "red"];
              const descriptions = [
                "Well-rounded nutrition with balanced macronutrients for general yoga and fitness practice.",
                "Fully plant-based options rich in protein and nutrients for vegetarian and vegan practitioners.",
                "Higher protein content with targeted nutrients for muscle building and recovery.",
                "Plans that accommodate specific health conditions like diabetes, hypertension, etc."
              ];
              return (
                <div key={index} className="flex p-3 bg-gray-50 dark:bg-neutral-700 rounded-lg">
                  <div className={`bg-${colors[index]}-100 dark:bg-${colors[index]}-900/30 p-2 rounded-md mr-4 flex-shrink-0`}>
                    <svg className={`w-5 h-5 text-${colors[index]}-600 dark:text-${colors[index]}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{plan}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{descriptions[index]}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center justify-center mx-auto">
              View all diet plans
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </section>

  );
};

export default DietPlans;