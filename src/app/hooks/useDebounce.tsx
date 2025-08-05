import { useState, useEffect } from "react";

// Custom hook useDebounce para otimizar a busca
// Recebe um valor e um delay (padrão 300ms) e retorna o valor debounced
// O valor só é atualizado após o delay, evitando atualizações excessivas durante a digitação
export default function useDebounce<T>(value: T, delay: number = 300): T { 
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}