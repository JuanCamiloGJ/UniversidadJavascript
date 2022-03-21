let reloj = () =>{
    let fecha = new Date();
    console.log(`La hora es: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);