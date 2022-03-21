//asi trabaja una función normal.
function miFuncion(){
    console.log("saludos desde mi funcion");
}

//asi trabaja una funcion anonima
let miFuncionAnonima = function(){

}

//asi trabaja un funcion flecha
//puede ser let o const, se recomienda const ya que no se va a modificar
// let miFuncionFlecha = () => {
//     console.log("saludo desde mi función flecha");
// }

//otras manera de definir estas funciones

// const miFuncionFlecha = () => console.log("saludos desde mi funcion flecha");

// const saludar = () => {
//     return "Saludos desde funcion flecha con retorno";
// }
// console.log(saludar());

// const saludar2 = () => "saludos desde funcion flecha en una linea con retorno";

// console.log(saludar2());

const regresaObjeto = () => ({nombre: "Juan", apellido:"Jimenez"});
console.log(regresaObjeto());


const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("Saludos perros!");

//maneras de llamar.
// miFuncion();
// miFuncionAnonima();
// miFuncionFlecha();

//cuando usamos la funcion flecha no podemos usarla
//antes ya que no aplica el concepto de hositing