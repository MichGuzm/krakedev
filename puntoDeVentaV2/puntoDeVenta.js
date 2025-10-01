calcularValorTotal = function () {
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio");
    let cantidad=recuperarInt("txtCantidad");
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    let valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    let valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    let valorSinIva=valorSubtotal-valorDescuento;
    let valorIVA=calcularIva(valorSinIva);
    let valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);

    mostrarTexto("lblSubtotal",valorSubtotal);
    mostrarTexto("lblDescuento",valorDescuento);
    mostrarTexto("lblValorIVA",valorIVA);
    mostrarTexto("lblTotal",valorTotal);

    let resumen="Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento: USD"+valorTotal;
    mostrarTexto("lblResumen",resumen);

}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad","0");
    mostrarTextoEnCaja("txtPrecio","0.0");
    mostrarTextoEnCaja("txtPorcentajeDescuento","0");
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");
    mostrarTexto("lblResumen","");
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
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