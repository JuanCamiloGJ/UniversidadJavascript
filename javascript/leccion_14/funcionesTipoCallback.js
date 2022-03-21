function miFunction1(){
    console.log("funcion1");
}

function miFunction2(){
    console.log("funcion2");
}

miFunction1();
miFunction2();


//funciones de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);

}

sumar(5,3, imprimir);


//Llamadas asíncronas con uso setTimeout

function miFuncionCallback(){
    console.log("Saludo asincrono despues de 3 seg");
}

setTimeout(miFuncionCallback, 3000); // se ejecuta despues de 3seg

setTimeout(function(){console.log("saludo asincorno 2 ")}, 4000);

setTimeout( () => console.log("saludo asincrono 3"), 1000); 
