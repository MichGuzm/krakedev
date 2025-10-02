obtenerAleatorio=function(){
   let aleatorio=Math.random();
   let numeroMultiplicado=aleatorio*3;
   let numeroEntero=parseInt(numeroMultiplicado);
   let numAleatorio=numeroEntero+1;
   return numAleatorio;
}

generarElemento=function(){
    let aleatorio=obtenerAleatorio();
    if(aleatorio==1){
        return "piedra"; 
    }
    if(aleatorio==2){
        return "papel";
    }
    if(aleatorio==3){
        return "tijera"; 
    }
}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }
    if(eleccionJugador1=="piedra"&&eleccionJugador2=="tijera"){
        return 1;
    }
    if(eleccionJugador1=="papel"&&eleccionJugador2=="tijera"){
        return 2;
    }
    if(eleccionJugador1=="tijera"&&eleccionJugador2=="papel"){
        return 1;
    }
    if(eleccionJugador1=="piedra"&&eleccionJugador2=="papel"){
        return 2;
    }
    if(eleccionJugador1=="papel"&&eleccionJugador2=="piedra"){
        return 1;
    }
    if(eleccionJugador1=="tijera"&&eleccionJugador2=="piedra"){
        return 2;
    }
}

generarRuta=function(nombre){
    return "./imagenes/"+nombre+".png";
}