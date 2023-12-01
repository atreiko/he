//* Regex
export const FIELD_REGEX: RegExp = /^[0-9.]+$/;
export const FIELD_INTEGER_REGEX: RegExp = /^[0-9]+$/;

//! Error message
export const FIELD_IS_REQUIRED = 'Field is required.';
export const ONLY_NUMBERS_ALLOWED = 'Only numbers allowed.';
export const INVALID_EMAIL = 'Invalid email.';
export const PASSWORDS_DO_NOT_MATCH = 'Passwords do not match';

//todo Tooltips
export const BRANDS_TOOLTIP =
  'Choose the number of brands of tobacco that you use to fill the bowl.';

//? Tobacco
export const TOBACCO_PRICE_TOOLTIP = 'Write the price of tobacco for one pack you bought.';

export const TOBACCO_WEIGHT_TOOLTIP = 'Write the weight of tobacco for one pack you bought.';

export const SECOND_TOBACCO_PRICE_TOOLTIP =
  'Write down the price of the second brand of tobacco you mix with the first.';

export const SECOND_TOBACCO_WEIGHT_TOOLTIP =
  'Write down the weight of the second brand of tobacco you mix with the first.';

//? Coal
export const COAL_PIECES_PER_KG_TOOLTIP = 'Choose how many pieces are in one kilogram of coals.';

export const COAL_PRICE_PER_KG_TOOLTIP = 'Write down the price of a kilogram of coal.';

export const COAL_CONSUMPTION_PER_HOOKAH_TOOLTIP =
  'Write down how many pieces of coal do you spend on one hookah per smoke.';

//? Bowl
export const BOWL_CAPACITY_TOOLTIP = 'Write how many grams of tobacco fit in your bowl.';

export const BOWL_PERCENTAGE_FIRST_TOOLTIP =
  'Choose how many percent of the first tobacco you will put in the bowl.';

export const BOWL_PERCENTAGE_SECOND_TOOLTIP = 'The second tobacco will fill the rest.';

//? Hookah
export const HOOKAH_MENU_PRICE = 'Write how much hookah costs in the menu of your restaurant.';

export const SALARY_PER_ONE_HOOKAH = 'The salary of a employee from one sold hookah.';

export const HOOKAH_ADDITIONAL_EXPENSES =
  'Throw in additional expenses such as a grapefruit, mouthpieces or milk in a flask.';

//? Intermediate results
export const TOBACCO_PPG = 'Tobacco price per gram';
export const COALS_COST = 'Coals cost';
export const FILLED_BOWL_PRICE = 'Filled bowl price';

//* Formulas info

export const TOBACCO_INFO = `In the 'Tobacco' section, we ask you to provide two pieces of information: the price of
the tobacco packaging and the weight of the tobacco in grams. This simple step helps us
calculate the cost per gram of tobacco. Why is this important, you ask? Well, knowing the
price per gram allows us to make precise calculations. For example, it helps us figure out
the cost of filling a bowl with this particular tobacco. This way, you can plan and budget
your hookah session with confidence, knowing exactly what to expect.`;

export const TOBACCO_DESC = `In certain scenarios, we find ourselves wanting to enjoy two different tobacco brands
during a hookah session. These brands often come with their unique characteristics,
including varying prices and package sizes. To facilitate precise calculations when
dealing with a duo of tobaccos, simply specify that you're working with two brands. By
indicating '2' as the Brands Amount,' you unlock the ability to enter the distinct
details of each brand. This includes their respective prices and package weights. This
feature empowers you to perform accurate calculations, even when mixing tobaccos from
different brands.`;

export const COAL_INFO = `In the 'Coal' section, we ask you to indicate the price per kilogram of coal. 
Although the size of charcoal cubes may vary, we have compiled the most popular options in our form for your convenience. 
The number of coal cubes in one kilogram is usually indicated on the packaging and is usually 72 pieces, each measuring 25x25x25 millimeters. 
With this information in hand, we can precisely determine the cost of a single coal cube by dividing the price per kilogram of coal by the number of cubes in one package.`;

export const COAL_DESC = `When enjoying a hookah, it's common to ignite extra coals alongside the ones heating the hookah. 
In the case of a hookah with a grapefruit bowl, you might need more additional coals than the norm. To perform precise calculations, 
we specify the quantity of coals utilized for a single hookah session.`;

export const BOWL_INFO = `In the "Bowl" section, we simply want to know how much tobacco your bowl can hold, which we refer to as its "capacity." This information helps us calculate the cost accurately by multiplying it with the "price per gram" you've already provided.`;

export const BOWL_DESC = `When we load a bowl with two different tobacco brands, we specify the percentage each tobacco occupies in the bowl. We need to find the weight in grams for each tobacco percentage. For example, with a 20g bowl and two tobaccos at 50% each, it's straightforward – 10g for each tobacco. However, for percentages like 70/30 or 60/40, manual calculations become less convenient. In such cases, you can refer to the second formula to determine the weight of each tobacco filling in the bowl.

Following that, we calculate the individual costs of filling the bowl with each type of tobacco. By summing these values, we obtain the total cost of filling the bowl with both tobaccos. Additionally, we employ the third formula to determine the cost of filling the bowl with each type of tobacco separately. Finally, we utilize the fourth formula to combine the prices of both tobaccos used to fill the bowl.`

export const HOOKAH_INFO = `In the "Hookah" section, we kindly request you to provide the sale price of the hookah as listed on our menu. By considering both earnings and supplementary costs, we can determine our overall expense percentage.

Salary for employee are calculated based on the sale of a single hookah.

Additional expenses encompass various factors, such as the cost of disposable mouthpieces, the price associated with using fruit in lieu of a traditional bowl, or the expenditure incurred when adding a specific quantity of liquid into the flask.

This data collection allows us to comprehensively evaluate our financial outlook and make informed decisions.`;

export const HOOKAH_DESC = `In our form, we had various expenses that needed to be taken into account. The 'Search value' corresponds to the cost of tobacco, which is represented by the 'Filled bowl price.' When two tobaccos are used, it is denoted as 'Both tobaccos.' These expenses also encompass 'Coals cost per hookah,' 'Salary,' and 'Additional expenses.' The cumulative total of these expenses provides the overall cost, which, in turn, allows us to calculate the total cost as a percentage. This calculation provides insights into our financial income and revenue percentages.`;


