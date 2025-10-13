let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

let esNuevo=false;

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table class='tabla-empleados'><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>" +
                         "<td>"+elementoEmpleado.nombre+"</td>" +
                         "<td>"+elementoEmpleado.apellido+"</td>" +
                         "<td>"+elementoEmpleado.sueldo+"</td>" +
                         "</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

ejecutarNuevo=function(){
    esNuevo=true
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

}

buscarEmpleado =function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        if(elementoEmpleado.cedula==cedula){
            empleadoEncontrado=elementoEmpleado;
            break;
        }
    } 
    return empleadoEncontrado;
}

agregarEmpleado=function(empleado){
    let resultado=buscarEmpleado(empleado.cedula);
    if(resultado==null){
        empleados.push(empleado);
        esNuevo=true;
    }else{
        esNuevo=false;
    }

}


guardar=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarFloat("txtSueldo");

    let validacion=true;
    if(valorCedula.length!==10){
        validacion=false;
        mostrarTexto("lblErrorCedula","La cedula debe tener exactamente 10 caracteres");
    }
    if(valorNombre.length<3){
        validacion=false;
        mostrarTexto("lblErrorNombre","El nombre debe tener minimo 3 caracteres");
    }else {
        let soloMayusculas=true;
        for (let i=0;i<valorNombre.length;i++) {
            let caracter=valorNombre[i];
            if (!esMayuscula(caracter)) {
                soloMayusculas=false;
                break;
            }
        }
        if (!soloMayusculas) {
            validacion=false;
            mostrarTexto("lblErrorNombre","El nombre debe tener solo mayusculas");
        }
    }
    if(valorApellido.length<3){
        validacion=false;
         mostrarTexto("lblErrorApellido","El nombre debe tener minimo 3 caracteres");
    }else {
        let soloMayusculas=true;
        for (let i=0;i<valorApellido.length;i++) {
            let caracter=valorApellido[i];
            if (!esMayuscula(caracter)) {
                soloMayusculas=false;
                break;
            }
        }
        if (!soloMayusculas) {
            validacion=false;
            mostrarTexto("lblErrorApellido","El nombre debe tener solo mayusculas");
        }
    }
    if(isNaN(valorSueldo)){
        validacion=false;
        mostrarTexto("lblErrorSueldo","El sueldo debe ser solo numeros");
    } else if (valorSueldo<400||valorSueldo>5000){
        validacion=false;
        mostrarTexto("lblErrorSueldo","El sueldo debe ser minimo 400 maximo 50000");
    }

    if(validacion){
        let empleadoExiste=buscarEmpleado(valorCedula);
        if(empleadoExiste!==null){
                empleadoExiste.nombre=valorNombre;
                empleadoExiste.apellido=valorApellido;
                empleadoExiste.sueldo=valorSueldo;
                
                alert("EMPLEADO MODIFICADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitar();
                esNuevo=false;
        }else{
                let nuevoEmpleado={};
                nuevoEmpleado.cedula=valorCedula;
                nuevoEmpleado.nombre=valorNombre;
                nuevoEmpleado.apellido=valorApellido;
                nuevoEmpleado.sueldo=valorSueldo;

                let guardarCorrecto=agregarEmpleado(nuevoEmpleado);
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitar();
                esNuevo=false;
        }
    }
    
}

ejecutarBusqueda=function(){
    let cedulaBusqueda=recuperarTexto("txtBusquedaCedula");
    let empleadoEncontrado=buscarEmpleado(cedulaBusqueda);
    if(empleadoEncontrado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre",empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido",empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleadoEncontrado.sueldo);
    }
    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
}

limpiar=function(){
    deshabilitar();
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false;
}