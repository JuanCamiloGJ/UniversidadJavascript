
class Persona{
    //varible static (atributo)
    static contadorPersona = 0;//atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }
    //crear las varibles con nombre empezando con _ o $
    constructor(nombre, apellido){
        this.$nombre = nombre; //siempre usar this para hacer referencia a las variables de la clase
        this.$apellido = apellido;
        if(Persona.contadorPersona< Persona.MAX_OBJ){

            this.$idPersona = ++Persona.contadorPersona;
        }else{
            console.log("Se han superado el máximo de objetos permitidos");
        }
    }
    
    get nombre(){
        return this.$nombre;
    }
    set nombre(nombre){
        this.$nombre = nombre;
    }

    get apellido(){
        return this.$apellido;
    }

    set apellido(apellido){
        this.$apellido=apellido;
    }
    // EN UNA CLASE NO SE ESPECIFICA EL FUNCTION
    nombreCompleto(){
        return this.$idPersona + " " + this.$nombre + " " +this.$apellido;

    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        return "Hola los saludo desde el metodo static";
    }
    static saludar2(persona){
        return persona.nombreCompleto();
    }
}

class Empleado extends Persona{ // extends para heredar

    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//para llamar el constructor de la clase padre
        this.$departamento = departamento;
    }
    get departamento(){
        return this.$departamento;
    }
    set departamento(departamento){
        this.$departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){ //mismo nombre y parametros
        //return this.$nombre + " " + this.$apellido + " " + this.$departamento; 
        return super.nombreCompleto() + ", " + this.$departamento;//super para llamar el metodo del objeto que se heredó
    }
   
}



let persona1 = new Persona("Juan", "Garcia");

console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("Juan", "Jimenez", "Marketing");
console.log(empleado1.nombreCompleto());

console.log(Persona.MAX_OBJ);

Persona.MAX_OBJ = 10;

console.log(Persona.MAX_OBJ);
let persona3 = new Persona("Pedro", "Cortez");
let persona4 = new Persona("ARMANDO", "Casas");
let persona5 = new Persona("PABLO", "CLAVITO");

let persona6 = new Persona("El que explota", "el programa");


