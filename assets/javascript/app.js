$('button.btn-default').on('click', function (event) {
  event.preventDefault();
  //to remove sigin forms
  // $('#signin-show').addClass('signin-hide');

  var movie = $("input").val();
  var poster = "http://image.tmdb.org/t/p/w185/";

  var url = "https://api.themoviedb.org/3/search/movie?api_key=28e7691b28199415eec6fd8d3e1ffd18&query=" + movie;

  //   console.log(url);
  $.ajax({
    url: url
  }).then(function (res) {
    $('h1').text(res.results[0].title);
    $('#plot').text(res.results[0].overview);
    $('#ratings').text(res.results[0].vote_average);
    $('img').attr('src', poster + res.results[0].poster_path);

  });
});
$(document).ready(function () {
  // event.preventDefault()

  var poster = "http://image.tmdb.org/t/p/w185/";
  var nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=28e7691b28199415eec6fd8d3e1ffd18";
  

  //   console.log(url);
  $.ajax({
    url: nowPlayingUrl
  }).then(function (res) {
    $('h1').text(res.results[0].title);
    $('#plot').text(res.results[0].overview);
    $('#ratings').text(res.results[0].vote_average);
    $('img').attr('src', poster + res.results[0].poster_path);

  });
});


$(document).ready(function () {
  // The base url for all API calls
  var apiBaseURL = 'http://api.themoviedb.org/3/';

  // The api key to use as reference
  var apiKey = "28e7691b28199415eec6fd8d3e1ffd18";

  // URL in Authentication. Base URL of image
  // var imageBaseUrl = 'https://image.tmdb.org/t/p/';

  // const nowPlayingURL = apiBaseURL + 'movie/now_playing?api_key=' + apiKey;
});

function getMoviesByGenre(genre_id) {
  const getMoviesByGenreURL = apiBaseURL + 'genre/' + genre_id + '/movies?api_key=' + apiKey + '&language=en-US&include_adult=false&sort_by=created_at.asc';
  var nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=28e7691b28199415eec6fd8d3e1ffd18";
};

var nowPlayingHTML = '';
var genreHTML = '';

$('.navbar-brand').click(function () {
  getNowPlayingData();
  $('#movie-grid').html(nowPlayingHTML);
  $('#movieGenreLabel').html("Now Playing");
})
$('.nowPlaying').click(function () {
  getNowPlayingData();
  $('#movie-grid').html(nowPlayingHTML);
  $('#movieGenreLabel').html("Now Playing");
})
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



// Firebase for sign in start

//Display sign in forms on click
$('#login-link').on('click', function () {
  event.preventDefault();
  $('div').removeClass('signin-hide');
  $(".user-info").html("");
})

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdedeK3jKtHl_v13QewmwsyBdegM2t17A",
  authDomain: "group-project-1-d3ccb.firebaseapp.com",
  databaseURL: "https://group-project-1-d3ccb.firebaseio.com",
  projectId: "group-project-1-d3ccb",
  storageBucket: "group-project-1-d3ccb.appspot.com",
  messagingSenderId: "302886214487"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

//Global variables 
var nickname = "";
var email = "";
var password = "";

// on click of 'create account' button 
$('#add-newuser').on('click', function (event) {
  event.preventDefault();

  nickname = $('#inputNickname').val().trim();
  email = $('#email-input').val().trim();
  password = $('#password-input').val().trim();

  dataRef.ref('users').push({
    name: nickname,
    email: email,
    password: password,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
  //empty Input fields after submission
  $('#inputNickname').val("");
  $('#email-input').val("");
  $('#password-input').val("");

  $(".user-info").html("Thank you for creating an account!");

});
//Display the data from Firebase
dataRef.ref('users').on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val().name);
  //$(".user-info").append("<p><span class="user-name">" + childSnapshot.val().nickname + ", thank you for creating an account!</p>");

})

// Firebase for sign in end