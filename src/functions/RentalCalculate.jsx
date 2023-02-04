import { PricingCategories, Vat } from "../utils/Pricing";

export const rentalCalculate = (
  rentDate,
  returnDate,
  dLicenseYear,
  carDailyPrice,
  priceCategory
) => {


  const rentDays =
    (new Date(returnDate).getTime() - new Date(rentDate).getTime()) / 86400000;
  let rentPrice = carDailyPrice * rentDays;

  switch (priceCategory) {
    case "Basic":
      rentPrice *= PricingCategories.Basic;
      break;
    case "Standard":
      rentPrice *= PricingCategories.Standard;
      break;
    case "Medium":
      rentPrice *= PricingCategories.Medium;
      break;
    case "Premium":
      rentPrice *= PricingCategories.Premium;
      break;
    default:
      return rentPrice;
  }

  if(new Date().getFullYear() - dLicenseYear < 5){
    rentPrice *= 1.2;
  }

  console.log(Math.ceil(rentPrice & Vat),
  Math.ceil(rentPrice),
  rentDays)
  return {
    priceBrutto: Math.ceil(rentPrice & Vat),
    priceNetto: Math.ceil(rentPrice),
    rentDays
  }

};
