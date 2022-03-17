class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}
class Gerente extends Empleado{

    constructor(nombre, sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}
let gerente =new Gerente("Carlos", 5000, "Sistemas");
let empleado = new Empleado("Juan", 6000);

imprimir(empleado);
imprimir(gerente);