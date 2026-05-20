import WhatsAppButton from "@/components/WhatsAppButton"
import CookieBanner from "@/components/CookieBanner"

export default function Page() {
  return (
    <main className="text-gray-900">

      {/* WhatsApp + Cookies */}
      <WhatsAppButton />
      <CookieBanner />

      {/* HERO */}
      <section className="bg-gray-900 text-white p-20 text-center">
        <h1 className="text-5xl font-bold">
          Decastro Engenharia
        </h1>

        <p className="mt-4 text-xl">
          Segurança do Trabalho em Curitiba
        </p>

        <a
          href="https://wa.me/5541999784293"
          className="inline-block mt-8 bg-orange-500 px-6 py-3 rounded"
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* SERVIÇOS */}
      <section className="p-20">
        <h2 className="text-3xl font-bold mb-10">
          Serviços de Segurança do Trabalho em Curitiba
        </h2>

        <ul className="grid md:grid-cols-3 gap-6">
          <li>Treinamentos NR</li>
          <li>Linhas de Vida</li>
          <li>Pontos de Ancoragem</li>
          <li>Projetos Técnicos</li>
          <li>Bombeiro Civil</li>
          <li>Consultoria</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white p-20 text-center">
        <h2 className="text-4xl font-bold">
          Fale com um especialista agora
        </h2>

        <a
          href="https://wa.me/5541999784293"
          className="inline-block mt-6 bg-white text-orange-500 px-6 py-3 rounded font-bold"
        >
          WhatsApp
        </a>
      </section>

    </main>
  )
}
