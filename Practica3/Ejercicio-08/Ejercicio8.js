class Meteo{
    constructor(ciudad){
        this.apikey = "eead63283ca6a58092a7b5e02a4e9a5a";
        this.ciudad = ciudad;
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.datos = new Datos(this.url);
    }
    verJSON(){
        this.datos.cargarDatos();
        $('#resultado h3').text(this.ciudad);
    }

}

class Datos{

    constructor(url){
        this.url = url;
    }

    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                $("#resultado pre").text(JSON.stringify(datos, null, 2));

                var tiempo = "<ul><li>Ciudad: " + datos.name + "</li>";
                    tiempo += "<li>País: " + datos.sys.country + "</li>";
                    tiempo += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    tiempo += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                    tiempo += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                    tiempo += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                    tiempo += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                    tiempo += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    tiempo += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    tiempo += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>";
                    tiempo += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>";
                    tiempo += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    tiempo += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    tiempo += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>";
                    tiempo += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>";
                    tiempo += "<li>Descripción: " + datos.weather[0].description + "</li>";
                    tiempo += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                    tiempo += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                var icon = datos.weather[0].icon;
                var urlIcon = "http://openweathermap.org/img/w/" + icon + ".png";
                    tiempo += '<img src="' + urlIcon + '"/>';        
                
                    $('#resultado div').html(tiempo);
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
