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
    contenido = "<!DOCTYPE html><html><style>h1{text-align: center;font-family: monospace;}</style><head><title>Acerca de la pr&aacutectica</title></head><body><h1>PRACTICA PASATIEMPO EN CASCADA APLICACIONES WEB</h1><div><p>Esta es la Pr&aacutectica 1 correspondiente a la asignatura de Aplicaciones Web.</p><p>La pr&aacutectica consiste en la realizac&oacuten de un pasatiempo en cascada.</p><p>El pasatiempo contiene una serie de pistas correspondientes a ciertas palabras identificadas en el tablero como números. A partir de dichas palabras, se han de descubrir las palabras intermedias.Esto se consigue cambiando una letra de la palabra anterior, para así obtener la siguiente. Todas las palabras tienen que estar contenidas en el diccionario contenido en: <a href= https://ordenalfabetix.unileon.es/aw/diccionario.txt>Diccionario</a></p></div></body></html>"
    pestania.document.write(contenido);
    
}

function comprobarPalabra(id){
    var palabraActual = "";
    var idString = String(id);
    var estaCompleta = palabraCompleta(idString);
    if(estaCompleta){
        //Comprobamos que la palabra esté completa
        palabraActual = construirPalabra(id);
        estaEnDiccionario(palabraActual);

    }

}

function comprobarCompleto(){
    var form = document.getElementById("datos");

    for(var i=0;i<form.length;i++){
        if(form[i].value == ""){
            return false;
        }
    }
    
    if(isCorrecto()){
        alert("El crucigrama es correcto");
    }else{
        alert("El crucigrama presenta errores");
    }

    return true;

}

function isCorrecto(){
    var devuelve = true;
    var correcto = ["clan", "cian", "nací", "nace", "cena", "pena", "remato", "remoto", "motero", "lotero", "tolero", "torero"];

    for(var i=0;i<12;i++){
        var id = "letra1P" + (i+1);
        var palabra = construirPalabra(id);

        if(correcto[i] == palabra){
            devuelve = true;
        }else{
            return false;
        }
    }

    return devuelve;

}

function construirPalabra(id){
    var idString = id.toString();
    var letraString = idString.charAt(5);
    var palabraString = "";
    palabraString += idString.charAt(7);

    if(idString.charAt(8) != null){
        palabraString += idString.charAt(8);
    }

    var letra = parseInt(letraString.toString());
    var palabra = parseInt(palabraString.toString());
    var palabraActual = ""
    if(palabra < 7){
        for(var i=0;i<letra;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra;
            palabraActual += document.getElementById(palabraAux.toString()).value;
        }
        
        for(var i=letra;i<4;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra
            palabraActual += document.getElementById(palabraAux.toString()).value;
        }
    }else{
        for(var i=0;i<letra;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra;
            palabraActual += document.getElementById(palabraAux.toString()).value;
        }
        
        for(var i=letra;i<6;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra;
            palabraActual += document.getElementById(palabraAux.toString()).value;
        }

    }

    return palabraActual;
}

function estaEnDiccionario(palabraActual){
    var texto;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            texto = decode_utf8(this.responseText);

            if(!texto.includes(palabraActual.toLowerCase())){
                alert("La palabra no está contenida en el diccionario")
            }
        }
    };

    xhr.open("GET", "https://ordenalfabetix.unileon.es/aw/diccionario.txt", true);
    xhr.send();
   
}

function decode_utf8(s) {
    return decodeURIComponent(escape(s));
  }

function guardarEstado(){
    var cookies = document.getElementById("cookies").textContent;
    if(cookies == "Almacenamiento no permitido"){
        alert("El almacenamiento no ha sido permitido.");
        preguntaCookies();
    }else{
        var form = document.getElementById("datos");

        for(var i=0;i<form.length-1;i++){
            localStorage.setItem(form[i].id, form[i].value);
        }

    }

    console.log(localStorage);
}

function cargarEstado(){
    var form = document.getElementById("datos");

    for(var i=0;i<form.length-1;i++){
        form[i].value = localStorage.getItem(form[i].id);
    }
}

function limpiarAlmacenamiento(){
    localStorage.clear();
}

function palabraCompleta(idString){
    var completa = false;
    var letraString = idString.charAt(5);
    var palabraString = "";
    palabraString += idString.charAt(7);

    if(idString.charAt(8) != null){
        palabraString += idString.charAt(8);
    }

    var letra = parseInt(letraString.toString());
    var palabra = parseInt(palabraString.toString());

    if(palabra < 7){
        for(var i=0;i<letra;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra;

            if(document.getElementById(palabraAux.toString()).value != ""){
                completa = true
            }else{
                return false;
            }
        }
        
        for(var i=letra;i<4;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra

            if(document.getElementById(palabraAux.toString()).value != ""){
                completa = true;
            }else{
                return false;
            }
        }
    }else{
        for(var i=0;i<letra;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra;

            if(document.getElementById(palabraAux.toString()).value != ""){
                completa = true
            }else{
                return false;
            }
        }
        
        for(var i=letra;i<6;i++){
            var palabraAux = "letra" + (i+1) + "P" + palabra

            if(document.getElementById(palabraAux.toString()).value != ""){
                completa = true;
            }else{
                return false;
            }
        }

    }

    return completa
}
