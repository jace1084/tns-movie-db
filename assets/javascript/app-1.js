$(document).ready(function () {

    var poster = "http://image.tmdb.org/t/p/w185/";
    var nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=28e7691b28199415eec6fd8d3e1ffd18";
  
  
    $.ajax({
      url: nowPlayingUrl
    }).then(function (res) {
      for(i=0; i<res.results.length; i++){
        debugger;
        console.log(res.results[i].title);
        var movieInfo = $('<h1>').html(res.results[i].title + res.results[i].overview + res.results[i].vote_average);
        debugger;
        var movieImg = $("<img>").attr('src', poster + res.results[i].poster_path);
        var movieDiv = $("<div>");
        
        movieDiv.append(movieInfo,movieImg);
        $("#movie-grid").append(movieDiv);
      }
      
  
    });
  });