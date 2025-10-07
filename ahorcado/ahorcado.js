let palabraSecreta="";
let intentos=0;
let coincidencias=0;
let errores=0;

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
        coincidencias=coincidencias+1;
        }
    }
    if (letrasEncontradas==0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores=errores+1;
        mostrarAhorcado();
    }
}

ingresarLetra=function(){
    
    let letra=recuperarTexto("txtLetra");
    console.log(letra);

    if(esMayuscula(letra)){
        intentos=intentos+1;
        validar(letra);
        if(coincidencias>=5){
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }else if(intentos>=10){
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

mostrarAhorcado=function(){
    if (errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    } else if (errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    } else if (errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    } else if (errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    } else if (errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    } else if (errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    } else if (errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    } else if (errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    } else if (errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
}

