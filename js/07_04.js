// CHALLENGE - Arrays
// Create an array with several items
// Remove the last item
// Move the last item to the first position
// Sort the items alphabetically
// Find specific item in the array
// Remove an item with specific content

const itemList = ["Water bottle", "Hand cream", "Red shirt", "Tissue", "Baby shark toy", "Earrings"];
console.log(itemList);

itemList.pop()
console.log(itemList);

itemList.unshift(itemList.pop());
console.log(itemList);

itemList.sort();
console.log(itemList);

let item = itemList.find(element => element == "Tissue");
console.log(item);

let indexItem = (itemList.indexOf("Red shirt"));
itemList.splice(indexItem, 1);
console.log(itemList);