import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LuxuryLiving from "@/components/LuxuryLiving";
import FeaturedProperties from "@/components/FeaturedProperties";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Excellence from "@/components/Excellence";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PaymentPlan from "@/components/PaymentPlan";
import FloorPlan from "@/components/FloorPlan";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LuxuryLiving />
      <Amenities />
      <FeaturedProperties />
      <FloorPlan />
      <Gallery />
      <Location />
      <Excellence />
      <PaymentPlan />
      <FAQ />
      {/* <Testimonials /> */}
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
