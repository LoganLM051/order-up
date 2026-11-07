// array for tags// 
const tags = ["healthy", "late night", "side"];
//array for prices// 
const prices = [7.99, 6.99, 8.99, 3];
// console log for tags and prices//
console.log(tags);
console.log(prices);
// for loops// 
const tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " . ";
}
//loop for total//
let total = 0; 
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}
console.log("Total:" , total);

document.querySelector("#total").textContent = "$" + total;