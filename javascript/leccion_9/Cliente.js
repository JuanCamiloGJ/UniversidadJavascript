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