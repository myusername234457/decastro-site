export default function Page() {
  const whatsapp = "https://wa.me/5541999784293?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Decastro%20Engenharia%20e%20quero%20mais%20informa%C3%A7%C3%B5es"

  return (
    <main style={{ fontFamily: "Arial", margin: 0 }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #eee",
        alignItems: "center"
      }}>
        <div style={{ fontWeight: "bold", fontSize: 20 }}>
          🔶 Decastro Engenharia
        </div>

        <nav style={{ display: "flex", gap: 20 }}>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href={whatsapp} target="_blank">
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={{
        padding: "80px 20px",
        background: "#2b3a4a",
        color: "white"
      }}>
        <h1 style={{ fontSize: 42 }}>
          Engenharia e Soluções Técnicas
        </h1>

        <p style={{ maxWidth: 600 }}>
          Projetos, treinamentos e soluções em engenharia para empresas e indústrias.
        </p>

        <a
          href={whatsapp}
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "12px 20px",
            background: "#f59e0b",
            color: "black",
            fontWeight: "bold",
            borderRadius: 8
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ padding: 40 }}>
        <h2>Serviços</h2>

        <ul>
          <li>🎓 Treinamentos NR</li>
          <li>🧯 Bombeiro Civil</li>
          <li>📐 Projetos Técnicos</li>
          <li>🔩 Ponto de Ancoragem</li>
          <li>🦺 Linha de Vida</li>
          <li>🏢 Consultoria</li>
        </ul>
      </section>

      {/* PROJETOS */}
      <section id="projetos" style={{ padding: 40, background: "#f5f5f5" }}>
        <h2>Projetos realizados</h2>

        <div style={{ display: "grid", gap: 20 }}>
          <div>
            <h3>Projeto Industrial</h3>
            <p>Estruturação e adequação técnica em ambiente industrial.</p>
          </div>

          <div>
            <h3>Linha de Vida</h3>
            <p>Instalação de sistemas para trabalho em altura.</p>
          </div>

          <div>
            <h3>Projeto Corporativo</h3>
            <p>Consultoria e adequação para empresas.</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: 40 }}>
        <h2>Contato</h2>

        <p>Curitiba - PR</p>
        <p>(41) 99978-4293</p>

        <a href={whatsapp} target="_blank">
          Chamar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 20,
        borderTop: "1px solid #eee",
        textAlign: "center"
      }}>
        <button
          onClick={() => alert("Política de privacidade: usamos apenas dados para contato.")}
        >
          Política de Privacidade
        </button>

        <p style={{ marginTop: 10 }}>
          Criado por MelhoresVendas
        </p>
      </footer>

    </main>
  )
}
