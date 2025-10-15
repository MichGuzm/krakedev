let personas=[{nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5}];

agregarPersona=function(){
    let nombrePersona=recuperarTexto("txtNombre");
    let edadPersona=recuperarTexto("txtEdad");
    let validacion=true;
    if(nombrePersona.length<3){
        mostrarTexto("errorNombre","Nombre debe tener al menos 3 caracteres");
        validacion=false;
    }
    if(edadPersona<0||edadPersona>100){
        mostrarTexto("errorEdad","Edad debe ser entre 0 a 100");
        validacion=false;
    }

    if(validacion==true){
        let nuevaPersona={};
        nuevaPersona.nombre=nombrePersona;
        nuevaPersona.edad=edadPersona;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    }
}

mostrarPersonas=function(){
    let cmpTabla=document.getElementById("tablaPersonas");
    let contenidoTabla="<table class='tablaPersonas'><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";
    
    let elementoResumen;
    for(let i=0;i<personas.length;i++){
        elementoResumen=personas[i];
        contenidoTabla+="<tr><td>"+elementoResumen.edad+"</td>" +
                         "<td>"+elementoResumen.nombre+"</td>" +
                         "</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        if(elementoPersona.edad>personaMayor.edad){
            console.log(elementoPersona.nombre+" es mayor que "+personaMayor.nombre)
            personaMayor=elementoPersona;
            
        }
    }
    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("lblMayor",mayor.nombre+" "+mayor.edad);
}

encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        if(elementoPersona.edad<personaMenor.edad){
            console.log(elementoPersona.nombre+" es mayor que "+personaMenor.nombre)
            personaMenor=elementoPersona;
            
        }
    }
    return personaMenor;
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("lblMenor",menor.nombre+" "+menor.edad);
}
