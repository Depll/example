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

"use strict";
let numberOfFilms; 


function start () {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

}

start ();


// const PersonalMovieDB = {
//     count: NumberOFFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };






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

  //================================================================

  "use strict";

function first() {
     // do something
     setTimeout(function() {
         console.log(1);
     }, 500);
}

function second() {
console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
}


learnJS('JavaScript', done);



//========================================================================

"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};


options.makeTest();

const {border, bg} = options.colors;
console.log(border);
 
//console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;
// console.log(options);


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for ( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }


//=====================================================================

// const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}

//arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr)  {
console.log(`${i}: ${item} внутри массива ${arr}`);
});


// arr.pop();
// arr.push(10);

// console.log(arr);

 // for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
 // }

// for (let value of arr) {
//     console.log(value);
  
// }

// const str = prompt('', '');
const products = str.split("", "");
products.sort();
console.log(products.join('; '));

//========================================================================
// let a = 5,
//   b = a;

// b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
};

// const copy = obj; // Ссылка

// copy.a = 10;

console.log(copy);
console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "asddsadasd";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

// const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
 one: 1,
 two: 2
};

const newObj = {...q};

//====================================================================


