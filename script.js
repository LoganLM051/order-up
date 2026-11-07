// array for tags// 
const tags = ["healthy", "late night", "side"];
//array for prices// 
const prices = [7.99, 6.99, 8.99, 3];
// console log for tags and prices//
console.log(tags);
console.log(prices);
// for loop// 
const tagText = document.querySelector("tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " . ";
}