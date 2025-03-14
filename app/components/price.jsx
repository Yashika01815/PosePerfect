"use client";

import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      perMonth: "/month",
      description: "Perfect for beginners looking to improve basic poses and form.",
      buttonText: "Get Started",
      features: [
        { text: "Basic pose assessment", included: true },
        { text: "5 video uploads per month", included: true },
        { text: "Streak tracking", included: true },
        { text: "Access to free sessions", included: true },
        { text: "AI 3D character feedback", included: false },
        { text: "Personalized diet plans", included: false },
        { text: "Health-based scheduling", included: false },
      ],
    },
    {
      name: "Pro Plan",
      price: "$12.99",
      perMonth: "/month",
      description: "Perfect for regular practitioners seeking to refine their technique.",
      buttonText: "Start Pro Plan",
      features: [
        { text: "Everything in Free, plus:", included: true },
        { text: "Unlimited video uploads", included: true },
        { text: "Full AI 3D character feedback", included: true },
        { text: "Real-time live session feedback", included: true },
        { text: "Detailed end reports", included: true },
        { text: "Basic diet plan recommendations", included: true },
        { text: "Browser extension", included: false },
        { text: "Personalized health scheduling", included: true },
      ],
    },
    {
      name: "Premium Plan",
      price: "$24.99",
      perMonth: "/month",
      description: "The ultimate package for serious practitioners and professionals.",
      buttonText: "Go Premium",
      features: [
        { text: "Everything in Pro, plus:", included: true },
        { text: "Advanced AI pose correction", included: true },
        { text: "Custom diet plans with nutritionist", included: true },
        { text: "Health-based scheduling", included: true },
        { text: "Priority support", included: true },
        { text: "Access to all premium sessions", included: true },
        { text: "Early access to new features", included: true },
        { text: "Discounts on in-person sessions", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-white font-open-sans">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Perfect Plan</h2>
      <p className="text-gray-600 text-lg mb-10 text-center max-w-2xl">
        Flexible pricing options to support your fitness journey, from casual practitioners to dedicated enthusiasts.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-8 text-center flex flex-col justify-between w-full border border-gray-300"
          >
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            <p className="text-4xl font-extrabold text-green-600">
              {plan.price} <span className="text-lg text-gray-500">{plan.perMonth}</span>
            </p>
            <p className="text-gray-700 italic mb-4">{plan.description}</p>

            {/* Features List */}
            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className={`text-lg font-bold ${feature.included ? "text-green-600" : "text-red-600"}`}>
                    {feature.included ? "✔" : "✖"}
                  </span>
                  <span className="text-gray-800">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
