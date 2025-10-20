let cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]
let esNuevo=false;

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let elementoCuenta;
    let elementoCuentaEncontrada=null;
    for(let i=0;i<cuentas.length;i++){
        elementoCuenta=cuentas[i];
        if(elementoCuenta.numeroCuenta==numeroCuenta){
            elementoCuentaEncontrada=elementoCuenta;
            break;
        }
    }
    return elementoCuentaEncontrada;
}

ejecutarBusqueda=function(){
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
    let cuentaBusqueda=recuperarTexto("txtCuentaExistente");
    let cuentaEncontrada=buscarCuenta(cuentaBusqueda);
    if(cuentaEncontrada==null){
        alert("NUMERO DE CUENTA NO EXISTE");
    }else{
        mostrarTexto("txtNumeroCuentaExistente",cuentaEncontrada.numeroCuenta);
        mostrarTexto("txtNombreCuenta",cuentaEncontrada.nombre+" "+cuentaEncontrada.apellido);
        mostrarTexto("txtCedulaCuenta",cuentaEncontrada.cedula);
        mostrarTexto("txtSaldoCuenta",cuentaEncontrada.saldo);
    }
    habilitarComponente("btnDepositar");
    habilitarComponente("btnRetirar");
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada=buscarCuenta(numeroCuenta)
    if(cuentaAfectada!=null){
        cuentaAfectada.saldo=cuentaAfectada.saldo+monto;
        return true;
    }
    return false;
}

ejecutarDeposito=function(){
    let numeroCuenta=recuperarTexto("txtCuentaExistente");
    let monto=recuperarFloat("txtMonto");
    let resultado=depositar(numeroCuenta,monto);
    if(resultado){
        alert("TRANSACCION EXITOSA");
        let cuentaActualizada=buscarCuenta(numeroCuenta);
        mostrarTexto("txtNumeroCuentaExistente",cuentaActualizada.numeroCuenta);
        mostrarTexto("txtNombreCuenta",cuentaActualizada.nombre+" "+cuentaActualizada.apellido);
        mostrarTexto("txtCedulaCuenta",cuentaActualizada.cedula);
        mostrarTexto("txtSaldoCuenta",cuentaActualizada.saldo);
    }
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada=buscarCuenta(numeroCuenta);
    if(cuentaAfectada!=null){
        if(cuentaAfectada.saldo>=monto){
            cuentaAfectada.saldo=cuentaAfectada.saldo-monto;
            return true;
        }else{
            alert("SALDO INSUFICIENTE");
        }
    }
    return false;
}

ejecutarRetiro=function(){
    let numeroCuenta=recuperarTexto("txtCuentaExistente");
    let monto=recuperarFloat("txtMonto");
    let resultado=retirar(numeroCuenta,monto);
    if(resultado){
        alert("TRANSACCION EXITOSA");
        let cuentaActualizada=buscarCuenta(numeroCuenta);
        mostrarTexto("txtNumeroCuentaExistente",cuentaActualizada.numeroCuenta);
        mostrarTexto("txtNombreCuenta",cuentaActualizada.nombre+" "+cuentaActualizada.apellido);
        mostrarTexto("txtCedulaCuenta",cuentaActualizada.cedula);
        mostrarTexto("txtSaldoCuenta",cuentaActualizada.saldo);
    } 
}

filtrarMovimientos = function (numeroCuenta) {
  let movimientosCuenta = [];
  for (let i = 0; i < movimientos.length; i++) {
    let movimiento = movimientos[i];
    if (movimiento.numeroCuenta == numeroCuenta) {
      movimientosCuenta.push(movimiento);
    }
  }
 
  mostrarMovimientos(movimientosCuenta);
};


let productos = [];

// Funciones para recuperar valores
recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

// Funciones de validación de caracteres
esMayuscula = function(caracter){
    let codigoAscii = caracter.charCodeAt(0);
    if(codigoAscii >= 65 && codigoAscii <= 90){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let codigoAscii = caracter.charCodeAt(0);
    if(codigoAscii >= 48 && codigoAscii <= 57){
        return true;
    }else{
        return false;
    }
}

esLetra = function(caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    return (codigoAscii >= 65 && codigoAscii <= 90) || 
           (codigoAscii >= 97 && codigoAscii <= 122);
}

// Función principal para agregar producto
agregarProducto = function() {
    // Limpiar todos los mensajes de error primero
    mostrarTexto("errorNombre", "");
    mostrarTexto("errorDescripcion", "");
    mostrarTexto("errorCategoria", "");
    mostrarTexto("errorPrecio", "");
    mostrarTexto("errorStock", "");
    
    // Obtener los valores de los campos usando tus funciones
    let nombre = recuperarTexto("txtNombre");
    let descripcion = recuperarTexto("txtDescripcion");
    let categoria = recuperarTexto("txtCategoria");
    let precio = recuperarFloat("txtPrecio");
    let stock = recuperarInt("txtStock");
    
    let hayErrores = false;
    
    // Validar Nombre
    if (nombre === "") {
        mostrarTexto("errorNombre", "EL NOMBRE NO PUEDE ESTAR VACÍO");
        hayErrores = true;
    } else if (nombre === " ") {
        mostrarTexto("errorNombre", "EL NOMBRE NO PUEDE SER SOLO UN ESPACIO");
        hayErrores = true;
    } else {
        if (!esMayuscula(nombre[0])) {
            mostrarTexto("errorNombre", "EL NOMBRE DEBE EMPEZAR CON LETRA MAYÚSCULA");
            hayErrores = true;
        } else {
            // Verificar que las demás letras no sean mayúsculas
            for (let i = 1; i < nombre.length; i++) {
                let caracter = nombre[i];
                if (esMayuscula(caracter)) {
                    mostrarTexto("errorNombre", "EL NOMBRE DEBE TENER LAS DEMÁS LETRAS EN MINÚSCULA");
                    hayErrores = true;
                    break;
                }
            }
        }
        
        // Validar que no tenga caracteres especiales
        for (let i = 0; i < nombre.length; i++) {
            let caracter = nombre[i];
            if (!esLetra(caracter) && caracter !== ' ') {
                mostrarTexto("errorNombre", "EL NOMBRE NO PUEDE TENER CARACTERES ESPECIALES");
                hayErrores = true;
                break;
            }
        }
    }
    
    // Validar Descripción
    if (descripcion === "") {
        mostrarTexto("errorDescripcion", "LA DESCRIPCIÓN NO PUEDE ESTAR VACÍA");
        hayErrores = true;
    } else if (!esMayuscula(descripcion[0])) {
        mostrarTexto("errorDescripcion", "LA DESCRIPCIÓN DEBE EMPEZAR CON LETRA MAYÚSCULA");
        hayErrores = true;
    }
    
    // Validar Categoría
    if (categoria === "") {
        mostrarTexto("errorCategoria", "LA CATEGORÍA NO PUEDE ESTAR VACÍA");
        hayErrores = true;
    } else {
        if (!esMayuscula(categoria[0])) {
            mostrarTexto("errorCategoria", "LA CATEGORÍA DEBE EMPEZAR CON LETRA MAYÚSCULA");
            hayErrores = true;
        } else {
            // Verificar que las demás letras no sean mayúsculas
            for (let i = 1; i < categoria.length; i++) {
                let caracter = categoria[i];
                if (esMayuscula(caracter)) {
                    mostrarTexto("errorCategoria", "LA CATEGORÍA DEBE TENER LAS DEMÁS LETRAS EN MINÚSCULA");
                    hayErrores = true;
                    break;
                }
            }
        }
        
        // Validar que no tenga caracteres especiales
        for (let i = 0; i < categoria.length; i++) {
            let caracter = categoria[i];
            if (!esLetra(caracter) && caracter !== ' ') {
                mostrarTexto("errorCategoria", "LA CATEGORÍA NO PUEDE TENER CARACTERES ESPECIALES");
                hayErrores = true;
                break;
            }
        }
    }
    
    // Validar Precio
    if (isNaN(precio)) {
        mostrarTexto("errorPrecio", "EL PRECIO DEBE SER UN NÚMERO");
        hayErrores = true;
    } else if (precio <= 0) {
        mostrarTexto("errorPrecio", "EL PRECIO DEBE SER UN NÚMERO POSITIVO");
        hayErrores = true;
    } else {
        // Verificar que tenga decimales
        let precioString = precio + "";
        let tienePuntoPrecio = false;
        for (let i = 0; i < precioString.length; i++) {
            if (precioString[i] === '.') {
                tienePuntoPrecio = true;
                break;
            }
        }
        
        if (!tienePuntoPrecio) {
            mostrarTexto("errorPrecio", "EL PRECIO DEBE TENER DECIMALES");
            hayErrores = true;
        }
    }
    
    // Validar Stock
    if (isNaN(stock)) {
        mostrarTexto("errorStock", "EL STOCK DEBE SER UN NÚMERO");
        hayErrores = true;
    } else {
        let stockString = stock + "";
        let tienePuntoStock = false;
        for (let i = 0; i < stockString.length; i++) {
            if (stockString[i] === '.') {
                tienePuntoStock = true;
                break;
            }
        }
        
        if (tienePuntoStock) {
            mostrarTexto("errorStock", "EL STOCK DEBE SER UN NÚMERO ENTERO");
            hayErrores = true;
        } else if (stock < 0) {
            mostrarTexto("errorStock", "EL STOCK NO PUEDE SER NEGATIVO");
            hayErrores = true;
        }
    }
    
    // Si hay errores, no agregar el producto
    if (hayErrores) {
        return false;
    }
    
    // Si no hay errores, crear y agregar el producto
    let nuevoProducto = {
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria,
        precio: precio,
        stock: stock
    };
    
    productos.push(nuevoProducto);
    alert("PRODUCTO AGREGADO CORRECTAMENTE");
    
    // Limpiar campos
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtCategoria").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtStock").value = "";
    
    return true;
}