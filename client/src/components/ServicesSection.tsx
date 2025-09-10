import { CalendarPlus } from "lucide-react";

const services = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "Complete bridal transformation with traditional and modern looks.",
    image: "/public/Makeup/bride2.jpg",
    buttonColor: "bg-primary text-primary-foreground",
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    description:
      "Let your look shine with makeup that highlights your best for any occasion.",
    image: "/public/Makeup/partymakeup.png",
    buttonColor: "bg-secondary text-secondary-foreground",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description:
      "Professional cuts, styling, and treatments for all hair types.",
    image: "/public/Makeup/hairstyle.jpg",
    buttonColor: "bg-accent text-accent-foreground",
  },
  {
    id: "facial-skincare",
    title: "Facials & Skincare",
    description: "Nourishing facials to brighten and revive your skin.",
    image: "/public/Makeup/facial.jpg",
    buttonColor: "bg-primary text-primary-foreground",
  },
  {
    id: "mehndi",
    title: "Mehndi",
    description:
      "Stunning traditional and modern mehndi designs to complete your look.",
    image: "/public/Makeup/mehndi.jpg",
    buttonColor: "bg-secondary text-secondary-foreground",
  },
  {
    id: "eyebrow-threading",
    title: "Eyebrow & Threading",
    description:
      "Expert shaping and threading for neat, naturally beautiful eyes.",
    image: "/public/Makeup/eyebrowthreading.jpg",
    buttonColor: "bg-accent text-accent-foreground",
  },
];

export default function ServicesSection() {
  const bookService = (serviceId: string) => {
    const modal = document.getElementById("booking-modal");
    const serviceSelect = document.querySelector(
      '#booking-modal select[name="service"]'
    ) as HTMLSelectElement;

    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";

      // Pre-populate service selection
      if (serviceSelect) {
        serviceSelect.value = serviceId;
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            data-testid="services-title"
          >
            Our <span className="text-primary">Services</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="services-subtitle"
          >
            Explore our beauty services that help you look and feel your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card bg-card rounded-xl shadow-lg p-6 animate-on-scroll"
            >
              <img
                src={service.image}
                alt={`${service.title} Service`}
                className="w-full h-48 object-cover rounded-lg mb-4"
                data-testid={`service-image-${service.id}`}
              />
              <h3
                className="text-xl font-semibold mb-2 text-foreground"
                data-testid={`service-title-${service.id}`}
              >
                {service.title}
              </h3>
              <p
                className="text-muted-foreground mb-4"
                data-testid={`service-description-${service.id}`}
              >
                {service.description}
              </p>
              <button
                onClick={() => bookService(service.id)}
                className={`w-full ${service.buttonColor} py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}
                data-testid={`book-service-${service.id}`}
              >
                <CalendarPlus className="inline-block w-4 h-4 mr-2" />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
