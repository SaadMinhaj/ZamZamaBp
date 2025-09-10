import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", phone: "", service: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/923001234567", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            data-testid="contact-title"
          >
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="contact-subtitle"
          >
            Have questions or ready to book? Contact us today. We’re here to
            help you look and feel amazing!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center" data-testid="contact-phone">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+92 312 2726998</p>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-whatsapp">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <button
                    onClick={openWhatsApp}
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +92 312 2726998
                  </button>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-address">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">
                    WXFV+V6G, Mominabad Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-hours">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Working Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Mon - Sun: 11:00 AM - 9:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Friday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div
                className="flex items-center"
                data-testid="contact-instagram"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <Instagram className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Instagram</h4>
                  <a
                    href="https://instagram.com/zamzama_bp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    @zamzama_bp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  required
                  data-testid="contact-form-name"
                />
              </div>

              <div>
                <Label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number *
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+92 300 1234567"
                  required
                  data-testid="contact-form-phone"
                />
              </div>

              <div>
                <Label
                  htmlFor="contact-service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Service Interest
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger data-testid="contact-form-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bridal-makeup">Bridal Makeup</SelectItem>
                    <SelectItem value="party-makeup">Party Makeup</SelectItem>
                    <SelectItem value="hair-styling">Hair Styling</SelectItem>
                    <SelectItem value="facial-skincare">
                      Facials & Skincare
                    </SelectItem>
                    <SelectItem value="mehndi">Mehndi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  placeholder="Tell us about your requirements."
                  data-testid="contact-form-message"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-primary-foreground hover:opacity-90"
                data-testid="contact-form-submit"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
