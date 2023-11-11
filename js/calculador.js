let resultado = document.getElementById("resultado");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let reset = document.getElementById("reset");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");

let valor1=0;
let bandera=true;
let bandera2=false;
let total=0;

cero.onclick = function (e) {
    if (bandera) {
    if ( resultado.textContent.length<10) {
        if(resultado.textContent!=="0"){
            resultado.textContent=resultado.textContent+"0";
        }
    }else{
        resultado.textContent=="0"
        bandera=true;
    }
}
    
    
}

uno.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="1";
            }else{
                resultado.textContent=resultado.textContent+"1";
            }
        }
    }else{
        resultado.textContent="1";
        bandera=true;
    }
    
    
}

dos.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="2";
            }else{
                resultado.textContent=resultado.textContent+"2";
            }
        }
    }else{
        resultado.textContent="2";
        bandera=true;
    }
    
    
}


tres.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="3";
            }else{
                resultado.textContent=resultado.textContent+"3";
            }
        }
    }else{
        resultado.textContent="3";
    }
    
}

cuatro.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="4";
            }else{
                resultado.textContent=resultado.textContent+"4";
            }
        }
    }else{
        resultado.textContent="4";
    }
    
}


cinco.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="5";
            }else{
                resultado.textContent=resultado.textContent+"5";
            }
        }
    }else{
        resultado.textContent="5";
    }
    
}


seis.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="6";
            }else{
                resultado.textContent=resultado.textContent+"6";
            }
        }
    }else{
        resultado.textContent="6";
    }
    
}

siete.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="7";
            }else{
                resultado.textContent=resultado.textContent+"7";
            }
        }
    }else{
        resultado.textContent="7";
    }
    
}


ocho.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="8";
            }else{
                resultado.textContent=resultado.textContent+"8";
            }
        }
    }else{
        resultado.textContent="8";
    }
    
}

nueve.onclick = function (e) {
    if (bandera) {
        if ( resultado.textContent.length<10) {
            if(resultado.textContent=="0"){
                resultado.textContent="9";
            }else{
                resultado.textContent=resultado.textContent+"9";
            }
        }
    }else{
        resultado.textContent="9";
    }
    
}


reset.addEventListener('click', limpiar);
function limpiar (e) {
    resultado.textContent="0";
    valor1=0;
    bandera=true;
    bandera2=false;
    total=0;
    
}

suma.onclick = function(e){
    if (bandera2) {
    let total2 = parseFloat(valor1)+parseFloat(resultado.textContent);
    resultado.textContent=total2;  
    }

resta.onclick = function(e){
        if (bandera2) {
        let total2 = parseFloat(valor1)+parseFloat(resultado.textContent);
        resultado.textContent=total2;  
        }
    }

valor1 = resultado.textContent;
bandera=false;
bandera2=true;
}

igual.onclick = function(e){
    total = parseFloat(valor1)+parseFloat(resultado.textContent);
    resultado.textContent=total;
    bandera=true;
    bandera2=false;
    }

    punto.onclick = function (e) {
        if (resultado.textContent.indexOf(".")<1) {
            if (bandera) {
                if ( resultado.textContent.length<10) {
                    if(resultado.textContent=="0"){
                        resultado.textContent="0.";
                    }else{
                        resultado.textContent=resultado.textContent+".";
                    }
                }
                console.log(resultado.textContent.indexOf("."));
            }else{
                resultado.textContent=".";
                bandera=true;
            } 
        }      
    }
