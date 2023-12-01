import { isValidArgument } from '@/store/utils/isValidArgument';

export const useFindNumberFromPercentage = <T extends string | number>(
  number: T,
  percentage: T
): { num: string | null } => {
  if (!isValidArgument(number, percentage)) {
    return { num: null };
  }
  const numericNumber = Number(number);
  const numericPercentage = Number(percentage);

  const num = ((numericNumber / 100) * numericPercentage).toFixed(2);

  return { num: num.toString() ?? null };
};
