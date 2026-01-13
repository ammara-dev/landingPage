import Image from "next/image";
import { Bed, Car, Home, TreePine, CheckCircle2 } from "lucide-react";

const floorPlans = [
  {
    id: 1,
    title: "3-Bedroom Townhouse",
    image: "/3-bedroom-townhouse-floor-plan.jpg",
    bedrooms: 3,
    highlights: [
      "Open-plan living and dining areas that create a welcoming space",
      "Kitchens equipped with high-end appliances and ample storage",
      "Master bedroom with an en-suite bathroom, walk-in closet and balcony",
      "Two bedrooms with shared bathrooms and a balcony",
      "Private garden for family gatherings and relaxation",
      "Undercover parking for two cars",
    ],
  },
  {
    id: 2,
    title: "4-Bedroom Townhouse",
    image: "/4-Bedroom-Townhouse-Layout.jpg",
    bedrooms: 4,
    highlights: [
      "Generous living areas connected to dining and kitchen areas",
      "A kitchen designed for culinary enthusiasts, with premium appliances",
      "Master bedroom with an en-suite bathroom and walk-in closet",
      "Additional bedroom on the ground floor, ideal for guests or as a home office",
      "Landscaped garden for outdoor entertaining",
      "Undercover parking for two cars",
    ],
  },
  {
    id: 3,
    title: "4-Bedroom Villa",
    image: "/4-Bedroom-Villa-Floor-Plan.jpg",
    bedrooms: 4,
    highlights: [
      "Expansive open-plan living and dining spaces",
      "Chef's kitchen with premium appliances and a large island for casual dining",
      "Master bedroom with an en-suite bathroom, walk-in closet, and private balcony",
      "Three additional bedrooms with ample closet space and en-suite or shared bathrooms",
      "Large garden area for family gatherings and leisure activities",
      "2nd Storey roof terrace along with lounge and bathroom",
      "Undercover parking for two cars",
    ],
  },
];

export default function FloorPlan() {
  return (
    <section id="floor-plan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Heights by Emaar Floor Plan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore the exclusive floor plans for The Heights Country Club by Emaar Properties. 
            This esteemed development features a range of 3, 4, and 5-bedroom villas and townhouses, 
            each designed to offer luxury and comfort.
          </p>
        </div>

        {/* Floor Plans */}
        <div className="space-y-20">
          {floorPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-contain bg-gray-50"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1F2937] text-white p-3 rounded-xl">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {plan.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Bed className="w-4 h-4" />
                        {plan.bedrooms} Bedrooms
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Car className="w-4 h-4" />
                        2 Parking
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-[#1F2937] mb-4 text-lg">Highlights</h4>
                
                <div className="space-y-3 mb-6">
                  {plan.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1F2937] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#1F2937] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#374151] transition-all hover:shadow-xl hover:scale-105"
                >
                  Request More Details
                  <Home className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-[#1F2937] to-[#374151] rounded-3xl p-8 md:p-12" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Discover the Perfect Home for Your Family
          </h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-6">
            Each townhouse is crafted with attention to detail, ensuring a luxurious living experience 
            in one of Dubai&apos;s most desirable communities.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
          >
            Schedule a Viewing
            <TreePine className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
