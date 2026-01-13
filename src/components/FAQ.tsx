"use client";

import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is The Heights Country Club and Wellness by Emaar?",
    answer:
      "The Heights Country Club and Wellness is an unparalleled 81 million square feet development by EMAAR Properties with a valuation of over AED 55 billion. Located in the heart of Dubai, this stunning new freehold project offers luxurious villas and townhouses designed for wellness-focused living.",
  },
  {
    question: "What types of properties are available at The Heights?",
    answer:
      "The Heights offers an extensive selection of 3, 4, and 5-bedroom villas and townhouses, as well as larger 4, 5, and 6-bedroom luxury villas. The development also includes townhouses with various bedroom configurations, designs, and styles.",
  },
  {
    question: "What is the payment plan for The Heights?",
    answer:
      "The first phase of townhouses at The Heights by Emaar is being released with an 80/20 Payment Plan. As part of this payment plan, 80% of the total payment is paid during construction with the remaining 20% paid at handover.",
  },
  {
    question: "Where is The Heights Country Club located?",
    answer:
      "The Heights by Emaar is located in Dubailand along the E611 (Emirates Road), offering direct access to major destinations across Dubai. Residents can reach Dubai Outlet Mall and The Valley in under 10 minutes, while Downtown Dubai is just 20-35 minutes away.",
  },
  {
    question: "What amenities are available at The Heights?",
    answer:
      "Residents enjoy a state-of-the-art country club and wellness centre, swimming pools, cycling tracks, landscaped parks, children's play areas, jogging tracks, multi-sport courts, yoga spaces, and 1.36 million sq. meters of thoughtfully planned open space.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Contact Us for More Info
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
