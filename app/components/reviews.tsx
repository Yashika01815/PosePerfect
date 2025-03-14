"use client";

import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Yashika Thakkar",
      review:
        "This AI-powered pose correction tool has transformed my yoga practice! I can finally achieve perfect alignment and avoid injuries. Absolutely amazing!",
    },
    {
      name: "Atharv",
      review:
        "As a fitness coach, I recommend this to all my students. The real-time corrections help improve posture significantly. 10/10 experience!",
    },
    {
      name: "Devesh",
      review:
        "I love how intuitive this tool is! The feedback is spot-on, and my dance movements feel more refined than ever. Highly recommend!",
    },
    {
      name: "Rupesh",
      review:
        "This has been a game-changer for my weightlifting form. I can see where I need adjustments instantly. Best investment ever!",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #f0fdf4, #eff6ff)", // Matching gradient colors
        paddingTop: "8rem",
        paddingBottom: "6rem",
      }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
      <p className="text-gray-600 text-lg mb-10 text-center max-w-2xl">
        Discover how our AI-powered pose correction technology has transformed the practice and performance of users worldwide.
      </p>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-8 text-center w-full">
            {/* Star Rating */}
            <div className="flex justify-center mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500 w-6 h-6" />
                ))}
            </div>
            {/* Review Content */}
            <p className="text-gray-700 italic mb-4 text-lg">"{review.review}"</p>
            <h4 className="font-semibold text-gray-900 text-xl">{review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
