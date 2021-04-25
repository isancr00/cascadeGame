function preguntaCookies(){
    var confirmacion = confirm("¿Desea que se almacenen datos locales del pasatiempo? De esta manera, puede guardar y cargar su progreso");
    if(confirmacion){
        document.getElementById("cookies").innerHTML += "Almacenamiento permitido";
    }else{
        document.getElementById("cookies").innerHTML += "Almacenamiento no permitido";
    }
}

function limpiarPasatiempo(){
    document.getElementById("datos").reset();
}

function acercaDe(){
    var pestania = window.open();
    pestania.document.open();
    contenido = "<!DOCTYPE html><html><style>h1{text-align: center;font-family: monospace;}</style><head><title>Acerca de la pr&aacutectica</title></head><body><h1>PRACTICA PASATIEMPO EN CASCADA APLICACIONES WEB</h1><div><p>Esta es la Pr&aacutectica 1 correspondiente a la asignatura de Aplicaciones Web.</p><p>La pr&aacutectica consiste en la realizac&oacuten de un pasatiempo en cascada.</p><p>El pasatiempo contiene una serie de pistas correspondientes a ciertas palabras identificadas en el tablero como números. A partir de dichas palabras, se han de descubrir las palabras intermedias.Esto se consigue cambiando una letra de la palabra anterior, para así obtener la siguiente. Todas las palabras tienen que estar contenidas en el diccionario contenido en: <a href= ´https://ordenalfabetix.unileon.es/aw/diccionario.txt´>Diccionario</a></p></div></body></html>"
    pestania.document.write(contenido);
    
}

function comprobarPalabra(){
    document.getElementById("cookies").innerHTML += "Funcionando cielo"
}
