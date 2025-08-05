type  BotaoPadraoProps = {
  colorButton: string;
  fontColor?: string;
  text: string;
} 

//componente de botão padrão
export default function BotaoPadrao({ colorButton, fontColor, text }: BotaoPadraoProps) {
  return (
    <button onClick={() => {}} className={`p-2  ${colorButton} rounded-2xl transition-colors cursor-pointer max-w-48 text-white `}>
      {text}
    </button>
  );
} 