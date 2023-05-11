//QUERY SELECTOR
//esto no funciona aquí, está hecho a base de un archivo proporcionado por el instructor
// element.classList.toggle() <- añade o quita una clase

console.log("QUERY SELECTOR*****")
console.log(document.querySelector("h1"));
console.log(document.querySelector("button"));
console.log(document.querySelector(".rightlength"));

console.log("QUERY SELECTOR ALL*****")
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll(".rightlength"));
console.log(document.querySelectorAll("ul li:nth-child(3)"));

console.log("USING VARIABLE*****");
let query = "input:first-child"
console.log(document.querySelector(query));