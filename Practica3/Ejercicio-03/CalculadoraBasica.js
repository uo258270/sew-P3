class Calculadora{

    constructor(){
        this.pantalla="0";
        this.resultado=false;
        this.memoria="";
        this.memoriaActual="";
    }

    updatePantalla() {
        var p = document.getElementById("pantalla");
        p.value = this.pantalla;
    }

    addDigit(numero){
        if(this.pantalla==0){
            this.pantalla=numero;
        }
        else if(this.resultado){
            this.cleanResultado();
            this.pantalla=numero;
        }
        else{
            this.pantalla += numero;
        }
        this.resultado=false;
        this.updatePantalla();
    }
    
    addPoint(){
		if(!this.pantalla.includes(".")){
            this.pantalla += ".";
        }
        this.updatePantalla();
    }

    operation(operador){
        this.memoriaActual += this.pantalla + " " + operador;
        this.cleanPantalla();
    }

    showResult(){
        this.memoriaActual+=this.pantalla;
        this.pantalla = eval(this.memoriaActual);
        this.updatePantalla();
        this.resultado = true;

    }

    showMemory(){
        this.pantalla = this.memoria;
        this.memoriaActual ="";
        this.updatePantalla()
    }

    moreMemory(){
        this.memoria += "+" + this.pantalla;
        this.memoria = eval(this.memoriaActual);
        this.cleanPantalla();
    
    }

    lessMemory(){
        this.memoria += "-" + this.pantalla;
        this.memoria = eval(this.memoriaActual);
        this.cleanPantalla();
    }

    cleanPantalla(){
        this.pantalla="0";
        this.updatePantalla();
    }

    cleanResultado(){
        this.limpiarPantalla();
        this.memoriaActual ="";
    }

    cleanTodo(){
        this.cleanResultado();
        this.memoria = "";
    }
}

var calculadora = new Calculadora();