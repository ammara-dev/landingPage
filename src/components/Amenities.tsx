import { 
  Waves, 
  Dumbbell, 
  TreePine, 
  Bike, 
  ShoppingBag, 
  GraduationCap,
  Baby,
  Building
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
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World Class Amenities and Facilities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At The Heights by Emaar, residents are treated to an array of premier amenities 
            that blend wellness, relaxation, and luxury. Designed for an active and healthy lifestyle.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-amber-100 rounded-xl flex items-center justify-center">
                <amenity.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-gray-500 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            State-Of-The-Art Amenities With Serene Landscapes
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto">
            Beautifully landscaped parks provide serene settings for outdoor activities, 
            while event plazas host a variety of wellness events, yoga sessions, and community gatherings. 
            These amenities, combined with contemporary living spaces and breathtaking views, 
            ensure a luxurious and balanced lifestyle for all residents.
          </p>
        </div>
      </div>
    </section>
  );
}
