export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              data-testid="about-title"
            >
              About<span className="mr-2"></span>
              <span className="text-primary md:hidden">Us</span>
              <span className="text-primary hidden md:inline">
                ZamZama Beauty Parlor
              </span>
            </h2>
            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="about-description-main"
            >
              ZamZama Beauty Parlor has been serving clients for over 13 years
              with trusted hands and a personal touch. We offer bridal makeup,
              party makeup, hair rebonding, hairstyling, facials, mehndi,
              eyebrows, and more.
            </p>
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              data-testid="about-description-detail"
            >
              Whether it’s for your big day or a regular visit, our team makes
              sure you leave feeling confident. We focus on what suits you best
              in a warm and friendly environment.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-primary mb-2"
                  data-testid="stat-years"
                >
                  13+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-primary mb-2"
                  data-testid="stat-clients"
                >
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll">
            <img
              src="/public/Makeup/cover.jpg"
              alt="ZamZama Beauty Parlor Interior"
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
