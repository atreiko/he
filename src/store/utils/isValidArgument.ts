type CheckType<T> = T extends string | number ? T : never;

export const isValidArgument = <T extends (string | number)[]>(
  ...args: T
): boolean => {
  for (const arg of args) {
    if (
      arg === '' ||
      arg === null ||
      arg === undefined ||
      isNaN(arg as any) ||
      typeof arg === 'object' ||
      (typeof arg === 'number' && (arg === 0 || arg < 0 || !isFinite(arg)))
    ) {
      return false;
    }
  }
  return true;
};