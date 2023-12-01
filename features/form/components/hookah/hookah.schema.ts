import * as z from 'zod';
import {
  FIELD_IS_REQUIRED,
  ONLY_NUMBERS_ALLOWED,
  FIELD_REGEX,
} from '../../constants/strings.constants';

export const HookahSchema = z.object({
  hookahPrice: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }),

  salaryPerOneHookah: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }),

  additionalExpenses: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }),
});
