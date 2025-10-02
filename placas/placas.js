validarPlaca=function(){
    let valorIngresado=recuperarTexto("lblPlaca");
    let erroresEstructura=validarEstructura(valorIngresado);
    
    if(erroresEstructura==null){
        let provincia=obtenerProvincia(valorIngresado);
        if(provincia!==null){
        mostrarTexto("lblSmsEstructura","ESTRUCTURA VALIDA");
        mostrarTexto("lblProvincia",provincia);
        }else{
            mostrarTexto("lblSmsEstructura","ESTRUCTURA VALIDA");
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
        }
    }else{
        mostrarTexto("lblSmsEstructura","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}

