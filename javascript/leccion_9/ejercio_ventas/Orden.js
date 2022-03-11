class Orden {
    _idOrden = 0;
    $productos = new Array();
    _contadorProductosAgregados = 0;
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
    }

    
    agregarProducto(producto) {
        if (Orden.MAX_PRODUCTOS > this._contadorProductosAgregados) {
           
            this.$productos.push(producto);
            this._contadorProductosAgregados++;
        } else {
            console.log("No se puede agregar más ordenes ya tienes 5");
        }
    }

    calcularTotal() {
        let total = 0;
        let totalVentas = 0;
        this.$productos.forEach(element => {
            total += element.precio;
        });

        for(let producto of this.$productos){
            totalVentas += producto.precio;
        }
        return total + " "+ totalVentas;
    }

    mostrarOrden(){
        let productoOrden = "";
        for(let producto of this.$productos){
            
            productoOrden += producto.toString() + ", ";
            //console.log(productoOrden);
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()} Productos: ${productoOrden}`);
    }
    toString() {
        return `Orden número: ${this._idOrden}` ;
    }
}