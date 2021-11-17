'use strict';


const NumberOFFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const PersonalMovieDB = {
    count: NumberOFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько вы его оцените?', ''),
    c = prompt('Один из последних просмотренных фильмов'),
    d = prompt('На сколько вы его оцените?', '');

    PersonalMovieDB.movies[a] = b;
    PersonalMovieDB.movies[c] = d;

    console.log(PersonalMovieDB);
