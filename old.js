"use strict";

const NumberOFFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonalMovieDB = {
  count: NumberOFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько вы его оцените?", ""),
  c = prompt("Один из последних просмотренных фильмов"),
  d = prompt("На сколько вы его оцените?", "");

PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);

//==================================

if (1) {
  console.log("Ok!");
} else {
  console.log("Error");
}

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Okay');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');
// : значит если /

const num = 50;

switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Unright");
    break;
  case 50:
    console.log("All right");
    break;
  default:
    console.log(" not that time");
    break;
}

//===========================================

// ЦИКЛЫ

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}

// =================================================
("use strict");
// const NumberOFFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const PersonalMovieDB = {
//     count: NumberOFFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

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

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(PersonalMovieDB);

//==========================================

("use strict");

// let num = 20;

function showFirstMessage(text) {
  console.log(text);
  console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

function calcu(a, b) {
  return a + b;
  //console.log(dedwe);
  // после return код мертв
}

console.log(calcu(4, 3));
console.log(calcu(5, 6));
console.log(calcu(10, 6));

function ret() {
  let num = 50;

  //

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("hello");
};

logger();

const calc = (a, b) => {
  console.log("1");
  return a + b;
};

//=====================================

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

// const num = 12.2;
console.log(Math.round(num));
//round округлить

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

//================================
