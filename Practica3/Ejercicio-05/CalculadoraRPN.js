class Calculadora{

    constructor(){
        this.pantalla="0";
        this.resultado=false;
        this.memoria="";
        this.memoriaActual="";
        this.stack = [];
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
       let b =parseFloat(this.stack.pop());
       let a =parseFloat(this.stack.pop());

        if(operador == "+")
            a+=b;
        else if(operador == "-")
            a-=b;
        else if(operador == "*")
            a*=b;
        else if(operador == "/")
            a/=b;
//        this.stack.push(a);
        this.cleanPantalla();
        this.pantalla = a;
        this.updatePantalla();
    }

    showResult(){
        this.stack.push(this.pantalla);
        this.cleanPantalla();

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
        this.cleanPantalla();
        this.memoriaActual ="";
    }

    cleanTodo(){
        this.cleanResultado();
        this.memoria = "";
    }
}

class CalculadoraCientifica extends Calculadora {

    constructor(){
        super();
    }
    
    operation(operador){
        this.pantalla += operador;
        this.updatePantalla();
    }
    
    calcularMath(operador) {
        let a =parseFloat(this.stack.pop());

        switch (operador) {
            case "e":
                a = Math.exp(aux);
                break;
            case "log":
                a = Math.log(aux);
                break;
            case "Math.PI":
                a = Math.PI;
                break;
            case "x":
                a = Math.pow(10, aux);
                break;
            case "y":
                a = Math.pow(aux, this.memoria);
                break;
            case "raiz":
                a = Math.sqrt(10, aux);
                break;
            case "sin":
                a = Math.sin(10, aux);
                break;
            case "cos":
                a = Math.cos(10, aux);
                break;
            case "tan":
                a = Math.tan(10, aux);
                break;
            case "2":
                a = Math.pow(aux, 2);
                break;
        }
        this.stack.push(a);
        this.cleanPantalla();
        this.pantalla = a;
        this.updatePantalla();
    }

    pushValor(element) {
        this.stack.push(this.pantalla);
        this.cleanPantalla();
    }

    factorial() {
        var x = eval(this.pantalla);
        x = parseInt(x, 10);
        if (isNaN(x)) return 1;
    
        if (x <= 0) return 1;
        if (x > 170) return Infinity;
        var y = 1;
        for (var i = x; i > 0; i--) {
            y *= i;
        }
        this.pantalla = y;
        this.memoriaActual = this.pantalla;
        this.updatePantalla();
    }
    
    changeSign(){
    
        if ("+" == this.pantalla.substring(0, 1)) {
            this.pantalla = "-" + this.pantalla.substring(1, this.pantalla.length);
        } else if ("-" == this.pantalla.substring(0, 1)) {
            this.pantalla = "+" + this.pantalla.substring(1, this.pantalla.length);
        } else
            this.pantalla = "+" + this.pantalla.substring(0, this.pantalla.length);
            
        this.memoriaActual = this.pantalla;
        this.updatePantalla();
    }
    
    
    cleanPantallaPartial(){
        this.pantalla = this.pantalla.substring(0, this.pantalla.length -1);
        this.updatePantalla();
    }
    
    cleanPantalla(){
        this.pantalla="0";
        this.updatePantalla();
    }
    
    
    
}
    
    
    
    
    

var calculadora = new Calculadora();