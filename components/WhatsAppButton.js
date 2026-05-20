export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Olá! Vi o site da Decastro Engenharia e quero mais informações."
  )

  return (
    <a
      href={`https://wa.me/5541999784293?text=${message}`}
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        className="w-6 h-6"
      />
    </a>
  )
}
