obtenerProvincia=function(placa){
    let primeraLetra=placa[0];
    if (primeraLetra=="A") {
        return "Azuay";
    } else if (primeraLetra=="B") {
        return "Bolívar";
    } else if (primeraLetra=="U") {
        return "Cañar";
    } else if (primeraLetra=="C") {
        return "Carchi";
    } else if (primeraLetra=="X") {
        return "Cotopaxi";
    } else if (primeraLetra=="H") {
        return "Chimborazo";
    } else if (primeraLetra=="O") {
        return "El Oro";
    } else if (primeraLetra=="E") {
        return "Esmeraldas";
    } else if (primeraLetra=="W") {
        return "Galápagos";
    } else if (primeraLetra=="G") {
        return "Guayas";
    } else if (primeraLetra=="I") {
        return "Imbabura";
    } else if (primeraLetra=="L") {
        return "Loja";
    } else if (primeraLetra=="R") {
        return "Los Ríos";
    } else if (primeraLetra=="M") {
        return "Manabí";
    } else if (primeraLetra=="V") {
        return "Morona Santiago";
    } else if (primeraLetra=="N") {
        return "Napo";
    } else if (primeraLetra=="S") {
        return "Pastaza";
    } else if (primeraLetra=="P") {
        return "Pichincha";
    } else if (primeraLetra=="Q") {
        return "Sucumbíos";
    } else if (primeraLetra=="K") {
        return "Zamora Chinchipe";
    } else if (primeraLetra=="T") {
        return "Tungurahua";
    } else if (primeraLetra=="Z") {
        return "Zamora Chinchipe";
    } else if (primeraLetra=="Y") {
        return "Santa Elena";
    } else {
        return null;
    }
}

validarEstructura = function (placa) {
    let error = null;
    if (placa.length !== 7 && placa.length !== 8) {
        error = "LA PLACA DEBE TENER 7 U 8 CARACTERES";
    }
    if (!esMayuscula(placa[0])){
        error = error + "," + "EL PRIMER CARACTER DEBER SER UNA LETRA MAYUSCULA";
    }
    if (!esMayuscula(placa[1])){
        error = error + "," +"EL SEGUNDO CARACTER DEBER SER UNA LETRA MAYUSCULA";
    }
    if (!esMayuscula(placa[2])){
        error = error + "," +"EL TERCER CARACTER DEBER SER UNA LETRA MAYUSCULA";
    }
    if (!esGuion(placa[3])){
        error = error + "," +"EL CUARTO CARACTER DEBER SER UN GUION";
    }
    if (!esDigito(placa[4])){
        error = error + "," +"EL QUINTO CARACTER DEBER SER UN DIGITO";
    }
    if (!esDigito(placa[5])){
        error = error + "," +"EL SEXTO CARACTER DEBER SER UN DIGITO";
    }
    if (!esDigito(placa[6])){
        error = error + "," +"EL SEPTIMO CARACTER DEBER SER UN DIGITO";
    }
    if (placa.length === 8 && !esDigito(placa[7])) {
        error = error + "," +"EL OCTAVO CARACTER DEBER SER UN DIGITO";
    }

    return error;
}

obtenerTipoVehiculo=function(placa){
    let segundaLetra=placa[1];
     if (!esMayuscula(segundaLetra)) {
        return null;
    }
    if (segundaLetra=="A"||segundaLetra=="Z") {
        return "VEHICULO COMERCIAL";
    } else if (segundaLetra=="E") {
        return "VEHICULO GUBERNAMENTAL";
    } else if (segundaLetra=="X") {
        return "VEHICULO DE USO OFICIAL";
    } else if (segundaLetra=="S") {
        return "VEHICULO GOBIERNO PROVINCIAL";
    } else if (segundaLetra=="M") {
        return "VEHICULO MUNICIPAL";
    } else {
        return "VEHICULO PARTICULAR";
    }
}

obtenerDiaPicoYPlaca=function(placa){
    let ultimoDigito = placa[placa.length - 1];
    let digito = parseInt(ultimoDigito);
    
    if (digito== 1||digito==2) {
        return "LUNES";
    } else if (digito ==3||digito==4) {
        return "MARTES";
    } else if (digito ==5||digito==6) {
        return "MIERCOLES";
    } else if (digito ==7||digito==8) {
        return "JUEVES";
    } else if (digito==9||digito==0) {
        return "VIERNES";
    } else {
        return null;
    }
}
