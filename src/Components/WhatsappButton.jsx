const PHONE = "923107949463";

function WhatsappButton({
  message = "Assalam o Alaikum! I want to order flowers.",
}) {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90"
    >
      Order on WhatsApp
    </a>
  );
}

export default WhatsappButton;