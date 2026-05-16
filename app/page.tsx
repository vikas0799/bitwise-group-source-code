import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import BrandBanner from "@/components/sections/BrandBanner";
import BusinessPillars from "@/components/sections/BusinessPillars";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandBanner />
        <About />
        <BusinessPillars />
        <WhyChooseUs />
        <Industries />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
