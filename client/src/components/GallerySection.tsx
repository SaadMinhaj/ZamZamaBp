const galleryImages = [
  {
    id: 1,
    src: "/public/Makeup/bridaltransformation.png",
    alt: "Bridal Transformation 1",
  },
  {
    id: 2,
    src: "/public/Makeup/partymakeuptransformation.png",
    alt: "Party Makeup Transformation",
  },
  {
    id: 3,
    src: "/public/Makeup/rebonding.png",
    alt: "Hair Rebonding Result",
  },
  {
    id: 4,
    src: "/public/Mehandi/mehndishowcase1.png",
    alt: "Mehndi Design Showcase",
  },
  {
    id: 5,
    src: "/public/Makeup/bridaltransformation2.png",
    alt: "Bridal Transformation 2",
  },
  {
    id: 6,
    src: "/public/Mehandi/mehndishowcase2.png",
    alt: "Mehndi Design Showcase 2",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            data-testid="gallery-title"
          >
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="gallery-subtitle"
          >
            Take a look at the beautiful transformations we’ve done for our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item rounded-xl overflow-hidden shadow-lg animate-on-scroll"
              data-testid={`gallery-item-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                data-testid={`gallery-image-${image.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
