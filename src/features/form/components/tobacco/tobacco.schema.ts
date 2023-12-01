'use client';

import * as z from 'zod';
import {
  FIELD_IS_REQUIRED,
  ONLY_NUMBERS_ALLOWED,
  FIELD_REGEX,
} from '../../constants/strings.constants';

const fieldValidation = z
  .string()
  .trim()
  .min(1, { message: FIELD_IS_REQUIRED })
  .max(12)
  .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED });

export const OneTobaccoSchema = z.object({
  tobaccoPrice: fieldValidation,
  tobaccoWeight: fieldValidation,
});

export const TwoTobaccosSchema = z.object({
  tobaccoPrice: fieldValidation,
  tobaccoWeight: fieldValidation,
  secondTobaccoPrice: fieldValidation,
  secondTobaccoWeight: fieldValidation,
});
