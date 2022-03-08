
class Persona{
    //varible static (atributo)
    static contadorObjetosPersona = 5;
    //crear las varibles con nombre empezando con _ o $
    constructor(nombre, apellido){
        this.$nombre = nombre; //siempre usar this para hacer referencia a las variables de la clase
        this.$apellido = apellido;
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
        return this.$nombre + " " +this.$apellido;

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

console.log(persona1);

let empleado1 = new Empleado("Juan", "Jimenez", "Marketing");
console.table(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
//polimorfismo utiliza el metodo sobreescrito de Empleado.nombreCompleto();
console.log(empleado1.toString());
//aqui si llama el metodo propio de la clase Persona.
console.log(persona1.toString());

//Esto no es posible ya que persona1 es un objeto y 
// un metodo static se llama desde la clase
//persona1.saludar();

console.log(Persona.saludar());

console.log(Persona.saludar2(persona1));

console.log(Empleado.saludar2(empleado1));


//al ser static no se puede acceder mediante un objeto, esta debe ser 
//accedida mediante la clase como tal. por ello nos muestra undefined
console.log(persona1.contadorObjetosPersona);//realmente lo que sucede es que se 
                                            //esta creando una varible nueva para el objeto persona1 por ello esta undefined

console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);