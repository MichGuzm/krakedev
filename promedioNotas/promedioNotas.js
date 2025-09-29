calcularPromedioNotas=function(){
    let n1=recuperarFlotante("nota1");
    let n2=recuperarFlotante("nota2");
    let n3=recuperarFlotante("nota3");
    let promedio=calcularPromedio(n1,n2,n3);
    let promedioFormateado=promedio
    let cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=promedioFormateado.toFixed(2);

    if(promedioFormateado<5 && promedioFormateado>0){
    let cmpImagenBandera=document.getElementById("img");
    cmpImagenBandera.src="fracaso.gif";
    let cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="REPROBASTE";
    }else if(promedioFormateado>=5 && promedioFormateado<=8){
    let cmpImagenBandera=document.getElementById("img");
    cmpImagenBandera.src="buentrabajo.gif";
    let cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="BUEN TRABAJO";
    }else if(promedioFormateado>=8 && promedioFormateado<=10){
    let cmpImagenBandera=document.getElementById("img");
    cmpImagenBandera.src="exito.gif";
    let cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="EXCELENTE";
    }else{
    let cmpImagenBandera=document.getElementById("img");
    cmpImagenBandera.src="error.gif";
    let cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="DATOS INCORRECTOS";
    }
}