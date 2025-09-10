import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const openBookingModal = () => {
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");

      if (
        isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(e.target as Node) &&
        mobileMenuButton &&
        !mobileMenuButton.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-card/90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              className="h-6 w-auto cursor-pointer"
              src="/public/ZamZama-logo/logo.svg"
              alt="ZamZama Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-800 hover:text-white hover:bg-[#fac6cf]/80  px-3 py-2 text-sm font-medium transition-all rounded-md"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-white hover:bg-[#fac6cf]/80  px-3 py-2 text-sm font-medium transition-all rounded-md"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-800 hover:text-white hover:bg-[#fac6cf]/80 px-3 py-2 text-sm font-medium transition-all rounded-md"
                data-testid="nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-800 hover:text-white hover:bg-[#fac6cf]/80  px-3 py-2 text-sm font-medium transition-all rounded-md"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-800 hover:text-white hover:bg-[#fac6cf]/80  px-3 py-2 text-sm font-medium transition-all rounded-md"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <button
                onClick={openBookingModal}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                data-testid="nav-book-now"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-y-0 left-0 w-64 bg-card shadow-xl z-[60]"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold text-primary">ZamZama</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800"
                  data-testid="close-mobile-menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-800 hover:text-white hover:bg-primary/80 py-2 px-3 text-sm font-medium transition-all w-full text-left rounded-md"
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-800 hover:text-white hover:bg-primary/80 py-2 px-3 text-sm font-medium transition-all w-full text-left rounded-md"
                  data-testid="mobile-nav-about"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-800 hover:text-white hover:bg-primary/80 py-2 px-3 text-sm font-medium transition-all w-full text-left rounded-md"
                  data-testid="mobile-nav-services"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block text-gray-800 hover:text-white hover:bg-primary/80 py-2 px-3 text-sm font-medium transition-all w-full text-left rounded-md"
                  data-testid="mobile-nav-gallery"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-800 hover:text-white hover:bg-primary/80 py-2 px-3 text-sm font-medium transition-all w-full text-left rounded-md"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </button>
                <button
                  onClick={openBookingModal}
                  className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
                  data-testid="mobile-nav-book-now"
                >
                  Book Now
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
