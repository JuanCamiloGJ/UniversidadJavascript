class Producto{

    _idProducto = 0;
    _nombre = "";
    _precio = "";
    static contadorProductos = 0;
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }
    

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        
        return `id producto: ${this._idProducto} nombre producto: ${this._nombre} precio: ${this._precio}`;
    }



}
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
            console.log("No se puede agregar más productos, ya tienes 5.");
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
            
            productoOrden += "\n{"+ producto.toString() + "}";
            //console.log(productoOrden);
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()} Productos: ${productoOrden}`);
    }
    toString() {
        return `Orden número: ${this._idOrden}` ;
    }
}

let producto1 = new Producto('Pantalón' , 200);

let producto2 = new Producto('Camisa' , 100);

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon' , 50);

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);

orden2.mostrarOrden();