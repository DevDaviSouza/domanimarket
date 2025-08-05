//função que altera o nome de um item se ele for maior que 20 caracteres, adicionando "..." ao final.
export default function alteraNome(nome: string): string {
  if (nome.length > 20) {
    return nome.slice(0, 20) + "...";
  }
  return nome;
}