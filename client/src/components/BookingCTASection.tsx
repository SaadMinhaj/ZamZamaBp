import { CalendarCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookingCTASection() {
  const openBookingModal = () => {
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  const openWhatsApp = () => {
    const phone = "+923122726998";
    const message =
      "Hello ZamZama Beauty Parlor! I would like to book an appointment.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            data-testid="cta-title"
          >
            Ready for a fresh look?
          </h2>
          <p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            data-testid="cta-description"
          >
            Book your appointment now and let our experts bring out your best.
            Your beauty transformation is just a click away!”
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBookingModal}
              className="bg-card text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="cta-book-slot"
            >
              <CalendarCheck className="inline-block w-5 h-5 mr-2" />
              Book Your Slot Today
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="cta-whatsapp"
            >
              <FaWhatsapp className="inline-block w-5 h-5 mr-2" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
