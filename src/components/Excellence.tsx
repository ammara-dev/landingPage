import Image from "next/image";
import { ArrowRight, MapPin, TreePine, Bike, Store, Waves, CheckCircle2 } from "lucide-react";

const keyFeatures = [
  { 
    icon: MapPin,
    title: "Multiple Entry & Exit Points", 
    description: "In nearly all directions for easy access" 
  },
  { 
    icon: TreePine,
    title: "81M+ Sq. Ft Land Area", 
    description: "Vast development spanning incredible space" 
  },
  { 
    icon: Bike,
    title: "38km Cycling Track", 
    description: "Extensive paths for active lifestyle" 
  },
  { 
    icon: TreePine,
    title: "1.36M Sq. M Open Space", 
    description: "Thoughtfully planned green areas" 
  },
  { 
    icon: Store,
    title: "40,000 Sq. M Retail", 
    description: "Comprehensive shopping and dining" 
  },
  { 
    icon: Waves,
    title: "4 Separate Lagoons", 
    description: "Serene water features throughout" 
  },
  { 
    icon: TreePine,
    title: "Vast Green Parks", 
    description: "Parks spread throughout the community" 
  },
];

export default function Excellence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Key Plan Features
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the exceptional features that make The Heights a world-class community
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 mb-4 bg-[#1F2937] rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image with Description */}
        <div className="relative rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="400">
          <div className="relative h-[400px]">
            <Image
              src="https://heightscountryclub.ae/wp-content/uploads/2024/04/heights-country-club-dubai.jpeg"
              alt="The Heights Country Club by Emaar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/90 via-[#1F2937]/60 to-transparent"></div>
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                A Masterfully Planned Community
              </h3>
              <p className="text-white/90 leading-relaxed">
                The Heights Country Club features an extraordinary master plan with unparalleled connectivity, 
                vast open spaces, and world-class amenities designed for modern luxury living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
