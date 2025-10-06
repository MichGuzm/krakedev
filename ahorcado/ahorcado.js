esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65&&codigoAscii<=90){
        return true;
    }else{
        return false;
    }
}