import { Whatsapp } from "@/components/Icons";

const WhatsAppButton = () => {
  const whatsappNumber = "5519982368224";
  const message = "Olá! Gostaria de solicitar um orçamento.";
  
  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <Whatsapp className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppButton;
