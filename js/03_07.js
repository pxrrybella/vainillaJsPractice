//OBJETOS
const computador = {
    marca: "HP",
    color: "Negro",
    prendido: true,
    teclado: {
        color: "Negro",
        tipo: "Panel"
    },
    prenderApagar: function (){
        this.prendido = !this.prendido;
    },
};

console.log("Objeto:", computador);
console.log("¿Está prendido?", computador.prendido);
console.log("Tipo de teclado:", computador.teclado.tipo);

let string = "marca";

console.log("Otra forma de acceder a las propiedades, marca:", computador[string]);