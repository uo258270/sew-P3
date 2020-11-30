"use strict"

class MapGeo {

    constructor() {
        this.errorArchivo = "";
        this.archivo = "";
    }

    initMap(event) {
        var file = event.target.files[0];
        this.errorArchivo = document.getElementById("errorLectura");
        if (file.name.includes('.geojson')) {
            let error = $("#errorLectura");
            error.empty();
            var reader = new FileReader();
            reader.onload = function (event) {
                var map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 8,
                });
                var geoJSON = JSON.parse(event.target.result);
                map.data.addGeoJson(geoJSON);
                var bounds = new google.maps.LatLngBounds();
                map.data.forEach(function (feature) {
                    mapGeo.processPoints(feature.getGeometry(), bounds.extend, bounds);
                });
                map.fitBounds(bounds);
            };
            reader.readAsText(file);
        } else {
            let div = $("#mapa");
            div.empty();
            this.errorArchivo.innerText = "Error, archivo no válido";
        }
    }

    processPoints(geometry, callback, thisArg) {
        if (geometry instanceof google.maps.LatLng) {
           callback.call(thisArg, geometry);
        } else if (geometry instanceof google.maps.Data.Point) {
            callback.call(thisArg, geometry.get());
        } else {
            geometry.getArray().forEach(function (g) {
                mapGeo.processPoints(g, callback, thisArg);
            });
        }
    }
}

var mapGeo = new MapGeo();
