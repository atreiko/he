import { createSelector } from '@reduxjs/toolkit';
import { calcPricePerGram } from '@/store/utils/calcPricePerGram';
import { calcCoalsCost } from './utils/calcCoalsCost';
import { calcFilledBowlPrice } from './utils/calcFilledBowlPrice';
import { findNumberFromPercentage } from './utils/findNumberFromPercentage';
import { isValidArgument } from './utils/isValidArgument';
import { findPercentageFromNumber } from './utils/findPercentageFromNumber';

export const selectBrands = (state: any) => state.brands;
export const selectTobacco = (state: any) => state.tobacco;
export const selectCoal = (state: any) => state.coal;
export const selectBowl = (state: any) => state.bowl;
export const selectHookah = (state: any) => state.hookah;
export const selectInter = (state: any) => state.inter;

export const selectPpg = createSelector([selectBrands, selectTobacco], (brands, tobacco) => {
  if (brands.amount === 'one') {
    const { tobaccoPrice, tobaccoWeight } = tobacco;
    return { ppg: calcPricePerGram(tobaccoPrice, tobaccoWeight) };
  }

  if (brands.amount === 'two') {
    const { tobaccoPrice, tobaccoWeight, secondTobaccoPrice, secondTobaccoWeight } = tobacco;
    const ppg = calcPricePerGram(tobaccoPrice, tobaccoWeight);
    const ppgSecond = calcPricePerGram(secondTobaccoPrice, secondTobaccoWeight);
    const ppgBoth = ppg && ppgSecond && (Number(ppg) + Number(ppgSecond)).toFixed(2).toString();

    return { ppg, ppgSecond, ppgBoth };
  }

  return null;
});

export const selectCoalsCost = createSelector([selectCoal], (coal) => {
  const { coalPricePerKg, coalPiecesPerKg, coalConsumption } = coal;
  return calcCoalsCost(coalPricePerKg, coalPiecesPerKg, coalConsumption);
});

export const selectFilledBowlPriceForOne = createSelector(
  [selectBrands, selectBowl, selectPpg],
  (brands, bowl, inter) => {
    if (inter && brands.amount === 'one') {
      const { capacity } = bowl;
      const { ppg } = inter;

      if (ppg !== null) {
        const fbp = calcFilledBowlPrice(ppg, capacity);
        return { fbp };
      }
    }

    return null;
  }
);

export const selectFilledBowlPriceForTwo = createSelector(
  [selectBrands, selectBowl, selectPpg],
  (brands, bowl, inter) => {
    if (inter && brands.amount === 'two') {
      const { capacity, percentageFirst, percentageSecond } = bowl;
      const { ppg, ppgSecond } = inter;

      if (ppg !== null && ppgSecond !== null && ppg !== undefined && ppgSecond !== undefined) {
        const gramsFirst = findNumberFromPercentage(capacity, percentageFirst);
        const gramsSecond = findNumberFromPercentage(capacity, percentageSecond);

        if (
          gramsFirst !== null &&
          gramsFirst !== undefined &&
          gramsSecond !== null &&
          gramsSecond !== undefined
        ) {
          const fbp = calcFilledBowlPrice(ppg, gramsFirst);
          const fbpSecond = calcFilledBowlPrice(ppgSecond, gramsSecond);
          const fbpBoth =
            fbp && fbpSecond && (Number(fbp) + Number(fbpSecond)).toFixed(2).toString();

          return { fbp, fbpSecond, fbpBoth };
        }
      }
    }

    return null;
  }
);

export const selectPsForOne = createSelector(
  [selectBrands, selectHookah, selectInter],
  (brands, hookah, inter) => {
    if (inter && brands.amount === 'one') {
      const { hookahPrice, salaryPerOneHookah, additionalExpenses } = hookah;
      const { perOneHookah, fbp } = inter;

      if (
        hookahPrice !== '' &&
        hookahPrice !== null &&
        perOneHookah !== null &&
        fbp !== null &&
        salaryPerOneHookah !== null &&
        additionalExpenses !== null
      ) {
        const tobacco = findPercentageFromNumber(hookahPrice, fbp);
        const coals = findPercentageFromNumber(hookahPrice, perOneHookah);
        const salary =
          salaryPerOneHookah === '0'
            ? '0'
            : findPercentageFromNumber(hookahPrice, salaryPerOneHookah);
        const expenses =
          additionalExpenses === '0'
            ? '0'
            : findPercentageFromNumber(hookahPrice, additionalExpenses);

        return { tobacco, coals, salary, additionalExpenses: expenses };
      }
    }

    return {
      tobacco: '',
      coals: '',
      salary: '',
      additionalExpenses: '',
    };
  }
);

export const selectPsForTwo = createSelector(
  [selectBrands, selectHookah, selectInter],
  (brands, hookah, inter) => {
    if (inter && brands.amount === 'two') {
      const { hookahPrice, salaryPerOneHookah, additionalExpenses } = hookah;
      const { perOneHookah, fbp, fbpSecond, fbpBoth } = inter;

      if (
        hookahPrice !== '' &&
        hookahPrice !== null &&
        perOneHookah !== null &&
        fbp !== null &&
        fbpSecond !== null &&
        fbpBoth !== null &&
        salaryPerOneHookah !== null &&
        additionalExpenses !== null
      ) {
        const tobaccoFirst = findPercentageFromNumber(hookahPrice, fbp);
        const tobaccoSecond = findPercentageFromNumber(hookahPrice, fbpSecond);
        const tobaccoBoth = findPercentageFromNumber(hookahPrice, fbpBoth);
        const coals = findPercentageFromNumber(hookahPrice, perOneHookah);
        const salary =
          salaryPerOneHookah === '0'
            ? '0'
            : findPercentageFromNumber(hookahPrice, salaryPerOneHookah);
        const expenses =
          additionalExpenses === '0'
            ? '0'
            : findPercentageFromNumber(hookahPrice, additionalExpenses);

        return {
          tobaccoFirst,
          tobaccoSecond,
          tobaccoBoth,
          coals,
          salary,
          additionalExpenses: expenses,
        };
      }
    }

    return {
      tobaccoFirst: '',
      tobaccoSecond: '',
      tobaccoBoth: '',
      coals: '',
      salary: '',
      additionalExpenses: '',
    };
  }
);

export const selectTotal = createSelector(
  [selectBrands, selectPsForOne, selectPsForTwo, selectHookah],
  (brands, psOne, psTwo, hookah) => {
    const { hookahPrice } = hookah;
    let totalExpensesPercentage = 0;
    let totalProceedsPercentage = 0;
    let totalExpenses = 0;
    let totalProceeds = 0;

    if (brands.amount === 'one') {
      const { tobacco, coals, salary, additionalExpenses } = psOne;
      const values = [tobacco, coals, salary, additionalExpenses];
      totalExpensesPercentage = values.reduce((acc, value) => acc + (Number(value) || 0), 0);
    }

    if (brands.amount === 'two') {
      const { tobaccoFirst, tobaccoSecond, tobaccoBoth, coals, salary, additionalExpenses } = psTwo;
      const values = [tobaccoFirst, tobaccoSecond, tobaccoBoth, coals, salary, additionalExpenses];
      totalExpensesPercentage = values.reduce((acc, value) => acc + (Number(value) || 0), 0);
    }

    totalProceedsPercentage = 100 - totalExpensesPercentage || 0;
    const exp = findNumberFromPercentage(hookahPrice, totalExpensesPercentage);
    const proc = findNumberFromPercentage(hookahPrice, totalProceedsPercentage);
    if (exp !== null && proc !== null) {
      totalExpenses = !isNaN(parseFloat(exp)) ? parseFloat(exp) : 0;
      totalProceeds = !isNaN(parseFloat(proc)) ? parseFloat(proc) : 0;
    }
    
    return {
      totalExpensesPercentage: totalExpensesPercentage.toFixed(2).toString(),
      totalProceedsPercentage: totalProceedsPercentage.toFixed(2).toString(),
      totalExpenses: totalExpenses.toFixed(2).toString(),
      totalProceeds: totalProceeds.toFixed(2).toString(),
    };
  }
);
