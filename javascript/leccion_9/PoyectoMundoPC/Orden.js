class Orden{
    static contadorOrdenes = 0;
    constructor(computadoras){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = computadoras;
    
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        this._computadoras.forEach(element => {
            console.log(element.toString());
        });
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