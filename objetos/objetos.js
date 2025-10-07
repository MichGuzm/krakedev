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