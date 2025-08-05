
export default function alteraNome(nome: string): string {
  if (nome.length > 20) {
    return nome.slice(0, 20) + "...";
  }
  return nome;
}