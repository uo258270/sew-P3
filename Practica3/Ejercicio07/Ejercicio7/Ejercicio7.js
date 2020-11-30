
class Ejercicio7 {

    constructor() {
        $(() => this.inicializarControles());
    }

    ocultarParrafo() {
        $('#pOcultar').hide();
    }

    mostrarParrafo() {
        $('#pOcultar').show();
    }

    cambiarParrafo() {
        let nuevoTexto = $('#iTexto').val();
        $('#pCambiar').text(nuevoTexto);
    }

    añadirAppend(){
        $('#append').append("Estas usando Append()");
    }

    añadirPrepend(){
        $('#prepend').prepend("Estas usando Prepend()");
    }
    añadirAfter(){
        $('#after').after("<h2> Estas usando After()</h2>");

    }
    añadirBefore(){
        $('#before').before("<p>Estas usando Before()</p>");
    }

    eliminar(){
        $('#borrar').remove();
    }

    mostrarArbol(){

        $('*', document.body).each(function(){
            var etiquetaPadre = $(this).parent().get(0).tagName;
        $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
        
    }

    sumarTabla(){

        $('tr').each(function (indiceFila, fila) {
            $('td', fila).each(function (indiceColumna, celda) {
                let valor = parseInt($(celda).text());

            });
        });


      
    }

    inicializarControles() {
        $('#btnOcultar').click(() => this.ocultarParrafo());
        $('#btnMostrar').click(() => this.mostrarParrafo());
        $('#btnCambiar').click(() => this.cambiarParrafo());
        $('#btnAppend').click(() => this.añadirAppend());
        $('#btnPrepend').click(() => this.añadirPrepend());
        $('#btnAfter').click(() => this.añadirAfter());
        $('#btnBefore').click(() => this.añadirBefore());
        $('#btnBorrar').click(() => this.eliminar());
        $('#btnArbol').click(() => this.mostrarArbol());
        $('#btnTabla').click(() => this.sumarTabla());
    }

}

var ejercicio7 = new Ejercicio7();