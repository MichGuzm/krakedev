calcularPromedioNotas=function(){
    let n1=recuperarFlotante("nota1");
    let n2=recuperarFlotante("nota2");
    let n3=recuperarFlotante("nota3");
    let promedio=calcularPromedio(n1,n2,n3);
    let promedioFormateado=promedio
    let cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=promedioFormateado.toFixed(2);

    if(promedioFormateado>=7){
    let cmpImagenBandera=document.getElementById("img");
    cmpImagenBandera.src="exito.gif";
    }else{
    let cmpImagenBandera=document.getElementById("img");
    cmpImagenBandera.src="fracaso.gif";
    }
}