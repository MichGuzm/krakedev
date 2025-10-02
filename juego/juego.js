jugar=function(seleccionado){
    let elemento=generarElemento();
    let ruta=generarRuta(elemento);
    ruta=mostrarImagen("img",ruta);
    let resultado=determinarGanador(elemento,seleccionado);

    if(resultado==0){
        mostrarTexto("lblResultado","EMPATE");
    } else if(resultado==1){
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA");
    }else if(resultado==2){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA");
    }
}