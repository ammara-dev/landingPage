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
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Location
            </h2>
            
            <p className="text-gray-600 mb-6">
              The Heights by Emaar is located in Dubailand along the E611 (Emirates Road), 
              offering direct access to major destinations across Dubai. Positioned between 
              The Valley and other emerging residential hubs, The Heights enjoys a well-connected 
              location that balances city convenience with a nature-focused lifestyle.
            </p>

            {/* Travel Times */}
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-stone-600" />
                Travel Times
              </h3>
              <div className="grid gap-3">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <span className="text-gray-700">{location.name}</span>
                    <span className="text-stone-600 font-medium">{location.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Destinations */}
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-stone-600" />
                Nearby Destinations
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearbyDestinations.map((destination, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
                  >
                    {destination}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://heightscountryclub.ae/wp-content/uploads/2024/04/heights-country-club-dubai.jpeg"
                alt="The Heights Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-gray-900 font-semibold">E611 Emirates Road, Dubailand</p>
                  <p className="text-gray-500 text-sm">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
