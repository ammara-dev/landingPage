"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/img1.png",
    alt: "The Heights Country Club Dubai - Aerial View",
    category: "Community",
  },
  {
    id: 2,
    src: "/img2.png",
    alt: "Luxurious Villa Exterior",
    category: "Villas",
  },
  {
    id: 3,
    src: "/img3.png",
    alt: "Elegant Interior Design",
    category: "Villas",
  },
  {
    id: 4,
    src: "/img4.png",
    alt: "Modern Townhouse",
    category: "Townhouses",
  },
  {
    id: 5,
    src: "/img5.png",
    alt: "Community Amenities",
    category: "Amenities",
  },
  {
    id: 6,
    src: "/img6.png",
    alt: "Spacious Living Area",
    category: "Villas",
  },
  {
    id: 7,
    src: "/img7.png",
    alt: "Premium Finishing",
    category: "Townhouses",
  },
  {
    id: 8,
    src: "/img8.png",
    alt: "Lush Green Landscapes",
    category: "Community",
  },
  {
    id: 9,
    src: "/img9.png",
    alt: "Wellness Center",
    category: "Amenities",
  },
  {
    id: 10,
    src: "/3 bedroom.png",
    alt: "3 Bedroom Villa",
    category: "Villas",
  },
  {
    id: 11,
    src: "/4 bedroom.png",
    alt: "4 Bedroom Villa",
    category: "Villas",
  },
  {
    id: 12,
    src: "/5 bedroom.png",
    alt: "5 Bedroom Villa",
    category: "Villas",
  },
  {
    id: 13,
    src: "/Community-view.jpg",
    alt: "Community Overview",
    category: "Community",
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalSlides = Math.ceil(galleryImages.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore The Heights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty and elegance of The Heights Country Club through
            our curated gallery of stunning visuals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons for Desktop */}
          <div className="hidden md:flex justify-end gap-3 mb-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all text-gray-600"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all text-gray-600"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop View (3 items) */}
            <div
              className="hidden md:flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentSlide * (100 + 1.5)}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-3 gap-6">
                  {galleryImages
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((image, idx) => (
                      <div
                        key={image.id}
                        className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(slideIndex * 3 + idx)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            {/* Mobile View (Single scrollable/swipeable row) */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="snap-center flex-shrink-0 w-[85vw] relative h-[400px] rounded-2xl overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] mx-4">
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg">
                <span className="font-bold">{currentImageIndex + 1}</span>
                <span className="text-white/60"> / {galleryImages.length}</span>
              </p>
              <p className="text-sm text-white/80 mt-1">
                {galleryImages[currentImageIndex].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
