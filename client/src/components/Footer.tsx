import { Instagram, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-evenly gap-8 text-center md:text-left">
          {/* First Section: ZamZama Beauty Parlor */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className="text-2xl font-bold mb-4 text-primary"
              data-testid="footer-title"
            >
              ZamZama Beauty Parlor
            </h3>
            <p
              className="text-gray-300 mb-4 max-w-sm"
              data-testid="footer-description"
            >
              We’re all about making you look and feel your best with expert
              care and a personal touch.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://instagram.com/zamzama_bp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://wa.me/923122726998"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                data-testid="footer-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="tel:+923122726998"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-5 h-5 text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Second Section: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Third Section: Our Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Bridal Makeup</span>
              </li>
              <li>
                <span className="text-gray-300">Party Makeup</span>
              </li>
              <li>
                <span className="text-gray-300">Hair Styling</span>
              </li>
              <li>
                <span className="text-gray-300">Facials & Skincare</span>
              </li>
              <li>
                <span className="text-gray-300">Mehndi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300" data-testid="footer-copyright">
            © 2025 ZamZama Beauty Parlor.
            <span className="block md:hidden">All rights reserved.</span>
            <span className="hidden md:inline"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
