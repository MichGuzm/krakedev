calcularValorTotal = function () {
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio");
    let cantidad=recuperarInt("txtCantidad");
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    let valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    let valorDescuento=calcularDescuento(valorSubtotal,porcentajeDescuento);
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
