//CLASES
//Se pueden declarar:
//Class declaration: class Name {}
//Class expression:  const Name = class {}
/*
Buenas prácticas: crear un archivo aparte para las clases e importarlas como módulos
    <script type="module" src="Backpack.js"></script>
    <script type="module" src="script.js"></script>
        dentro de script.js también se debe importar el archivo Backpack.js
*/

const Breakfast = class {
    constructor(
        drink,
        drinkStatus,
        bread,
        porridge,
        fruit,
        foodStatus,
    ) {
        this.drink = drink;
        this.drinkStatus = drinkStatus;
        this.food = {
            bread : bread,
            porridge : porridge,
            fruit: fruit,
        };
        this.foodStatus = foodStatus;
    }
    eatFood(){
        this.foodStatus = "Finished.";
    }
    drinkBeverage(){
        this.drinkStatus = "Finished.";
    }
}

const todaysBreakfast = new Breakfast(
    "Milk",
    "Kinda hot still.",
    false,
    true,
    true,
    "Freshly made and cut."
);

console.log(todaysBreakfast);
console.log("Are you having bread today?", todaysBreakfast.food.bread);