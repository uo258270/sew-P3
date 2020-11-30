infoNavegador = new Object();
infoNavegador.nombre = navigator.appName;
infoNavegador.idioma = navigator.language;
infoNavegador.version = navigator.appVersion;
infoNavegador.plataforma = navigator.platform;
infoNavegador.vendedor = navigator.vendor;
infoNavegador.agente = navigator.userAgent;
infoNavegador.javaActivo = navigator.javaEnabled();

document.write("<h1>");
document.write("Información del navegador");
document.write("</h1>");