class Teclado extends DispotivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;

    }
    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [ idTeclado:${this.idTeclado},`+ super.toString();
    }
}