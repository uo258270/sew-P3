class Ejercicio6{

    constructor() {
        $(() => this.inicializarControles());
    }

    calculoPagosMensuales(){
        let importe = parseFloat($('#iprestamo').val());

        let interes = parseFloat($('#iinteres').val()) / 100;

        let tiempo = parseFloat($('#itiempo').val());

        let result = (importe +(importe*interes)) / tiempo;
        $('#resultado div').text(result);

    }
    inicializarControles() {
        $('#btnPago').click(() => this.calculoPagosMensuales());
       
    }

}

var ejercicio6 = new Ejercicio6;