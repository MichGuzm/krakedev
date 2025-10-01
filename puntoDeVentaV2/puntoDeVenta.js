calcularValorTotal = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");

    if (esProductroValido(nombreProducto,"lblError1") & esCantidadValida(cantidad,"lblError2") & esPrecioValido(precioProducto,"lblError3")) {

        let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        let valorSinIva = valorSubtotal - valorDescuento;
        let valorIVA = calcularIva(valorSinIva);
        let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

        mostrarTexto("lblSubtotal", valorSubtotal);
        mostrarTexto("lblDescuento", valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
        mostrarTexto("lblTotal", valorTotal);

        let resumen = "Valor a pagar por " + cantidad + " " + nombreProducto + " con " + valorDescuento + "$ de descuento: USD" + valorTotal;
        mostrarTexto("lblResumen", resumen);

    } else {
        mostrarTextoEnCaja("txtProducto", "");
        mostrarTextoEnCaja("txtCantidad", "");
        mostrarTextoEnCaja("txtPrecio", "");
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
        mostrarTexto("lblResumen", "");
    }

}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let porcentajeDescuento = 0;
    if (cantidad < 3) {
        porcentajeDescuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        porcentajeDescuento = 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentajeDescuento = 0.04;
    } else if (cantidad >= 12) {
        porcentajeDescuento = 0.05;
    }
    let descuento = subtotal * porcentajeDescuento;
    return descuento;
}

esProductroValido = function (producto, idComponenteError) {
    let hayErrores = false;

    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "No puede tener mas de 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}


esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;

    if (cantidad == "" || isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "La cantidad debe ser un entero entre 0 y 100");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esPrecioValido = function (precio,idComponenteError) {
    let hayErrores = false;

    if (precio == "" || isNaN(precio, idComponenteError)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "El precio debe estar entre 0 y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}