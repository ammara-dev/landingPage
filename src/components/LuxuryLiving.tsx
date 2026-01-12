import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LuxuryLiving() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Luxury Living at The Heights
              <br />
              Country Club and Wellness
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              The Heights Country Club development promises to showcase the very best of
              Emaar&apos;s nearly 30 years of experience. An unparalleled 81 million square feet 
              development with a valuation of over AED 55 billion.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              At The Heights community, Emaar is committed to enhancing lives by
              offering spaces designed to promote health and relaxation. Within the
              community, the centrally located wellness center acts as a comprehensive
              hub, equipped with advanced fitness technology and wellness programs.
              The area is enriched by lush greenways, serene water bodies, and scenic
              ponds, creating peaceful pathways throughout the 1.36 million square meters
              of thoughtfully planned open space.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1F2937] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#374151] transition-all hover:shadow-xl hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Community-view.jpg"
                alt="The Heights Community View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
