let persona1 = {
    nombre: "Juan",
    apellido: "Garcia",
    nombreCompleto: function(titulo, tel){
        return titulo +" "+ this.nombre + " " + this.apellido +" "+ tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara",
    
}

//uso de apply para usar el metodo persona1.nombreCompleto con los 
//datos de la persona 2

console.log(persona1.nombreCompleto("lic", 4535));
//este metodo me permite enviar el objeto al que quiero aplicarle el metodo
let arreglo =["Ing", "5353353"]; // con apply se define un array, y le pasamos el obj y el array
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

//esto funciona ya que tenemos los mismos atributos, pero en diferente objeto.
//de no tener las mismas propiedades nos saldra undefined
