
class News{

    constructor(){
        var url = 'https://newsapi.org/v2/everything?' +'q=Apple&' 
        + 'from=2020-11-23&' + 'sortBy=popularity&' + 'apiKey=9c693d4f8a1c4b9c9370c8073aa88772';
        $.get(url, (datos) => this.cargarNoticias(datos));
        
    }

    nuevoElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }


    cargarNoticias(noticias) {

        for(let i =1; i<noticias.articles.length; i++){
            this.nuevoElemento("article", "", "footer", i);
            $.ajax({
                dataType: "xml",
                url: this.url,
                method: 'GET',
                success: function(datos){
                   $('pre').text(JSON.stringify(datos, null, 2));

                   var html = "<article>";
                   html += '<h2>' + datos.articles[i].title + '</h2>';
                   //html+= '<img src="' + articulo.urlToImg +'"/>';
                   html += '<p>' + datos.articles[i].content + '</p>';
                   html += '<p>' + datos.articles[i].description + '</p>';
                   //html += '<ref>' + articulo.url + '</ref>';
                   
                   html += '</article>';
                   $('#resultado div').append(html);

                },
                error:function(){
                    $("h3").html("error, no se puede obtener JSON");
                    $('pre').remove();
                    $('p').remove();
                }

        
            });
        
        
        
        }
    }

   
}

var news = new News();