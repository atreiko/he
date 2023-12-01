import { isValidArgument } from '@/store/utils/isValidArgument';

export const useFilledBowlPrice = <T extends string | number>(
  pricePerGram: T,
  capacity: T
): { filledBowlPrice: string | null } => {
  if (!isValidArgument(pricePerGram, capacity)) {
    return { filledBowlPrice: null };
  }

  const numericPricePerGram = Number(pricePerGram);
  const numericCapacity = Number(capacity);

  const filledBowlPrice = (numericPricePerGram * numericCapacity).toFixed(1);

  return { filledBowlPrice: filledBowlPrice.toString() ?? null };
};
