//CLASE PRODUCTO:
// Deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Cree tres instancias de este objeto y guárdalas en un array.
// Utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    constructor(codigo,nombre, precio){
        this.codigo= codigo
        this.nombre= nombre
        this.precio= precio
    }

    imprimir(){
        document.write("<br>Los Datos de su producto son:</br>")
        document.write (`<br>Nombre del Producto: ${this.nombre}<br>`)
        document.write(`<br>Precio: $${this.precio} <br>`)
        document.write(`<br>Código del Producto: ${this.codigo}<br>`)
        document.write("-----------------------------------------------------")
    }

}

let producto1= new Producto (304,'Paquete Maldivas', 916.979)
let producto2= new Producto (537, 'Paquete Europa Clásica', 170.473)
let producto3= new Producto (115, 'Paquete Sur Argentino', 60.309)


let productos= [producto1, producto2, producto3]
console.log ('📝Lista de Productos')

for (let i = 0; i < productos.length; i++) {
    console.log(`Nombre: ${productos[i].nombre} - Precio: $${productos[i].precio} - Código del Producto: ${productos[i].codigo}`);
  }