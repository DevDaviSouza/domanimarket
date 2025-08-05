import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { CarrinhoProvider } from "./context/carrinhoContext";

export const metadata: Metadata = {
  title: "Domani Market",
  description: "Loja de produtos variados",
  icons: {
    icon: "/favicon.png",
    
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // O CarrinhoProvider envolve o layout principal para fornecer o contexto do carrinho
    // Isso permite que todos os componentes dentro do layout acessem o contexto do carrinho
    <CarrinhoProvider>
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
    </CarrinhoProvider>
  );
}
