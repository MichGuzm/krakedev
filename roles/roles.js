let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

let roles=[];
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

buscarPorRol=function(){
    let cedulaRol=recuperarTexto("txtBusquedaCedulaRol");
    let empleado=buscarEmpleado(cedulaRol);
    if(empleado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTexto("infoCedula",empleado.cedula);
        mostrarTexto("infoNombre",empleado.nombre+" "+empleado.apellido);
        mostrarTexto("infoSueldo",empleado.sueldo);
    }
}

calcularAporteEmpleado=function(sueldo){
    let aporte=sueldo*0.0945;
    return aporte;
}

calcularValorAPagar=function(sueldo,aporte,descuento){
    let ValorAPagar=sueldo-aporte-descuento;
    return ValorAPagar;
}

calcularRol=function(){
    let valorSueldo=recuperarFloatDiv("infoSueldo");
    let valorDescuento=recuperarFloat("txtDescuentos");
    if(isNaN(valorDescuento)){
        mostrarTexto("lblErrorDescuentos","Los descuentos deben ser un número");
        return;
    }
    if(valorDescuento<0&&valorDescuento>valorSueldo){
        mostrarTexto("lblErrorDescuentos","Los descuentos no pueden ser menores a 0");
        return;
    }

    let valorAporte= calcularAporteEmpleado(valorSueldo);
    let valorAPagar = calcularValorAPagar(valorSueldo, valorAporte, valorDescuento);
    mostrarTexto("infoIESS",valorAporte);
    mostrarTexto("infoPago",valorAPagar);
    habilitarComponente("btnGuardarRol");
}

buscarRol=function(cedula){
    let elementoRol;
    let rolEncontrado=null;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        if(elementoRol.cedula==cedula){
            rolEncontrado=elementoRol;
            break;
        }
    }
    return rolEncontrado;
}

agregarRol=function(rol){
    let rolExistente=buscarRol(rol.cedula);
    if(rolExistente!==null){
        alert("Ya existe un rol registrado para la cédula: "+rol.cedula);
    } else {
        roles.push(rol);
        alert("Rol agregado correctamente");
    }
}

calcularAporteEmpleador=function(sueldo){
    let aporteEmpleador=sueldo*0.1115;
    return aporteEmpleador;
}

guardarRol=function(){
    let cedula=recuperarTextoDiv("infoCedula");
    let valorAPagar=recuperarFloatDiv("infoPago");
    let aporteEmpleado=recuperarFloatDiv("infoIESS");
    let nombre=recuperarTextoDiv("infoNombre");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporteEmpleador=calcularAporteEmpleador(sueldo);

    let nuevoRol={};

    nuevoRol.cedula=cedula;
    nuevoRol.nombre=nombre;
    nuevoRol.sueldo=sueldo;
    nuevoRol.valorAPagar=valorAPagar;
    nuevoRol.aporteEmpleado=aporteEmpleado;
    nuevoRol.aporteEmpleador=aporteEmpleador;

    agregarRol(nuevoRol);
    deshabilitarComponente("btnGuardarRol");
    mostrarTotales();

}

mostrarRoles=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let contenidoTabla="<table class='tabla-empleados'><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th>"+
    "</tr>";
    
    let elementoResumen;
    for(let i=0;i<roles.length;i++){
        elementoResumen=roles[i];
        contenidoTabla+="<tr><td>"+elementoResumen.cedula+"</td>" +
                         "<td>"+elementoResumen.nombre+"</td>" +
                         "<td>"+elementoResumen.valorAPagar+"</td>" +
                         "<td>"+elementoResumen.aporteEmpleado+"</td>" +
                         "<td>"+elementoResumen.aporteEmpleador+"</td>" +
                         "</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarTotales=function(){
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;

    for(let i=0;i<roles.length;i++){
        let rol=roles[i];

        totalEmpleado+=rol.aporteEmpleado;
        totalEmpleador+=rol.aporteEmpleador;
        totalAPagar+=rol.valorAPagar;
    }

    let totalNomina=totalEmpleado+totalEmpleador+totalAPagar;
    mostrarTexto("infoNomina",totalNomina);
    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado",totalEmpleado.toFixed(2));
}