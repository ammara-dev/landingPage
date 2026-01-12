"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Rashid",
    role: "Property Investor, Dubai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The Heights by Emaar represents the pinnacle of luxury living in Dubai. The attention to detail in design, the world-class amenities, and the wellness-focused approach make this development truly exceptional. As someone who has invested in multiple Emaar projects, I can confidently say this is their most ambitious and promising development yet.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The Heights Country Club sets a new standard for residential communities. The integration of wellness facilities, sustainable design, and Emaar's proven track record of excellence makes this an outstanding investment opportunity. The 80/20 payment plan also makes it accessible for serious buyers.",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Family Home Buyer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "We've been searching for the perfect family home in Dubai, and The Heights exceeded all our expectations. The spacious villa layouts, proximity to schools, and the emphasis on green spaces and healthy living made this an easy choice for our family's future.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              What People Are Saying
            </h2>
            <p className="text-gray-600">
              Hear from investors and buyers excited about The Heights Country Club by Emaar.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
