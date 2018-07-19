$('button').on('click', function(event) {
        event.preventDefault();
    
        var movie = $("input").val();
        var poster = "http://image.tmdb.org/t/p/w185/";
      
        var url = "https://api.themoviedb.org/3/search/movie?api_key=28e7691b28199415eec6fd8d3e1ffd18&query=" + movie;
      
        //   console.log(url);
        $.ajax({
          url: url
        }).then(function(res) {
          $('h1').text(res.results[0].title);
          $('#plot').text(res.results[0].overview);
          $('#ratings').text(res.results[0].vote_average);
          $('img').attr('src', poster + res.results[0].poster_path);
      
        });
      });