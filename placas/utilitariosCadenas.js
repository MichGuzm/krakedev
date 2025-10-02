esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65&&codigoAscii<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=48&&codigoAscii<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii==45){
        return true;
    }else{
        return false;
    }
}
