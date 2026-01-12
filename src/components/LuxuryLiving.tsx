import Image from "next/image";
import { Building2 } from "lucide-react";

export default function LuxuryLiving() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Luxury Living at The Heights
              <br />
              Country Club and Wellness
            </h2>
            
            <p className="text-gray-600 mb-4">
              The Heights Country Club development promises to showcase the very best of
              Emaar&apos;s nearly 30 years of experience. An unparalleled 81 million square feet 
              development with a valuation of over AED 55 billion.
            </p>
            
            <p className="text-gray-600 mb-6">
              At The Heights community, Emaar is committed to enhancing lives by
              offering spaces designed to promote health and relaxation. Within the
              community, the centrally located wellness center acts as a comprehensive
              hub, equipped with advanced fitness technology and wellness programs.
              The area is enriched by lush greenways, serene water bodies, and scenic
              ponds, creating peaceful pathways throughout the 1.36 million square meters
              of thoughtfully planned open space.
            </p>

            {/* Property Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Building2 className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Serro at The Heights</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    3, 4 and 5 Bedroom Villas. Full
                    <br />
                    Details Coming Soon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Building2 className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salva at The Heights</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    3, 4 and 5 Bedroom Villas. Full
                    <br />
                    Details Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://heightscountryclub.ae/wp-content/uploads/2024/05/The-Heights-Emaar.jpg"
                alt="The Heights Emaar Luxury Villa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
