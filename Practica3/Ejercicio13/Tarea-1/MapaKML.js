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
            reader.onloadend = () => {
                console.log(reader.result);
                $('coordinates', reader.result)
                    .each((i, element) => {
                        var coordenadas = $(element).text().split('\n');
                        console.log(coordenadas);
                        var puntos = [];
                        coordenadas.forEach((coord)=>{
                            var latlng = {
                                lat: parseFloat(coord.split(',')[1]),
                                lng: parseFloat(coord.split(',')[0]),
                            };
                            if(isNaN(latlng.lat) || isNaN(latlng.lng)) return;
                            puntos.push(latlng);
                        });
                        new google.maps.Polyline({
                            path: puntos,
                            map: this.map
                        });
                    });
            }

        
            reader.readAsText(file);
            
        } else {
            let div = $("#mapa");
            div.empty();
            this.errorArchivo.innerText = "Error, archivo no válido";
        }
    }
}

var mapaKml = new MapaKml();