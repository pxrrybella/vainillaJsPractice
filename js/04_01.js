//TEMPLATE LITERALS
// document.body.innerHTML retorna un string con html dentro de body


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

const content = `
    <section>
        <h4>Today's Breakfast: </h4>
        <ul>
            <li>Drink: ${todaysBreakfast.drink}</li>
            <li>Drink status: ${todaysBreakfast.drinkStatus}</li>
            <li>Food:
                <ul>
                    <li>Bread: ${todaysBreakfast.food.bread}</li>
                    <li>Porridge: ${todaysBreakfast.food.porridge}</li>
                    <li>Fruit: ${todaysBreakfast.food.fruit}</li>
                </ul>
            </li>
            <li>Food status: ${todaysBreakfast.foodStatus}</li>
        </ul>
    </section>
    `;

document.body.innerHTML = content;