import { isValidArgument } from './isValidArgument';

export const findPercentageFromNumber = <T extends string | number>(
  thisNumber: T,
  fromNumber: T
): string | null => {
  if (!isValidArgument(thisNumber, fromNumber)) {
    return null;
  }
  const numericThisNumber = Number(thisNumber);
  const numericFromNumber = Number(fromNumber);

  const percent = ((numericFromNumber / numericThisNumber) * 100).toFixed(2).toString();

  return percent;
};
