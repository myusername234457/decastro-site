"use client"
import { useState } from "react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">
        Usamos cookies para melhorar sua experiência no site.
      </p>

      <button
        onClick={() => setVisible(false)}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Aceitar
      </button>
    </div>
  )
}
