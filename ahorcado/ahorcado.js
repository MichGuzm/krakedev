let palabraSecreta="";

esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let texto = recuperarTexto("txtSecreta");

    let noLength=false;
    if (texto.length!==5) {
        alert("DEBE INGRESAR UNA PALABRA DE EXACTAMENTE 5 LETRAS MAYÚSCULAS");
        return;
    }
    let noMayuscula=false;
    for (let i=0;i<texto.length;i++) {
        let caracter=texto.charAt(i);
        if (!esMayuscula(caracter)) {
            alert("INGRESE UNA PALABRA DE EXACTAMENTE 5 LETRAS MAYUSCULAS");
            return;
        }
    }
    palabraSecreta=texto;
}

mostrarLetra = function (letra, posicion) {
    console.log(letra);
        if (posicion==0) {
            mostrarTexto("div0",letra);
        }
        if (posicion==1) {
            mostrarTexto("div1",letra);
        }
        if (posicion==2) {
            mostrarTexto("div2",letra);
        }
        if (posicion==3) {
            mostrarTexto("div3",letra);
        }
        if (posicion==4) {
            mostrarTexto("div4",letra);
        }
    
}

validar=function(letra){

    console.log(palabraSecreta);

    let letrasEncontradas=0;
     
    for (let i=0;i<palabraSecreta.length;i++) {
        let caracterActual=palabraSecreta.charAt(i);
    
        if(caracterActual==letra){
        mostrarLetra(letra,i);
        letrasEncontradas=letrasEncontradas+1;
        }
    }
}

ingresarLetra=function(){
    
    let letra=recuperarTexto("txtLetra");
    console.log(letra);

    if(esMayuscula(letra)){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}
