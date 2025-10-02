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