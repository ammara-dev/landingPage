import { 
  Waves, 
  Dumbbell, 
  TreePine, 
  Bike, 
  ShoppingBag, 
  GraduationCap,
  Baby,
  Building,
  Sparkles
} from "lucide-react";

const amenities = [
  {
    icon: Building,
    title: "Clubhouse",
    description: "State-of-the-art country club and wellness centre",
  },
  {
    icon: ShoppingBag,
    title: "Retail Outlets",
    description: "Convenient shopping and dining options",
  },
  {
    icon: TreePine,
    title: "1.36M Sq. Mt Open Space",
    description: "Thoughtfully planned green areas",
  },
  {
    icon: Waves,
    title: "Swimming Pools",
    description: "Multiple pools for residents",
  },
  {
    icon: Dumbbell,
    title: "Fitness Areas",
    description: "Indoor/Outdoor fitness facilities",
  },
  {
    icon: Bike,
    title: "38 Cycling Tracks",
    description: "Extensive cycling and jogging paths",
  },
  {
    icon: Baby,
    title: "Kids Playgrounds",
    description: "Safe play areas for children",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description: "Educational facilities nearby",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F2937] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F2937] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#1F2937]/10 text-[#1F2937] px-4 py-2 rounded-full text-sm mb-4 font-medium">
            <Sparkles className="w-4 h-4" />
            Premium Lifestyle
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            World Class Amenities and Facilities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At The Heights by Emaar, residents are treated to an array of premier amenities 
            that blend wellness, relaxation, and luxury. Designed for an active and healthy lifestyle.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1F2937] to-[#374151] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <amenity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base">{amenity.title}</h3>
              <p className="text-gray-500 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="relative rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="400">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#1F2937]"></div>
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              State-Of-The-Art Amenities With Serene Landscapes
            </h3>
            <p className="text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
              Beautifully landscaped parks provide serene settings for outdoor activities, 
              while event plazas host a variety of wellness events, yoga sessions, and community gatherings. 
              These amenities, combined with contemporary living spaces and breathtaking views, 
              ensure a luxurious and balanced lifestyle for all residents.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#1F2937] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
            >
              Discover More
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
