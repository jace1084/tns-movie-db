// / Check genreIDs and genre names: 
// 		http://api.themoviedb.org/3/movie/:movieID?api_key=<<>>
// 					28 = action
// 					12 = adventure
// 					16 = animation
// 					35 = comedy
// 					18 = drama
// 					10751 = family
// 					14 = fantasy
// 					27 = horror
// 					10402 = music
// 					10749 = romance
// 					878 = science fiction
// 					53 = thriller


$(document).ready(function () {
  // The base url for all API calls
  var apiBaseURL = 'http://api.themoviedb.org/3/';

  // The api key to use as reference
  var apiKey = "28e7691b28199415eec6fd8d3e1ffd18";

  // URL in Authentication. Base URL of image
  var poster = "http://image.tmdb.org/t/p/w185/";

  const nowPlayingURL = apiBaseURL + 'movie/now_playing?api_key=' + apiKey;
});

function getMoviesByGenre(genre_id) {
  const getMoviesByGenreURL = apiBaseURL + 'genre/' + genre_id + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc';
  var nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=28e7691b28199415eec6fd8d3e1ffd18";
};

var nowPlayingHTML = '';
var genreHTML = '';

// $('.navbar-brand').click(function () {
//   getNowPlayingData();
//   $('#movie-grid').html(nowPlayingHTML);
//   $('#movieGenreLabel').html("Now Playing");
// })
// $('.nowPlaying').click(function () {
//   getNowPlayingData();
//   $('#movie-grid').html(nowPlayingHTML);
//   $('#movieGenreLabel').html("Now Playing");
// })
$('#action').click(function () {
  getMoviesByGenre(28);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Action");
})
$('#animation').click(function () {
  getMoviesByGenre(16);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Animation");
})
$('#comedy').click(function () {
  getMoviesByGenre(35);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Comedy");
})
$('#drama').click(function () {
  getMoviesByGenre(18);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Drama");
})
$('#family').click(function () {
  getMoviesByGenre(10751);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Family");
})
$('#fantasy').click(function () {
  getMoviesByGenre(14);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Fantasy");
})
$('#horror').click(function () {
  getMoviesByGenre(27);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Horror");
})
$('#music').click(function () {
  getMoviesByGenre(10402);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Music");
})
$('#romance').click(function () {
  getMoviesByGenre(10749);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Romance");
})
$('#scifi').click(function () {
  getMoviesByGenre(878);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Science Fiction");
})
$('#thriller').click(function () {
  getMoviesByGenre(53);
  $('#movie-grid').html(genreHTML);
  $('#movieGenreLabel').html("Thriller");
});