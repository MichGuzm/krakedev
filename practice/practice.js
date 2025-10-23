let productos=[];

buscarProducto=function(codigo){
 let elementoProducto;
 let productoEncontrado=null;
 for(let i=0;i<productos.length;i++){
    elementoProducto=productos[i];
    if(elementoProducto.codigo==codigo){
        productoEncontrado=elementoProducto;
        break;
    }
 }
 return productoEncontrado;
}

agregarProducto=function(){
    mostrarTexto("errorCodigo", "");
    mostrarTexto("errorNombre", "");
    mostrarTexto("errorMarca", "");
    mostrarTexto("errorPrecio", "");
    mostrarTexto("errorStock", "");
    mostrarTexto("errorGarantia", "");

    let codigoE=recuperarTexto("txtCodigo");
    let nombreE=recuperarTexto("txtNombre");
    let marcaE=recuperarTexto("txtMarca");
    let precioE=recuperarFloat("txtPrecio");
    let stockE=recuperarInt("txtStock");
    let garantiaE=recuperarInt("cmbGarantia");

    let hayError=false;

    if(codigoE==""){
        mostrarTexto("errorCodigo","EL CODIGO NO PUEDE ESTAR VACIO");
        hayError=true;
    }else if(!esMayuscula(codigoE[0])||!esMayuscula(codigoE[1])||!esMayuscula(codigoE[2])||!esMayuscula(codigoE[3])){
        mostrarTexto("errorCodigo","LOS PRIMEROS 4 CARACTERES SON LETRAS MAYUSCULA");
        hayError=true;
    }else if(codigoE[4]!=="-"){
        mostrarTexto("errorCodigo","EL 5to CARACTER DEL CODIGO DEBE SER UN GUION");
        hayError=true;
    }else{
        for(let i=5;i<codigoE.length;i++){
            if(!esDigito(codigoE[i])){
                mostrarTexto("errorCodigo","LOS ULTIMOS 3 CARACTERES DEL CODIGO DEBEN SER NUEMEROS");
                hayError=true;
            }
        }
    }
    if(nombreE==""){
        mostrarTexto("errorNombre","EL NOMBRE NO PUEDE ESTAR VACIO");
        hayError=true;
    }else{
        if(!esMayuscula(nombreE[0])){
          mostrarTexto("errorNombre","EL NOMBRE DEBE EMPEZAR EN MAYUSCULA");
        hayError=true;  
        }
    }
    if(marcaE==""){
        mostrarTexto("errorMarca","LA MARCA NO PUEDE ESTAR VACIA");
        hayError=true;
    }
    if(isNaN(precioE)){
        mostrarTexto("errorPrecio","EL PRECIO NO PUEDE ESTAR VACIO");
        hayError=true;
    }else{
        let precioS=precioE+"";
        let decimalPrecio=false;
        for(let i=0;i<precioS.length;i++){
            if(precioS[i]=="."){
                decimalPrecio=true;
                break
            }
        }
        if(!decimalPrecio){
           mostrarTexto("errorPrecio","EL PRECIO DEBE SER UN DECIMAL");
        hayError=true; 
        }
    }
    if (isNaN(stockE)) {
        mostrarTexto("errorStock", "EL STOCK DEBE SER UN NÚMERO");
        hayError = true;
    } else {
        let stockString = stockE+ "";
        let tienePuntoStock = false;
        for (let i = 0; i < stockString.length; i++) {
            if (stockString[i] ==".") {
                tienePuntoStock = true;
                break;
            }
        }
        
        if (tienePuntoStock) {
            mostrarTexto("errorStock", "EL STOCK DEBE SER UN NÚMERO ENTERO");
            hayError = true;
        } else if (stockE < 0) {
            mostrarTexto("errorStock", "EL STOCK NO PUEDE SER NEGATIVO");
            hayError = true;
        }
    }

    if(hayError){
        return false;
    }

    let productoEncontrado=buscarProducto(codigoE);

    if(productoEncontrado!==null){
        productoEncontrado.nombre=nombreE;
        productoEncontrado.marca=marcaE;
        productoEncontrado.precio=precioE;
        productoEncontrado.stock=stockE;
        productoEncontrado.garantia=garantiaE;
        alert("PRODUCTO MODIFICADO CORRECTAMENTE");
    }else{
        let nuevoProducto={
            codigo:codigoE,
            nombre:nombreE,
            marca:marcaE,
            precio:precioE,
            stock:stockE,
            garantia:garantiaE,
        }
        productos.push(nuevoProducto);
        alert("PRODUCTO AGREGADO CORRECTAMENTE");
    }
    document.getElementById("txtCodigo").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtStock").value = "";

    return true;
}

mostrarProductos=function(){
    let cmpTabla=document.getElementById("listaProductos");
    let contenidoTabla="<table><tr>"+
    "<th>CODIGO</th>"+
    "<th>NOMBRE</th>"+
    "<th>MARCA</th>"+
    "<th>PRECIO</th>"+
    "<th>STOCK</th>"+
    "<th>GARANTIA</th>"+
    "</tr>";
    
    let elementoResumen;
    for(let i=0;i<productos.length;i++){
        elementoResumen=productos[i];
        contenidoTabla+="<tr><td>"+elementoResumen.codigo+"</td>" +
                         "<td>"+elementoResumen.nombre+"</td>" +
                         "<td>"+elementoResumen.marca+"</td>" +
                         "<td>"+elementoResumen.precio+"</td>" +
                         "<td>"+elementoResumen.stock+"</td>" +
                         "<td>"+elementoResumen.garantia+"</td>" +
                         "</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}