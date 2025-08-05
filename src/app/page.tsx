import CardProduto from "./components/cardProduto";
import { CartProvider } from "./context/cartContext";
import {Api, ProdutoProps} from "./services/api";



export default async function Home() {

  // salvar os produtos da API em um array
  const data: ProdutoProps[] = await Api();
  
  return (
    <main className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-white text-center text-3xl">SEJA BEM VINDO A NOSSA LOJA!</h1>
      
        <input type="text" className="w-3/5 bg-neutral-200 rounded-2xl h-8 p-3 outline-none" placeholder="digite o nome de um produto..."/>
        
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {
          // mapear os produtos e renderizar o componente CardProduto
          // passando as props necessárias
          data.map(produto => (
            <CardProduto 
              CardProdutoProps={{
                id: produto.id,
                nome: produto.title,
                preco: produto.price,
                imagem: produto.image
              }}
              key={produto.id}
            />
          ))

        }
      </section>
    </main>
    
  );
}
