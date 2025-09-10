import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingCTASection from "@/components/BookingCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Initialize animations on load
    document
      .querySelectorAll(
        ".animate-fade-in, .animate-slide-up, .animate-scale-in"
      )
      .forEach((el) => {
        (el as HTMLElement).style.animationDelay = Math.random() * 0.5 + "s";
      });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-foreground font-sans">
      <WhatsAppFloat />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <BookingCTASection />
        <ContactSection />
      </main>
      <Footer />
      <BookingModal />
    </div>
  );
}
