import { isValidArgument } from '@/store/utils/isValidArgument';

export const calcCoalsCost = <T extends string | number>(
  price: T,
  pieces: T,
  consumption: T
): { perOnePiece?: string | null; perOneHookah?: string | null } => {
  if (!isValidArgument(price, pieces, consumption)) {
    return { perOnePiece: null, perOneHookah: null };
  }

  const numericPrice = Number(price);
  const numericPieces = Number(pieces);
  const numericConsumption = Number(consumption);

  const perOnePiece = (numericPrice / numericPieces).toFixed(2).toString();
  const perOneHookah = (numericConsumption * Number(perOnePiece)).toFixed(2).toString();

  return {
    perOnePiece,
    perOneHookah,
  };
};
