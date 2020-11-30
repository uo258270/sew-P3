"use strict";

class MapaKml{

    constructor() {
        this.errorArchivo = "";
    }

    initMap() {
                this.map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 10,
                    center: {
                        lat: 0,
                        lng: 0
                    }
                });

    }

    loadFile(event) {
        var file = event.target.files[0];
        this.errorArchivo = document.getElementById("errorLectura");
        if (file.name.includes('.kml')){
            let error = $("#errorLectura");
            error.empty();
            var reader = new FileReader();
            reader.onloadend = (event) => {
                console.log(reader.result);
                var geoXml = new geoXML3.parser({map: this.map});
                geoXml.parseKmlString(reader.result);
                
            };

            reader.readAsText(file);
        } else {
            let div = $("#mapa");
            div.empty();
            this.errorArchivo.innerText = "Error, archivo no válido";
        }
    }
}

var mapaKml = new MapaKml();