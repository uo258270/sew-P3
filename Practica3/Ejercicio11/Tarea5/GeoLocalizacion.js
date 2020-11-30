class MapaDinamico {

  constructor() {
    this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
    navigator.geolocation.getCurrentPosition(this.obtenerPosicion.bind(this), this.verErrores.bind(this));
  }

  obtenerPosicion(posicion) {
    this.mensaje = "Petición de posicionamiento correcta";
    this.longitud = posicion.coords.longitude;
    this.latitud = posicion.coords.latitude;
    this.precision = posicion.coords.accuracy;
  }

  verPosicion(ubicacion) {
    var ubicacion = document.getElementById(ubicacion);
    var informacion = '';
    informacion += '<p>Longitud: ' + this.longitud + ' grados</p>';
    informacion += '<p>Latitud: ' + this.latitud + ' grados</p>';
    informacion += '<p>Precisión de la latitud y longitud: ' + this.precision + ' metros</p>';
    ubicacion.innerHTML = informacion;
  }

  initMap() {
    var mapa = new google.maps.Map(document.getElementById('map'));
    mapa.setCenter({ lat: 40.4167, lng: -3.70325 });
    mapa.setZoom(10);
    mapa.setMapTypeId(google.maps.MapTypeId.HYBRID);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        mapa.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
        mapa.setZoom(10);
        var marcador = new google.maps.Marker({
          position: { lat: position.coords.latitude, lng: position.coords.longitude },
          map: mapa
        });
      }, this.verErrores);
    }
    else {
      alert("No ha sido posible centrar el mapa en su posición");
    }
  }

  verErrores(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.mensaje = "Petición de posicionamiento no permitida por el usuario";
        break;
      case error.POSITION_UNAVAILABLE:
        this.mensaje = "Información no disponible";
        break;
      case error.TIMEOUT:
        this.mensaje = "La petición de posicionamiento ha caducado";
        break;
      case error.UNKNOWN_ERROR:
        this.mensaje = "Se ha producido un error desconocido";
        break;
    }
  }

}

var mapa = new MapaDinamico();