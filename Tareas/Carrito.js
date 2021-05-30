//Agregar producto al carrito:
let carrito = ['YERBA','TE', 'CAFE','AZUCAR','EDULCORANTE', 'GALLETAS', 'BIZCOCHOS']

function agregarProducto() {
    let producto= prompt('Ingrese un Producto')
    if (producto) {
        carrito.push(producto.toLocaleUpperCase)
    };
}

function listar() {
    console.log ('📝Lista de Productos')

    for (let i=0; i<carrito.length; i++){
        console.log (`${i+1} - ${carrito[i]}`)
    }
}
function listar()

function buscarProducto() {
    let producto= prompt("Ingrese el producto que busca")

    if (producto) {
        let resultado= carrito.includes(producto.trim().toUpperCase())
    if (resultado) {
        console.log(`El producto ${producto.trim().toUpperCase()} esta en el carrito`) 
    }else{
        console.warn("El producto NO existe")
    }    
    }else{
        console.error("NO se ingreso producto o canceló el programa")
    }
}

function filtrarProductos() {
    let producto = prompt("Ingrese la palabra o letra");
    if (producto) {
      let productos = carrito.filter(function (produc) {
        return produc.indexOf(producto.trim().toUpperCase()) > -1;
      });
      
      if (productos.length > 0) {
        return productos;
      } else {
        console.error("No se encontró ningún producto con esa búsqueda");
      }
    } else {
      console.error("Campo vacio o cancelado");
    }
  }

  function eliminarProducto() {
    let pos = prompt("Ingrese el número del producto que quiere eliminar");
    if (pos) {
      pos = parseInt(pos);
      let producto = carrito[pos - 1];
      if (producto !== undefined) {
        let validar = confirm(`Esta seguro que quiere eliminar ${producto}`);
        if (validar) {
          carrito.splice(pos - 1, 1);
          console.log(`Eliminado el producto ${producto}`);
          listarProductos();
        }
      } else {
        console.error("No hay producto con esa posición");
      }
    } else {
      console.error("Ocurrió un error y no es posible realizar la acción");
    }
  }