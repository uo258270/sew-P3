"use strict"
class Procesador{

    constructor(){

    }

    procesar(files){
        this.api();
        var nBytes=0;
        for (var i = 0; i < files.length; i++) {
            var archivo = files[i];
            this.crearElemento("p", "Archivo: " + i, "footer");
            this.propiedades(archivo);
            nBytes += archivo.size;

            var texto = /text.*/;
            var json = /application.json/;
            if (archivo.type.match(texto) || archivo.type.match(json))
                this.contenido(archivo);
        }
        document.getElementById("numero").innerHTML = files.length;
        document.getElementById("tamaño").innerHTML = nBytes + " bytes";
    }

    api(){
        if (window.File && window.FileReader && window.FileList && window.Blob){
			document.getElementById("soporte").innerHTML = "<p>Este navegador soporta el API File </p>";
		} else {
			document.getElementById("soporte").innerHTML = "<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>";
		}
    }

    crearElemento(tipo, texto, antesde){
        var elemento = document.createElement(tipo);
        elemento.innerHTML = texto;
        $(antesde).before(elemento);
    }
    
    propiedades(archivo){
        this.crearElemento("p", "Nombre: "+ archivo.name, "footer");
        this.crearElemento("p", "Tamaño: "+ archivo.size + "bytes", "footer");
        this.crearElemento("p", "Tipo: "+ archivo.type, "footer" );
    }

    contenido(archivo){
        this.crearElemento("p", "Contenido: ", "footer");
        var reader = new FileReader();
        reader.onloadend = function(evento){
            var elemento = document.createElement("pre");
            elemento.innerHTML = reader.result;
            $("footer").before(elemento);
        };
        reader.readAsText(archivo);
    }
}
var procesador = new Procesador();