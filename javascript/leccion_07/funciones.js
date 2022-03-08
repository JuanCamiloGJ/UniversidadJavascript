let x = 10;//tipo de dato primitivo.


function cambiarValor(a){
    a = 20;//se intenta cambiar el valor de x
    return;
}

cambiarValor(x);//x = 10 se envia una copia del valor

console.log(x);

//todo lo anterior sucede porque x es de tipo primitivo.
// a lo anterior se le conoce como paso por valor.

const persona = {
    nombre: 'Juan', //esto es una referencia.
    apellido: 'Perez'
}
const persona1 = {
    
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){//si el objeto que se pasa por referencia no tiene un valor 
                                //que se modifica como por ejemplo:
    p1.apodo = 'Carlos';        //este atributo se le agrega al objeto
}

cambiarValorObjeto(persona1);
//y cuando se le pide un atributo que no tiene, lo marca como indefinido, pero el atributo nuevo que no
//tenia anteriormente, lo muestra.
console.log(persona1.nombre + persona1.apodo);
console.log(persona1);

