type  BotaoPadraoProps = {
  colorButton: string;
  text: string;
} 

export default function BotaoPadrao({ colorButton, text }: BotaoPadraoProps) {
  return (
    <button className={`p-2 bg-${colorButton} rounded-2xl transition-colors`}>
      {text}
    </button>
  );
}