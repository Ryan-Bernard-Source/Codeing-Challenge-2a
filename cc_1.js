// Coding Challenge 2a
// Variables Created
let productName = "Bluetooth Earbuds";
let costPerUnit = 15.99;
let basePrice = 45.99;
let discountRate = 0.50;
let salesTaxRate = 0.05;
let fixedMonthlyCosts = 500;
// Formulas for Price and Profit
let discountedPrice = basePrice * (1-discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;
//Print to Console
console.log("Product Name:" + productName);
console.log("Cost per Unit: $" + costPerUnit)
console.log("Final Price with Tax: $" + finalPriceWithTax)
console.log("Profit per Unit: $" + profitPerUnit)
console.log("Break-even Units: " + breakEvenUnits)
console.log("Per Unit profitability:" + isProfitablePerUnit)
// Code goes here