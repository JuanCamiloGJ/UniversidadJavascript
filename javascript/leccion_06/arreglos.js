let autos1 = new Array('BMW', 'Mercedes Benz', 'Volvo');//esta manera ya no se usa
const autos = ['BMW', 'Mercedes Benz', 'Volvo']; // esta manera se recomienda.
console.log(autos);


autos.push("nuevoElemento");//agrega un nuevo elemento al array
console.log(autos);

//mediante el tamaño del arreglo.
console.log(autos.length);
autos[autos.length] = 'cadillac';
console.log(autos);
//podemos agregar en un indice mucho más alto pero dejaria indices vacios, en este caso el indice 5
autos[6]= "Porshe";
console.log(autos);
//No es recomendable esta practica, siempre llenar los indices es lo correcto.

//dice que es de tipo object, no nos dice mucho...
console.log(typeof autos);
//de esta manera nos dice si es o no un arreglo.
console.log(Array.isArray(autos));
//Otra manera, preguntamos si autos es una instancia de Array
console.log( autos instanceof Array);