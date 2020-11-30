
class Mapa{

    constructor(){
        var location;

        
    }

    initMap(){
        this.map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 10,
            center: {
                lat: 0,
                lng: 0
            }
        });

        google.maps.event.addListener(this.map, 'click', (event) => {
            var startLocation = event.latLng;
            setTimeout(() => this.placeMarker(startLocation), 600);
     });
    }


    placeMarker(location) {
        new google.maps.Marker({position: location, map: this.map});
}

}


var map = new Mapa();