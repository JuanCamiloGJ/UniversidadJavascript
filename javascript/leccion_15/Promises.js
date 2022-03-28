let miPromesa = new Promise(

    (resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved('Resolvió correcto');
    }else{
        rejected('Se produjo un error');
    }
}

);

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

//cuando trabajamos con promesas no es necesario usar los dos parametros
//que se suelen recibir.
let promesa = new Promise((resolve) =>{
    //este metodo recibe una funcion, en este caso
    //hacemos una función flecha. que a su vez ejecuta 
    //la funcion resolve.
    setTimeout(() => resolve("saludos con promesa y timeout"), 3000);
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( (resolver) => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa);
}

//funcionConPromesaYAwait();

//promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout() {

    let miPromesa = new Promise((resolve) =>{
       setTimeout(() => resolve('promesa con await y timeout'), 3000); 
    });
    console.log( await miPromesa);
}

funcionConPromesaAwaitTimeout();