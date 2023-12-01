import { isValidArgument } from '@/store/utils/isValidArgument';

export const useCoalsCost = <T extends string | number>(
  price: T,
  pieces: T,
  consumption: T
): { perOnePiece?: string | null; perHookah?: string | null } => {
  if (!isValidArgument(price, pieces, consumption)) {
    return { perOnePiece: null, perHookah: null };
  }

  const numericPrice = Number(price);
  const numericPieces = Number(pieces);
  const numericConsumption = Number(consumption);

  const perOnePiece = (numericPrice / numericPieces).toFixed(2);
  const perHookah = (numericConsumption * Number(perOnePiece)).toFixed(2);

  return {
    perOnePiece: perOnePiece.toString() ?? null,
    perHookah: perHookah.toString() ?? null,
  };
};
