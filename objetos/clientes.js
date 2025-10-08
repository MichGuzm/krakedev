let clientes=[{cedula:"1234545",nombre:"Juan",edad:20},
    {cedula:"2852585",nombre:"Maria",edad:25},
    {cedula:"8544212",nombre:"Martin",edad:40}];

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}

    modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}


    ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula);
    if(cliente==null){
        alert("cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedulaBusqueda",cliente.cedula);
          mostrarTextoEnCaja("txtNombre",cliente.nombre);
          mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);

}

agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
    clientes.push(cliente);
    alert("Cliente agregado");
    mostrarClientes();
    }else{
        alert("Ya existe el cliente con la cedula: "+cliente.cedula);
    }
}

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontardo=null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontardo=elementoCliente;
            break;
        }
    }
    return clienteEncontardo;
}

    mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"+"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
