export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5548999999999"
      target="_blank"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "green",
        color: "white",
        padding: "12px 16px",
        borderRadius: "50px",
        textDecoration: "none",
        zIndex: 9999,
      }}
    >
      WhatsApp
    </a>
  );
}
