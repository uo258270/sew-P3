
class News{

    constructor(){
        var url = 'https://newsapi.org/v2/everything?' +'q=Apple&' 
        + 'from=2020-11-23&' + 'sortBy=popularity&' + 'apiKey=9c693d4f8a1c4b9c9370c8073aa88772';
        $.get(url, (datos) => this.cargarNoticias(datos));
        
    }
    

    cargarNoticias(noticias) {

        var articulos = noticias.articles;
        var total = noticias.totalResults;

        articulos.forEach(articulo => {

            var html = '<article>';
            html += '<h1>' + articulo.title + '</h1>';
            //html+= '<img src="' + articulo.urlToImg +'"/>';
            html += '<p>' + articulo.content + '</p>';
            html += '<p>' + articulo.description + '</p>';
            //html += '<ref>' + articulo.url + '</ref>';
            
            html += '</article>';
            $('#resultado div').append(html);
        });
    }

   
}

var news = new News();