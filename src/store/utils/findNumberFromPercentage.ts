import { isValidArgument } from '@/store/utils/isValidArgument';

export const findNumberFromPercentage = <T extends string | number>(
  number: T,
  percentage: T
): string | null => {
  if (!isValidArgument(number, percentage)) {
    return null;
  }
  const numericNumber = Number(number);
  const numericPercentage = Number(percentage);

  const num = ((numericNumber / 100) * numericPercentage).toFixed(2).toString();

  return num;
};
