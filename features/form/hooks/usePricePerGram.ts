// import { useCheckingForFalse } from './useCheckingForFalse';

import { isValidArgument } from "@/store/utils/isValidArgument";

export const usePricePerGram = <T extends string | number>(price: T, weight: T): { pricePerGram: string | null } => {
  if (!isValidArgument(price, weight)) {
    return { pricePerGram: null };
  }

  const numericPrice = Number(price);
  const numericWeight = Number(weight);

  const pricePerGram = (numericPrice / numericWeight).toFixed(2);

  return { pricePerGram: pricePerGram.toString() ?? null };
};
