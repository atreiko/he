import { isValidArgument } from '@/store/utils/isValidArgument';

export const calcPricePerGram = (price: string, weight: string): string | null => {
  if (!isValidArgument(price, weight)) {
    return null;
  }

  const numericPrice = Number(price);
  const numericWeight = Number(weight);

  const pricePerGram = (numericPrice / numericWeight).toFixed(2).toString();
  
  return pricePerGram;
};
