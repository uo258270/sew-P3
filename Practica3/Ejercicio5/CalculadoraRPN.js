"use strict"
class CalculadoraRPN {
	constructor() {
		this.pila = new Array();
		this.consola = "";
	}
	boton0(){
		this.consola+="0";
		this.mostrarConsola();
	}
	boton1(){
		this.consola+="1";
		this.mostrarConsola();
	}
	boton2(){
		this.consola+="2";
		this.mostrarConsola();
	}
	boton3(){
		this.consola+="3";
		this.mostrarConsola();
	}
	boton4(){
		this.consola+="4";
		this.mostrarConsola();
	}
	boton5(){
		this.consola+="5";
		this.mostrarConsola();
	}
	boton6(){
		this.consola+="6";
		this.mostrarConsola();
	}
	boton7(){
		this.consola+="7";
		this.mostrarConsola();
	}
	boton8(){
		this.consola+="8";
		this.mostrarConsola();
	}
	boton9(){
		this.consola+="9";
		this.mostrarConsola();
	}
	botonDec(){
        this.consola+=".";
        this.mostrarConsola();
    }
	botonPI(){
		this.consola+=Math.PI;
		this.mostrarConsola();
	}
	
	//OPERACIONES
	botonSum(){
		var suma = parseFloat(this.pop());
		suma += parseFloat(this.pop());
		this.push(suma);
		this.mostrarPila();
	}
	botonSub(){
		var sustraendo = parseFloat(this.pop());
		var res = parseFloat(this.pop()) - sustraendo;
		this.push(res);
		this.mostrarPila();
	}
	botonMul(){
		var mul = parseFloat(this.pop());
		mul *= parseFloat(this.pop());
		this.push(mul);
		this.mostrarPila();
	}
	botonDiv(){
		var divisor = parseFloat(this.pop());
		var div = parseFloat(this.pop()) / divisor;
		this.push(div);
		this.mostrarPila();
	}
	botonTrigonometrica(func){
		var digito = this.pop();
		if(func == 1)
			digito = Math.sin(digito);
		else if(func == 2)
			digito = Math.cos(digito);
		else
			digito = Math.tan(digito);
		this.push(digito);
		this.mostrarPila();
	}
	botonLog(){
		var digito = this.pop();
		digito = Math.log(digito);
		this.push(digito);
		this.mostrarPila();	
	}
	
	botonApilarDato(){
		this.push(this.consola);
		this.mostrarPila();
		this.consola = "";
		document.getElementById('consola').value = this.consola;
	}
	botonDesapilarDato(){
		this.pop();
		this.mostrarPila();
	}
	resetear(){
		this.consola = "";
		document.getElementById('consola').value = this.consola;
	}
	resetearfull(){
		this.vaciarPila();
		this.consola = "";
		document.getElementById('consola').value = this.consola;
		document.getElementById('pila').value = this.consola;
	}
	mostrarConsola(){
		document.getElementById('consola').value = this.consola;
	}
	
	//PILA
	push(valor){
		this.pila.push(valor);
	}
	pop(){
		return (this.pila.pop());
	}
	mostrarPila(){
		var res = " ";
		for(var i in this.pila)
		   res += " " + this.pila[i];
		document.getElementById('pila').value = res;
	}
	vaciarPila(){
		for(var i in this.pila)
			this.pop();
		this.pop();
	}
}
var calculadora = new CalculadoraRPN();