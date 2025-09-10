import { Calendar, Eye } from "lucide-react";

export default function HeroSection() {
  const openBookingModal = () => {
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span
            className="text-5xl md:text-6xl block text-foreground"
            data-testid="hero-title-main"
          >
            ZamZama Beauty Parlor
          </span>
          <span
            className="text-2xl md:text-5xl block text-foreground mt-2"
            data-testid="hero-title-sub"
          >
            Need a Quick Makeover?
          </span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up"
          data-testid="hero-subtitle"
        >
          We've got you covered, don't worry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <button
            onClick={openBookingModal}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            data-testid="hero-book-appointment"
          >
            <Calendar className="inline-block w-5 h-5 mr-2" />
            Book Appointment
          </button>
          <button
            onClick={scrollToServices}
            className="bg-card text-foreground border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="hero-view-services"
          >
            <Eye className="inline-block w-5 h-5 mr-2" />
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
