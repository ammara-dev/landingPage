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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1F2937]/30 backdrop-blur-md text-gray-100 px-5 py-2.5 rounded-full text-sm mb-6 border border-[#1F2937]/40 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Premier Luxury Development in Dubai
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
            The Heights Country Club and Wellness by Emaar
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            An unparalleled 81 million square feet development with a valuation of over AED 55 billion. 
            Located in the heart of Dubai, this stunning new freehold project is poised to transform 
            the landscape of luxury living in the UAE.
          </p>

          {/* Highlights */}
          <div className="flex flex-col md:flex-row items-start md:flex-wrap gap-10 md:gap-20 mb-8" data-aos="fade-up" data-aos-delay="300">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{item.value}</div>
                <div className="text-white/70 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Specializing In */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col md:flex-row gap-3">
            {specializations.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm border border-white/30 whitespace-nowrap hover:bg-white/20 transition-all"
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
