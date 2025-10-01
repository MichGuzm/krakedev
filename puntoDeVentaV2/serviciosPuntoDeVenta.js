calcularDescuento=function(monto,porcentajeDescuento){
    let valorDescuento;
    valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIva=function(monto){
    let valorIva;
    valorIva=(monto*12)/100;
    return valorIva;

}

calcularSubtotal=function(precio,cantidad){
    let total;
    total=precio*cantidad;
    return total;
}

calcularTotal=function(subtotal,descuento,iva){
    let valorTotal;
    valorTotal=subtotal-descuento+iva;
    return valorTotal;
}
