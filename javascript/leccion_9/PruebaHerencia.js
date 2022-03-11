
class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;

    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
    

}
class Empleado extends Persona{

    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);

        this._sueldo = sueldo;

        this._idEmpleado = ++ Empleado.contadorEmpleados;
        
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){

        return super.toString() + "sueldo: " + this._sueldo + " idEmpleado: " + this._idEmpleado;

    }
}
class Cliente extends Persona{

    static contadorClientes = 0;
    constructor(nombre, apellido, edad, date){
        super(nombre, apellido, edad);

        this._fechaRegistro = date;

        this._idCliente = ++ Cliente.contadorClientes;
        
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(date){
        this._fechaRegistro = date;
    }

    toString(){

        return super.toString() + "fecha Registro: " + this._fechaRegistro + "id cliente: " +this._idCliente;

    }
}








let pj = new Persona("Juan", "Garcia", 27);
let emp = new Empleado("Pedro", "Perez", 27, 200000);
let cli = new Cliente("Ernesto", "Salazar", 27, new Date());


console.table(pj);

console.table(emp);

console.table(cli);

console.log(cli.toString());

//prueba git