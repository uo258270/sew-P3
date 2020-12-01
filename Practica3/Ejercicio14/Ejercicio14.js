"use strict";
class Procesamiento {
	constructor() {}
	
	procesarCanvas() {

        
		var canvas = document.getElementById("canvas");
		if (canvas && canvas.getContext) {
			canvas.height = 400;
			canvas.width = 400;
		var ctx = canvas.getContext("2d");
			if (ctx) {
					ctx.fillStyle = "#8A2BE2";
					ctx.lineWidth = 6;
					var X = canvas.width / 2;
					var Y = canvas.height / 2;
					var R = 100;
																	
					var L = 5;
					var paso = 2	
																
					var estrella= L / paso
					var rad = (2*Math.PI) / estrella;
																	
					ctx.beginPath();
							for( var i = 0; i < L; i++ ){
							var x = X + R * Math.cos( rad*i );
							var y = Y + R * Math.sin( rad*i );
							console.log('x=' + x + 'y=' +y);
							ctx.lineTo(x, y);
							}
					ctx.closePath();
					ctx.stroke();
					ctx.fill();
			}
		}

	}
	
	procesarSvg(files) {
		var archivo = files[0];
		if (archivo.name.endsWith(".svg")) {
            var lector = new FileReader();
            lector.readAsText(archivo);
            lector.onload = function (evento) {
				document.getElementById("svgFile").innerHTML = lector.result;
            }
        }
		else {
			document.getElementById("svgFile").innerHTML = "<p>ERROR: este fichero no tiene extension .svg</p>";
		}
	}
}

var procesar = new Procesamiento();
