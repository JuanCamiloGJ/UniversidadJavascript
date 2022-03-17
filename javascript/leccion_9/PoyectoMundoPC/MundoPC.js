class DispositivoEntrada{

    constructor(tipoEntrada, marca){

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++ Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this.idRaton} `+ super.toString();
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;

    }
    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this.idTeclado}, `+ super.toString();
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: [idMonitor: ${this.idMonitor}, marca:${this.marca}, tamaño:${this.tamaño}]`;
    }
}
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Computadora ${this.idComputadora}: ${this.nombre} \n
                ${this.monitor.toString()} \n
                ${this.raton.toString()} \n
                ${this.teclado.toString()} \n
                `
    }
}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let listado = "";
        this._computadoras.forEach(element => {
            listado+=element.toString();
            console.log(element.toString());
        });
        return listado;
    }
    get idOrden(){
        return this._idOrden;
    }
    get computadoras(){
        return this._computadoras;
    }
    set computadoras(computadoras){
        this._computadoras = computadoras;
    }

    toString(){
        return `Orden: ${this.idOrden} Computadoras:\n
                ${this.mostrarOrden()}`
    }
}   
let monitor = new Monitor("Samsung", "22");
let teclado = new Teclado("USB", "Reddragon");
let raton1 = new Raton("USB", "HP");

let monitor2 = new Monitor("Sony", "22");
let teclado2 = new Teclado("Bluehttoo", "Reddragon");
let raton2 = new Raton("USB", "RAZER");

//console.log(monitor.toString())
let computador = new Computadora("Armada",monitor,teclado,raton1);
let computador2 = new Computadora("FAbricada",monitor2,teclado2,raton2);
//console.log(computador.toString());
//console.log(computador2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computador);
orden1.agregarComputadora(computador);
orden1.agregarComputadora(computador2);

orden1.mostrarOrden();

console.log(orden1.toString());