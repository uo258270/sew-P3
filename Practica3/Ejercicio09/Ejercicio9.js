class Meteo{
    constructor(ciudad){
        this.apikey = "eead63283ca6a58092a7b5e02a4e9a5a";
        this.ciudad = ciudad;
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.datos = new Datos(this.url);
    }
    verXML(){
        

        this.nuevoElemento("h4", "Datos", "footer");
        this.nuevoElemento("p", "", "footer");
        this.nuevoElemento("h4", "XML", "footer");
        this.nuevoElemento("h5", "", "footer");

        this.datos.cargarDatos();
        $('#resultado h3').text(this.ciudad);
    }

    nuevoElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

}

class Datos{

    constructor(url){
        this.url = url;
    }

    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
                $("#resultado pre").text(new XMLSerializer().serializeToString(datos));

                var totalNodos = $('*', datos).length;
                var datosNuevos = "<ul><li>Número de elementos del XML: " + totalNodos + "</li>";

                var icon = $('weather', datos).attr("icon");
                var ciudad = $('city', datos).attr("name");
                datosNuevos += "<ul><li>Ciudad: " + ciudad + "<img src=http://openweathermap.org/img/w/" + icon + ".png></li>";

                var longitud = $('coord', datos).attr("lon");
                datosNuevos += "<li>Longitud: " + longitud + " grados</li>";

                var latitud = $('coord', datos).attr("lat");
                datosNuevos += "<li>Latitud: " + latitud + " grados</li>";

                var pais = $('country', datos).text();
                datosNuevos += "<li>País: " + pais + "</li>";

                var amanecer = $('sun', datos).attr("rise");
                var minutosZonaHoraria = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                datosNuevos += "<li>Amanece a las: " + amanecerLocal + "</li>";

                var oscurecer = $('sun', datos).attr("set");
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                datosNuevos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";

                var temperatura = $('temperature', datos).attr("value");
                datosNuevos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";

                var temperaturaMin = $('temperature', datos).attr("min");
                datosNuevos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";

                var temperaturaMax = $('temperature', datos).attr("max");
                datosNuevos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";

                var temperaturaUnit = $('temperature', datos).attr("unit");
                datosNuevos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";

                var humedad = $('humidity', datos).attr("value");
                var humedadUnit = $('humidity', datos).attr("unit");
                datosNuevos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";

                var presion = $('pressure', datos).attr("value");
                var presionUnit = $('pressure', datos).attr("unit");
                datosNuevos += "<li>Presión: " + presion + " " + presionUnit + "</li>";

                var velocidadViento = $('speed', datos).attr("value");
                datosNuevos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";

                var nombreViento = $('speed', datos).attr("name");
                datosNuevos += "<li>Nombre del viento: " + nombreViento + "</li>";

                var direccionViento = $('direction', datos).attr("value");
                datosNuevos += "<li>Dirección del viento: " + direccionViento + " grados</li>";

                var codigoViento = $('direction', datos).attr("code");
                datosNuevos += "<li>Código del viento: " + codigoViento + "</li>";

                var nombreDireccionViento = $('direction', datos).attr("name");
                datosNuevos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";

                var nubosidad = $('clouds', datos).attr("value");
                datosNuevos += "<li>Nubosidad: " + nubosidad + "</li>";

                var nombreNubosidad = $('clouds', datos).attr("name");
                datosNuevos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";

                var visibilidad = $('visibility', datos).attr("value");
                datosNuevos += "<li>Visibilidad: " + visibilidad + " metros</li>";

                var precipitacionValue = $('precipitation', datos).attr("value");
                datosNuevos += "<li>Precipitación valor: " + precipitacionValue + "</li>";

                var precipitacionMode = $('precipitation', datos).attr("mode");
                datosNuevos += "<li>Precipitación modo: " + precipitacionMode + "</li>";

                var descripcion = $('weather', datos).attr("value");
                datosNuevos += "<li>Descripción: " + descripcion + "</li>";

                var horaMedida = $('lastupdate', datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                datosNuevos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";

                var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                datosNuevos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                
                    $('#resultado div').html(datosNuevos);
            },
            error:function(){
                $("h4").remove();
                $("pre").remove();
                $("p").remove();   
            }
        });
    }
}

var oviedo = new Meteo("Oviedo");
var gijon = new Meteo("Gijón");
var aviles = new Meteo("Avilés");
var salinas = new Meteo("Salinas");
var llanes = new Meteo("Llanes");