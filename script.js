"use strict";
let numberOfFilms; 


function start () {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

}

start ();


const PersonalMovieDB = {
    count: NumberOFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};






function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько вы его оцените?", "");
      
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
          PersonalMovieDB.movies[a] = b;
          console.log("done");
        } else {
          console.log("error");
          i--;
        }
      }
}

rememberMyFilms();

  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
      } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
      } else {
        console.log("Произошла ошибка");
      }
  }

  detectPersonalLevel();



  function showMyDb (hidden) {
   if (!hidden) {
       console.log(PersonalMovieDB);
   } 
  }

showMyDb(PersonalMovieDB.privat);


function writeYourGenres() {
 for (let i = 1; i <=3; i++) {
     PersonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
 }
}


writeYourGenres();





  console.log(PersonalMovieDB);



