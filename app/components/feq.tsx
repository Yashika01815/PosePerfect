import React from "react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect on your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, all paid plans come with a 14-day free trial so you can experience the premium features before committing.",
    },
    {
      question: "Do I need special equipment?",
      answer:
        "No special equipment is needed. Just a smartphone or webcam for video capture. Better lighting helps with more accurate pose assessment.",
    },
    {
      question: "How accurate is the AI assessment?",
      answer:
        "Our AI has been trained on thousands of poses and achieves 95%+ accuracy compared to professional instructor assessment in controlled environments.",
    },
  ];

  return (
    <div className="mb-16" id="faq-section">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
        Frequently Asked Questions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6"
          >
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">
              {faq.question}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
