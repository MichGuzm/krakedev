validarPassword=function(password){
    let errores="";
    if (password.length<8){
        errores+="La contraseña debe tener al menos 8 caracteres.";
    }
    if (password.length>16){
        errores+="La contraseña debe tener como maximo 16 caracteres.";
    }

    let tieneMayuscula=false;
    for (let i= 0;i<password.length;i++) {
        let caracter=password.charAt(i);
        if (caracter>="A"&& caracter<="Z") {
            tieneMayuscula=true;
        }
    }
    if (!tieneMayuscula) {
        errores+="La contraseña debe tener al menos una letra mayuscula.";
    }

    let tieneDigito=false;
    for (let i=0;i<password.length;i++) {
        let caracter=password.charAt(i);
        if (caracter>="0"&&caracter<="9") {
            tieneDigito = true;
        }
    }
    if (!tieneDigito) {
        errores+="La contraseña debe tener al menos un digito.";
    }

    let tieneEspecial=false;
    for (let i=0;i<password.length;i++) {
        let caracter=password.charAt(i);
        if (caracter=="*"||caracter=="-"||caracter=="_") {
            tieneEspecial=true;
        }
    }
    if (!tieneEspecial) {
        errores+="La contrasena debe tener al menos un caracter especial (*, - o _).";
    }
    
    return errores;
}

ejecutarValidacion=function() {
    let password = recuperarTexto("txtPasword");
    let resultadoValidacion=validarPassword(password);
    
    if (resultadoValidacion=="") {
       mostrarTexto("txtError","Password Correcto");
    } else {
    mostrarTexto("txtError","Errores de validacion:" + resultadoValidacion);
    }
}