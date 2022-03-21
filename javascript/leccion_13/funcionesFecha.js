//asi trabaja una función normal.
function miFuncion(){
    console.log("saludos desde mi funcion");
}

//asi trabaja una funcion anonima
let miFuncionAnonima = function(){

}

//asi trabaja un funcion flecha
//puede ser let o const, se recomienda const ya que no se va a modificar
let miFuncionFlecha = () => {
    console.log("saludo desde mi función flecha");
}
//maneras de llamar.
miFuncion();
miFuncionAnonima();
miFuncionFlecha();

//cuando usamos la funcion flecha no podemos usarla
//antes ya que no aplica el concepto de hositing