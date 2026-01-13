import Image from "next/image";
import { ArrowRight, Bed, Square, Maximize } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "3 B/R Villa",
    location: "The Heights Country Club & Wellness",
    plotArea: "4,322 sq.ft",
    builtUp: "3,340 sq.ft",
    beds: 3,
    image: "https://heightscountryclub.ae/wp-content/uploads/2024/05/The-Heights-Emaar.jpg",
    status: "Coming Soon",
  },
  {
    id: 2,
    title: "4 B/R Villa",
    location: "The Heights Country Club & Wellness",
    plotArea: "4,650 sq.ft",
    builtUp: "4,312 sq.ft",
    beds: 4,
    image: "https://heightscountryclub.ae/wp-content/uploads/2024/04/heights-country-club-dubai.jpeg",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "5 B/R Villa",
    location: "The Heights Country Club & Wellness",
    plotArea: "6,538 sq.ft",
    builtUp: "5,760 sq.ft",
    beds: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    status: "Coming Soon",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Properties at The Heights
            </h2>
            <p className="text-gray-600 text-lg">
              Discover an extensive selection of luxurious villas and townhouses designed to offer
              <br />
              an unmatched living experience at The Heights Country Club & Wellness.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-[#1F2937] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#374151] transition-all hover:shadow-xl hover:scale-105"
          >
            Contact Us Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#1F2937] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {property.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#1F2937] text-sm font-medium mb-1">
                  {property.location}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{property.title}</h3>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Bed className="w-5 h-5 text-gray-400" />
                    <span>{property.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Maximize className="w-5 h-5 text-gray-400" />
                    <span>Plot Area: {property.plotArea}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Square className="w-5 h-5 text-gray-400" />
                    <span>Built Up: {property.builtUp}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#1F2937] text-white py-3 rounded-full font-semibold hover:bg-[#374151] transition-all hover:shadow-lg">
                  <a href="#contact" className="block">
                    Contact Us
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1F2937] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#374151] transition-all hover:shadow-xl"
          >
            Contact Us Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
