/*
CHALLENGE
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

const items = `
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Location</a></li>
    <li><a href="#">FAQ</a></li>
    </ul>
`;

const header = document.querySelector(".headerclass");
const navbar = document.createElement("nav");
navbar.innerHTML = items;
navbar.style.backgroundColor = "wheat";
navbar.style.display = "flex";
navbar.style.flexDirection = "column";
navbar.style.alignItems = "center";
navbar.style.justifyContent = "space-around";


header.append(navbar);

const listItems = document.querySelectorAll("li");
console.log(listItems);
listItems.forEach(item => {
    item.style.display = "inline";
    item.style.padding = "2rem";
});