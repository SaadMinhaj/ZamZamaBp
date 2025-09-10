import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X, CalendarCheck } from "lucide-react";
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

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return await apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted!",
        description:
          "Thank you! We will contact you soon to confirm your appointment.",
      });
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const closeModal = () => {
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };

  const openWhatsApp = () => {
    const phone = "+923122726998";
    const message = `Hello ZamZama Beauty Parlor! I would like to book an appointment.

Name: ${formData.name}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
${formData.message ? `Message: ${formData.message}` : ""}`;

    window.open(
      `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      id="booking-modal"
      className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="bg-card rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3
              className="text-2xl font-bold text-foreground"
              data-testid="booking-modal-title"
            >
              Book Appointment
            </h3>
            <button
              onClick={closeModal}
              className="text-muted-foreground hover:text-foreground"
              data-testid="booking-modal-close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="booking-name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Full Name *
              </Label>
              <Input
                id="booking-name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
                required
                data-testid="booking-form-name"
              />
            </div>

            <div>
              <Label
                htmlFor="booking-phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Phone Number *
              </Label>
              <Input
                id="booking-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+92 300 1234567"
                required
                data-testid="booking-form-phone"
              />
            </div>

            <div>
              <Label
                htmlFor="booking-service"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Service *
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                name="service"
              >
                <SelectTrigger data-testid="booking-form-service">
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
                  {/* <SelectItem value="eyebrow-lashes">Eyebrow & Lashes</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="booking-date"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Preferred Date *
                </Label>
                <Input
                  id="booking-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  min={today}
                  required
                  data-testid="booking-form-date"
                />
              </div>
              <div>
                <Label
                  htmlFor="booking-time"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Preferred Time *
                </Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) =>
                    setFormData({ ...formData, time: value })
                  }
                >
                  <SelectTrigger data-testid="booking-form-time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label
                htmlFor="booking-message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Additional Message
              </Label>
              <Textarea
                id="booking-message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                placeholder="Any special requirements or notes..."
                data-testid="booking-form-message"
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={bookingMutation.isPending}
                className="flex-1 bg-primary text-primary-foreground hover:opacity-90"
                data-testid="booking-form-submit"
              >
                <CalendarCheck className="w-4 h-4 mr-2" />
                {bookingMutation.isPending ? "Booking..." : "Book Appointment"}
              </Button>
              <Button
                type="button"
                onClick={openWhatsApp}
                className="flex-1 bg-green-500 text-white hover:bg-green-600"
                data-testid="booking-form-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
