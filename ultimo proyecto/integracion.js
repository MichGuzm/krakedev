let cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

let esNuevo = false;

let movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

cargarCuenta= function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();

}

cargarTransacciones=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
}

cargarMovimientos=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");}

mostrarCuentas = function () {
   
    let cmpTabla = document.getElementById("tablaResumen");

    let contenidoTabla = "<table class=\"miTabla\"><tr>" +
        "<th>NUMERO DE CUENTA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SALDO</th>" +
        "</tr>";

    let elementoCuenta;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i]; 
        contenidoTabla +=
            "<tr><td>" + elementoCuenta.numeroCuenta + "</td>" +
            "<td>" + elementoCuenta.nombre + " " + elementoCuenta.apellido + "</td>" +     
            "<td>" + elementoCuenta.saldo.toFixed(2) + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;



}


buscarCuenta = function (numeroCuenta) {
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        if (cuenta.numeroCuenta == numeroCuenta) {
            return cuenta;
        }
    }
    return null;

}


agregarCuenta = function (cuenta) {

    let existeCuenta = buscarCuenta(cuenta.numeroCuenta);
    if (existeCuenta == null) {
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    } else {
        alert("CUENTA EXISTENTE");
    }
}

agregar = function () {
    let valorNumeroCuenta = recuperarTexto("txtNumeroCuenta");     
    let valorCedula = recuperarInt("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");                 
    let valorApellido = recuperarTexto("txtApellido"); 

    let cuenta = {
        numeroCuenta: valorNumeroCuenta,
        cedula: valorCedula, 
        nombre: valorNombre,
        apellido: valorApellido,
        saldo: 0.0
    }
    agregarCuenta(cuenta);
    mostrarCuentas();
    mostrarComponente("divTransacciones");
}


ejecutarBusqueda = function () {
    let cuentaBusqueda = recuperarTexto("txtCuentaExistente");
    let cuentaEncontrada = buscarCuenta(cuentaBusqueda);
    if (cuentaEncontrada == null) {
        alert("NUMERO DE CUENTA NO EXISTE");
    } else {
        mostrarTexto("txtNumeroCuentaExistente", cuentaEncontrada.numeroCuenta);
        mostrarTexto("txtNombreCuenta", cuentaEncontrada.nombre + " " + cuentaEncontrada.apellido);
        mostrarTexto("txtCedulaCuenta", cuentaEncontrada.cedula);
        mostrarTexto("txtSaldoCuenta", cuentaEncontrada.saldo);
    }
    habilitarComponente("btnDepositar");
    habilitarComponente("btnRetirar");
}

depositar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta)
    if (cuentaAfectada != null) {
        cuentaAfectada.saldo = cuentaAfectada.saldo + monto;
        let movimiento = {
            numeroCuenta: numeroCuenta,
            monto: monto,
            tipo: "C"
        };
        movimientos.push(movimiento);
        return true;
    }
    return false;
}

ejecutarDeposito = function () {
    let numeroCuenta = recuperarTexto("txtCuentaExistente");
    let monto = recuperarFloat("txtMonto");
    let resultado = depositar(numeroCuenta, monto);
    if (resultado) {
        alert("TRANSACCION EXITOSA");
        let cuentaActualizada = buscarCuenta(numeroCuenta);
        mostrarTexto("txtNumeroCuentaExistente", cuentaActualizada.numeroCuenta);
        mostrarTexto("txtNombreCuenta", cuentaActualizada.nombre + " " + cuentaActualizada.apellido);
        mostrarTexto("txtCedulaCuenta", cuentaActualizada.cedula);
        mostrarTexto("txtSaldoCuenta", cuentaActualizada.saldo);
    }
}

retirar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if (cuentaAfectada != null) {
        if (cuentaAfectada.saldo >= monto) {
            cuentaAfectada.saldo = cuentaAfectada.saldo - monto;
            let movimiento={
                numeroCuenta:numeroCuenta,
                monto:monto,
                tipo:"D"
            };
            movimientos.push(movimiento);
            return true;
        } else {
            alert("SALDO INSUFICIENTE");
        }
    }
    return false;
}

ejecutarRetiro = function () {
    let numeroCuenta = recuperarTexto("txtCuentaExistente");
    let monto = recuperarFloat("txtMonto");
    let resultado = retirar(numeroCuenta, monto);
    if (resultado) {
        alert("TRANSACCION EXITOSA");
        let cuentaActualizada = buscarCuenta(numeroCuenta);
        mostrarTexto("txtNumeroCuentaExistente", cuentaActualizada.numeroCuenta);
        mostrarTexto("txtNombreCuenta", cuentaActualizada.nombre + " " + cuentaActualizada.apellido);
        mostrarTexto("txtCedulaCuenta", cuentaActualizada.cedula);
        mostrarTexto("txtSaldoCuenta", cuentaActualizada.saldo);
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

mostrarMovimientos = function (misMovimientos) {
  let tabla =
    '<table class="miTabla"><tr>' +
    "<th>CUENTA</th>" +
    "<th>MONTO</th>" +
    "<th>OPERACIÓN</th>" +
    "</tr>";
  let movimientoModificado;
  for (let i = 0; i < misMovimientos.length; i++) {
    let movimiento = misMovimientos[i];
    if (movimiento.tipo == "D") {
      movimientoModificado = movimiento.monto * -1;
    } else if (movimiento.tipo == "C") {
      movimientoModificado = movimiento.monto;
    }
    tabla +=
      "<tr><td>" +
      movimiento.numeroCuenta +
      "</td>" +
      "<td>" +
      movimientoModificado +
      "</td>" +
      "<td>" +
      movimiento.tipo +
      "</td>" +
      "</tr>";
  }
  tabla += "</table>";
  document.getElementById("tablaMovimientos").innerHTML = tabla;
};

verMovimientos = function () {
  let numeroCuenta = recuperarTexto("txtCuenta");
  filtrarMovimientos(numeroCuenta);
};

