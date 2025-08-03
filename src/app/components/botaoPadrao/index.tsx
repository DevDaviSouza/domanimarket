type  BotaoPadraoProps = {
  colorButton: string;
  fontColor?: string;
  text: string;
} 

export default function BotaoPadrao({ colorButton, fontColor, text }: BotaoPadraoProps) {
  return (
    <button className={`p-2 bg-${colorButton} text-${fontColor} rounded-2xl transition-colors cursor-pointer `}>
      {text}
    </button>
  );
} 