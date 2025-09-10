import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Bride",
    review:
      "I loved my bridal makeup. ZamZama Beauty Parlor made my special day truly memorable.",
    avatar: "A",
    avatarColor: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    role: "Regular Client",
    review:
      "Professional, clean, and very caring staff. They made me feel comfortable and beautiful. Highly recommended!",
    avatar: "F",
    avatarColor: "bg-secondary text-secondary-foreground",
  },
  {
    id: 3,
    name: "Sarah Ali",
    role: "Hair Styling Client",
    review:
      "Great hair styling! They knew exactly what I wanted and did even better than I expected.",
    avatar: "S",
    avatarColor: "bg-accent text-accent-foreground",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            data-testid="testimonials-title"
          >
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="testimonials-subtitle"
          >
            See what our customers love about their time at ZamZama Beauty
            Parlor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-card rounded-xl p-6 shadow-lg animate-on-scroll"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <div
                  className="text-yellow-400 text-lg flex"
                  data-testid={`testimonial-stars-${testimonial.id}`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p
                className="text-muted-foreground mb-4 italic"
                data-testid={`testimonial-review-${testimonial.id}`}
              >
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center font-semibold mr-3`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4
                    className="font-semibold text-foreground"
                    data-testid={`testimonial-name-${testimonial.id}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid={`testimonial-role-${testimonial.id}`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
