validarPlaca=function(){
    let valorIngresado=recuperarTexto("lblPlaca");
    let erroresEstructura=validarEstructura(valorIngresado);
    if(erroresEstructura==null){
        mostrarTexto("lblSmsEstructura","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblSmsEstructura","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}