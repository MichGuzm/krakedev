validarPlaca=function(){
    let valorIngresado=recuperarTexto("lblPlaca");
    let erroresEstructura=validarEstructura(valorIngresado);
    
    if(erroresEstructura==null){
        let provincia=obtenerProvincia(valorIngresado);
        let tipoVehiculo = obtenerTipoVehiculo(valorIngresado);
        let diaPicoPlaca = obtenerDiaPicoYPlaca(valorIngresado);
        if(provincia!==null){
        mostrarTexto("lblSmsEstructura","ESTRUCTURA VALIDA");
        mostrarTexto("lblProvincia",provincia);
        mostrarTexto("lblTipoVehiculo",tipoVehiculo);
        mostrarTexto("lblPicoYPlaca",diaPicoPlaca);
       
        }else{
            mostrarTexto("lblSmsEstructura","ESTRUCTURA VALIDA");
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
        }
    }else{
        mostrarTexto("lblSmsEstructura","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblTipoVehiculo","TIPO DE VEHICULO INCORRECTO");
    }
}

limpiar=function(){
    mostrarTextoEnCaja("lblPlaca","")
    mostrarTexto("lblSmsEstructura","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipoVehiculo","");
    mostrarTexto("lblPicoYPlaca","");
}
