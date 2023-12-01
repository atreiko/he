import { isValidArgument } from '@/store/utils/isValidArgument';

export const calcFilledBowlPrice = <T extends string | number>(
  pricePerGram: T,
  capacity: T
): string | null => {
  if (!isValidArgument(pricePerGram, capacity)) {
    return null;
  }

  const numericPricePerGram = Number(pricePerGram);
  const numericCapacity = Number(capacity);

  const filledBowlPrice = (numericPricePerGram * numericCapacity).toFixed(2).toString();

  return filledBowlPrice
};
