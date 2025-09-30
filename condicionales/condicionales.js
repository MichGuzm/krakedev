calcularTasaInteres=function(ingresoAnual){
    if (ingresoAnual<300000) {
        return 0.16;
    } else if (ingresoAnual>=300000 && ingresoAnual<500000) {
        return 0.15;
    } else if (ingresoAnual>=500000 && ingresoAnual<1000000) {
        return 0.14;
    } else if (ingresoAnual>=1000000 && ingresoAnual<2000000) {
        return 0.13;
    } else {
        return 0.12;
    }
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let sobrante=ingresos-egresos;
    if(edad>50){
        return sobrante*0.30;
    }else if(edad<=50){
        return sobrante*0.40;
    }
}

calcularDescuento=function(precio,cantidad){
    let totalSinDescuento=precio*cantidad;
    let porcentajeDescuento=0;

    if (cantidad<3) {
        porcentajeDescuento=0;
    } else if (cantidad>=3 && cantidad<=5) {
        porcentajeDescuento=0.02;
    } else if (cantidad>=6 &&cantidad<= 11) {
        porcentajeDescuento=0.03;
    } else if (cantidad>=12) {
        porcentajeDescuento=0.04;
    }

    let descuento=totalSinDescuento*porcentajeDescuento;
    let totalConDescuento=totalSinDescuento-descuento;
    
    return totalConDescuento;
}

determinarColesterolLDL=function(nivelColesterol){
     if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol <= 129) {
        return "Casi óptimo";
    } else if (nivelColesterol <= 159) {
        return "Límite superior del rango normal";
    } else if (nivelColesterol <= 189) {
        return "Alto";
    } else {
        return "Muy alto";
    }
}

validarClave=function(clave){
     if (clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}

esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);

    if(codigoAscii>=65 && codigoAscii<=90){
        return true;
    }else {
        return false;
    }
}

esMinuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);

    if(codigoAscii>=97 && codigoAscii<=122){
        return true;
    }else if(codigoAscii>=160 && codigoAscii<=163){
        return true;
    } else {
        return false;
    }
}

esDigito=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);

    if(codigoAscii>=48 && codigoAscii<=57){
        return true;
    }else {
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 || notaFisica>90 || notaGeometria>90) {
        return true;
    } else {
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if ((notaMatematica>90 || notaFisica>90) && notaGeometria>80) {
        return true;
    } else {
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if ((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && notaFisica>notaMatematica) {
        return true;
    } else {
        return false;
    }
}