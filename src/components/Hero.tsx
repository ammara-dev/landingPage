import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  { value: "81M", label: "Sq. Ft Development" },
  { value: "AED 55B+", label: "Valuation" },
  { value: "1.36M", label: "Sq. Mt Open Space" },
];

const specializations = [
  "Developed by Emaar Properties",
  "World-Class Wellness Amenities",
  "Sustainable & Future-Ready Design",
  "Premium Freehold Properties",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://heightscountryclub.ae/wp-content/uploads/2024/04/heights-country-club-dubai.jpeg"
          alt="The Heights Country Club Dubai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-stone-500/20 backdrop-blur-sm text-stone-300 px-4 py-2 rounded-full text-sm mb-6 border border-stone-500/30">
            <span className="w-2 h-2 bg-stone-300 rounded-full animate-pulse"></span>
            Dubai&apos;s Newest World-Class High-End Development
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The Heights Country Club and Wellness by Emaar
          </h1>
          
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            An unparalleled 81 million square feet development with a valuation of over AED 55 billion. 
            Located in the heart of Dubai, this stunning new freehold project is poised to transform 
            the landscape of luxury living in the UAE.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6 mb-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                <div className="text-white/60 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="#properties"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            Explore Properties
          </Link>

          {/* Specializing In */}
          <div className="mt-12">
            <p className="text-white/60 text-sm mb-4 italic">Specializing in:</p>
            <div className="flex flex-wrap gap-3">
              {specializations.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20"
                >
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
