export const metadata = {
  title: "Decastro Engenharia | Segurança do Trabalho em Curitiba",
  description:
    "Decastro Engenharia em Curitiba. Segurança do trabalho, treinamentos NR, linha de vida, projetos técnicos e soluções industriais."
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
