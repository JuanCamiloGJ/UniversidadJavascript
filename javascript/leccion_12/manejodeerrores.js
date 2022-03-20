 'use strict'
try{

    let x = 10;
    throw "Mi error";
}catch(error){
    console.log(error);
}finally{
    console.log("Termina la revision de errores");
}
console.log("continuamos...");