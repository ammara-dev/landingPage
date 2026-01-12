import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1997", label: "Year Founded" },
  { value: "70B+", label: "Market Cap (AED)" },
  { value: "110K+", label: "Projects Completed" },
  { value: "12+", label: "Countries" },
];

export default function Excellence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              A Development by EMAAR Properties
            </h2>
            <p className="text-gray-600">
              Established in 1997, Emaar Properties is a leading global property developer
            </p>
          </div>
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Contact Us Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Image with Stats Overlay */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src="https://heightscountryclub.ae/wp-content/uploads/2024/04/heights-country-club-dubai.jpeg"
              alt="The Heights Country Club by Emaar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Stats */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 max-w-4xl">
          <p className="text-gray-600 leading-relaxed">
            Extending its influence across more than 12 countries, Emaar has established a significant 
            international presence. Some of Emaar&apos;s best-known projects include the iconic Burj Khalifa, 
            the world&apos;s tallest building and Dubai Mall, the world&apos;s largest shopping destination. 
            With a market capitalisation of 70.09 billion AED and a portfolio of over 108,000 completed 
            residential units, Emaar continues its relentless pursuit of excellence and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
