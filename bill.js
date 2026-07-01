// Simple Billing System

let product = prompt("Enter product name");
let quantity = Number(prompt("Enter quantity"));
let price = Number(prompt("Enter price of one item"));

let total = quantity * price;
let discount = 0;

if (total >= 1000) {
    discount = total * 0.10;
}

let finalBill = total - discount;

let payment = prompt("Enter payment method");

switch (payment) {
    case "Cash":
        console.log("Payment by Cash");
        break;
    case "UPI":
        console.log("Payment by UPI");
        break;
    case "Card":
        console.log("Payment by Card");
        break;
    default:
        console.log("Invalid payment method");
}

console.log("Product :", product);
console.log("Quantity :", quantity);
console.log("Price :", price);
console.log("Total Bill :", total);
console.log("Discount :", discount);
console.log("Final Bill :", finalBill);