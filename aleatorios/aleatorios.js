aleatorio=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*100;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorAleatorio=numeroEntero+1;
    return valorAleatorio;
}

generarAleatorios=function(){
    let aleatorios=[];
    let num=recuperarInt("txtNumber");
    if(num<5||num>20){
        return false;
    }
    for(let i=0;i<num;i++){
        console.log(i);
        let numero=aleatorio();
        aleatorios.push(numero);
    }
    mostrarResultados(aleatorios);
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("resultado");
    let contenidoTabla="<table><tr><th>NUMERO ALEATORIO</th></tr>";
    for (let i=0;i<arregloNumeros.length;i++) {
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arregloNumeros[i];
        contenidoTabla+="</td></tr>";
    }
    
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}
