let palabraSecreta;

esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65&&codigoAscii<=90){
        return true;
    }else{
        return false;
    }
}

guardarPalabra=function(){
    let texto=recuperarTexto("txtSecreta");

    let noLength=false;
    if (texto.length!== 5) {
        alert("DEBE INGRESAR UNA PALABRA DE EXACTAMENTE 5 LETRAS MAYÚSCULAS");
        noLength=true;    
    }
    let noMayuscula=false;
    for (let i=0;i<texto.length;i++) {
        let caracter=texto.charAt(i);
        if (!esMayuscula(caracter)) {
            alert("INGRESE UNA PALABRA DE EXACTAMENTE 5 LETRAS MAYUSCULAS");
            noMayuscula=true;
        }
    }

    palabraSecreta=texto;
}

