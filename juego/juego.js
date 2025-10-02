let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionado){
    let elemento=generarElemento();
    let ruta=generarRuta(elemento);
    ruta=mostrarImagen("img",ruta);
    let resultado=determinarGanador(elemento,seleccionado);

    if(resultado==0){
        mostrarTexto("lblResultadoParcial","EMPATE");
    } else if(resultado==1){
        puntosComputador++;
        mostrarTexto("lblResultadoParcial","PERDISTE LA PARTIDA");
    }else if(resultado==2){
        puntosUsuario++;
        mostrarTexto("lblResultadoParcial","GANASTE LA PARTIDA");
    }
     mostrarTexto("lblUsuario",puntosUsuario);
     mostrarTexto("lblCPU",puntosComputador);

    if(puntosUsuario==5){
    mostrarTexto("lblResultadoTotal","HAS GANADO EL JUEGO");
    mostrarTexto("lblResultadoParcial","");
    }else if(puntosComputador==5){
    mostrarTexto("lblResultadoParcial","");
    mostrarTexto("lblResultadoTotal","EL COMPUTADOR TE HA VENCIDO");
    }
}

limpiar=function(){
    puntosUsuario=0;
    puntosComputador=0;
    mostrarTexto("lblResultadoTotal","");
    mostrarTexto("lblUsuario",0);
    mostrarTexto("lblCPU",0);
    mostrarImagen("img","");
}

