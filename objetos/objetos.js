probarAtributos=function(){
    let persona={
        nombre:"Juan",
        apellido:"Morales",
        edad:24,
        estaVivo:true
    }

    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto=function(){
    let producto1={
        nombre:"Nata de Vaca",
        precio:1.20,
        stock:5
    }
    
    let producto2={
        nombre:"Leche",
        precio:0.90,
        stock:10
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock");
    }else if(producto1.stock==producto2.stock){
        console.log("Ambos tienen el mismo stock");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero:"53455",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"171231",
        nombre:"Juan"
    }

    let cliente1={};
    cliente1.nombre="Julia";
    cliente1.apellido="Apellido";
    cliente1.cedula="522130";
}

probarIncrementoSaldo=function(){
    let cta={numero:"553535",saldo:34.0};
    
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(){
    let persona1={nombre:"Juan",edad:45};
    let persona2={nombre:"Maria",edad:43};
    let mayor;
    mayor=determinarMayor(persona1,persona2);
    if(mayor!=null){
        console.log("El mayor es "+mayor.nombre);
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona1.edad<persona2.edad){
        return persona2;
    }else{
        return null;
    }
}