"use strict";
class Mapa{

    constructor(){
        
    }

    initMap(){
        var mipueblo = {lat: 43.1833, lng: -6.55};
        var mapaPueblo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:mipueblo});
        var marcador = new google.maps.Marker({position:mipueblo,map:mapaPueblo});
    }
}

var mapaDinamicoGoogle = new Mapa();