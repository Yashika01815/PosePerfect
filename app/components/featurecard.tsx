import React from "react";

const FeatureCard: React.FC = () => {
  const features = [
    {
      title: "Realtime Feedback",
      description: "Get instant corrections on your form as you practice, with detailed reports after each session.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      points: [
        "Precision alignment guidance",
        "Voice instructions",
        "Performance analysis",
      ],
    },
    {
      title: "Skill Level Classification",
      description: "Our AI analyzes your practice and classifies your level based on the asanas you perform.",
      icon: (
        <svg
          className="w-8 h-8 text-purple-600 dark:text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
      points: [
        "Beginner, Intermediate, Advanced tracking",
        "Personalized progression path",
        "Challenge recommendations",
      ],
    },
    {
      title: "Streak Tracking",
      description: "Stay motivated with daily streaks and consistency tracking to build a regular practice.",
      icon: (
        <svg
          className="w-8 h-8 text-green-600 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      points: [
        "Daily practice reminders",
        "Achievement badges",
        "Consistency analytics",
      ],
    },
    {
      title: "Multi-Platform Access",
      description: "Access our platform across multiple devices with browser extensions and dedicated apps.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      points: [
        "Browser extension",
        "Mobile app compatibility",
        "Smart TV integration",
      ],
    },
    {
      title: "3D AI Coach",
      description: "Our AI mini 3D character demonstrates correct form and provides personalized guidance.",
      icon: (
        <svg
          className="w-8 h-8 text-amber-600 dark:text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          ></path>
        </svg>
      ),
      points: [
        "Visual demonstrations",
        "Form correction suggestions",
        "Interactive tutorials",
      ],
    },
    {
      title: "Personalized Diet Plans",
      description: "Receive customized nutrition recommendations based on your workout routine and goals.",
      icon: (
        <svg
          className="w-8 h-8 text-rose-600 dark:text-rose-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      points: [
        "Nutrition tracking",
        "Meal suggestions",
        "Dietary preference options",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h2 id="features" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Powerful Features</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Our AI-powered platform provides comprehensive tools to perfect your yoga and gym poses.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className={`h-3 ${index % 6 === 0 ? 'bg-indigo-600' : index % 6 === 1 ? 'bg-purple-600' : index % 6 === 2 ? 'bg-green-600' : index % 6 === 3 ? 'bg-blue-600' : index % 6 === 4 ? 'bg-amber-600' : 'bg-rose-600'}`}></div>
            <div className="p-6">
              <div className={`w-14 h-14 ${index % 6 === 0 ? 'bg-indigo-100 dark:bg-indigo-900/50' : index % 6 === 1 ? 'bg-purple-100 dark:bg-purple-900/50' : index % 6 === 2 ? 'bg-green-100 dark:bg-green-900/50' : index % 6 === 3 ? 'bg-blue-100 dark:bg-blue-900/50' : index % 6 === 4 ? 'bg-amber-100 dark:bg-amber-900/50' : 'bg-rose-100 dark:bg-rose-900/50'} rounded-full flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;