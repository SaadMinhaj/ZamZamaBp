import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const openWhatsApp = () => {
    const phone = "+923122726998";
    const message =
      "Hello ZamZama Beauty Parlor! I would like to book an appointment.";
    window.open(
      `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
      data-testid="whatsapp-float"
    >
      <FaWhatsapp />
    </button>
  );
}
