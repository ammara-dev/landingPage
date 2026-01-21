import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const locations = [
  { name: "Dubai Outlet Mall & The Valley", time: "Under 10 mins" },
  { name: "Academic City & Global Village", time: "15-20 mins" },
  { name: "Downtown Dubai & Dubai Hills", time: "20-35 mins" },
  { name: "Dubai International Airport", time: "25-35 mins" },
];

const nearbyDestinations = [
  "Dubai Investment Park",
  "The Oasis by Emaar",
  "Dubai South",
  "Al Maktoum International Airport",
];

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Strategic Location
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              The Heights by Emaar is located in Dubailand along the E611 (Emirates Road), 
              offering direct access to major destinations across Dubai. Positioned between 
              The Valley and other emerging residential hubs, The Heights enjoys a well-connected 
              location that balances city convenience with a nature-focused lifestyle.
            </p>

            {/* Travel Times */}
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1F2937]" />
                Travel Times
              </h3>
              <div className="grid gap-3">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all hover:shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-gray-700 font-medium">{location.name}</span>
                    <span className="text-[#1F2937] font-semibold">{location.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Destinations */}
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#1F2937]" />
                Nearby Destinations
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearbyDestinations.map((destination, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1F2937]/10 rounded-full text-[#1F2937] text-sm font-medium hover:bg-[#1F2937]/20 transition-colors"
                  >
                    {destination}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/height-brochure-images/34.jpg"
                alt="The Heights Location Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1F2937] text-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="font-bold text-lg mb-1">E611 Emirates Road, Dubailand</p>
              <p className="text-white/80 text-sm">Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
