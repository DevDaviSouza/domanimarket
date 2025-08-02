import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return(
    <header className="flex flex-row items-center justify-between p-6 bg-gray-800 text-white">
      <Link href="/"><Image src="/logo.png" alt="logo" width={150} height={150} /> </Link>
      
      <Link href="carrinho" className="flex items-center justify-center rounded-full bg-orange-700 w-12 h-12">
        <Image src="/carrinho.svg" alt="carrinho" width={30} height={30}/> 
      </Link>
    </header>
  )
}