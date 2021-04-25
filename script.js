function preguntaCookies(){
    var confirmacion = confirm("¿Desea que se almacenen datos locales del pasatiempo? De esta manera, puede guardar y cargar su progreso");
    if(confirmacion){
        document.getElementById("cookies").innerHTML += "Almacenamiento permitido";
    }else{
        document.getElementById("cookies").innerHTML += "Almacenamiento no permitido";
    }
}

function limpiarPasatiempo(){
    document.getElementById("letra1P1").innerHTML = ""
    document.getElementById("letra2P1").innerHTML = ""
    document.getElementById("letra3P1").innerHTML = ""
    document.getElementById("letra4P1").innerHTML = ""

    document.getElementById("letra1P2").innerHTML = ""
    document.getElementById("letra2P2").innerHTML = ""
    document.getElementById("letra3P2").innerHTML = ""
    document.getElementById("letra4P2").innerHTML = ""

    document.getElementById("letra1P3").innerHTML = ""
    document.getElementById("letra2P3").innerHTML = ""
    document.getElementById("letra3P3").innerHTML = ""
    document.getElementById("letra4P3").innerHTML = ""

    document.getElementById("letra1P4").innerHTML = ""
    document.getElementById("letra2P4").innerHTML = ""
    document.getElementById("letra3P4").innerHTML = ""
    document.getElementById("letra4P4").innerHTML = ""

    document.getElementById("letra1P5").innerHTML = ""
    document.getElementById("letra2P5").innerHTML = ""
    document.getElementById("letra3P5").innerHTML = ""
    document.getElementById("letra4P5").innerHTML = ""

    document.getElementById("letra1P6").innerHTML = ""
    document.getElementById("letra2P6").innerHTML = ""
    document.getElementById("letra3P6").innerHTML = ""
    document.getElementById("letra4P6").innerHTML = ""

    document.getElementById("letra1P7").innerHTML = ""
    document.getElementById("letra2P7").innerHTML = ""
    document.getElementById("letra3P7").innerHTML = ""
    document.getElementById("letra4P7").innerHTML = ""
    document.getElementById("letra5P7").innerHTML = ""
    document.getElementById("letra6P7").innerHTML = ""

    document.getElementById("letra1P8").innerHTML = ""
    document.getElementById("letra2P8").innerHTML = ""
    document.getElementById("letra3P8").innerHTML = ""
    document.getElementById("letra4P8").innerHTML = ""
    document.getElementById("letra5P8").innerHTML = ""
    document.getElementById("letra6P8").innerHTML = ""

    document.getElementById("letra1P9").innerHTML = ""
    document.getElementById("letra2P9").innerHTML = ""
    document.getElementById("letra3P9").innerHTML = ""
    document.getElementById("letra4P9").innerHTML = ""
    document.getElementById("letra5P9").innerHTML = ""
    document.getElementById("letra6P9").innerHTML = ""

    document.getElementById("letra1P10").innerHTML = ""
    document.getElementById("letra2P10").innerHTML = ""
    document.getElementById("letra3P10").innerHTML = ""
    document.getElementById("letra4P10").innerHTML = ""
    document.getElementById("letra5P10").innerHTML = ""
    document.getElementById("letra6P10").innerHTML = ""

    document.getElementById("letra1P11").innerHTML = ""
    document.getElementById("letra2P11").innerHTML = ""
    document.getElementById("letra3P11").innerHTML = ""
    document.getElementById("letra4P11").innerHTML = ""
    document.getElementById("letra5P11").innerHTML = ""
    document.getElementById("letra6P11").innerHTML = ""

    document.getElementById("letra1P12").innerHTML = ""
    document.getElementById("letra2P12").innerHTML = ""
    document.getElementById("letra3P12").innerHTML = ""
    document.getElementById("letra4P12").innerHTML = ""
    document.getElementById("letra5P12").innerHTML = ""
    document.getElementById("letra6P12").innerHTML = ""    
}

function acercaDe(){
    var pestania = window.open();
    pestania.document.open();
    contenido = "<!DOCTYPE html><html><style>h1{text-align: center;font-family: monospace;}</style><head><title>Acerca de la pr&aacutectica</title></head><body><h1>PRACTICA PASATIEMPO EN CASCADA APLICACIONES WEB</h1><div><p>Esta es la Pr&aacutectica 1 correspondiente a la asignatura de Aplicaciones Web.</p><p>La pr&aacutectica consiste en la realizac&oacuten de un pasatiempo en cascada.</p><p>El pasatiempo contiene una serie de pistas correspondientes a ciertas palabras identificadas en el tablero como números. A partir de dichas palabras, se han de descubrir las palabras intermedias.Esto se consigue cambiando una letra de la palabra anterior, para así obtener la siguiente. Todas las palabras tienen que estar contenidas en el diccionario contenido en: <a href= ´https://ordenalfabetix.unileon.es/aw/diccionario.txt´>Diccionario</a></p></div></body></html>"
    pestania.document.write(contenido);
    
}
