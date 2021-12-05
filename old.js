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

// let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const solider = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    },
};


const john = Object.create(solider);


// const john = {
//     health: 100,
// };


Object.setPrototypeOf(john, solider);


// console.log(john.armor);
john.sayHello();

//===================================================
// const PersonalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: () => {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//       while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//           personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//       }
//   },
//   rememberMyFilms: function () {
//       for (let i = 0; i < 2; i++) {
//           const a = prompt("один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько вы его оцените?", "");

//           if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//               PersonalMovieDB.movies[a] = b;
//               console.log("done");
//           } else {
//               console.log("error");
//               i--;
//           }
//       }
//   },
//   detectPersonalLevel: function () {
//       if (personalMovieDB.count < 10) {
//           console.log("Просмотрено довольно мало фильмов");
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//           console.log("Вы классический зритель");
//       } else if (personalMovieDB.count >= 30) {
//           console.log("Вы киноман");
//       } else {
//           console.log("Произошла ошибка");
//       }
//   },
//   showMyDb: function (hidden) {
//       if (!hidden) {
//           console.log(PersonalMovieDB);
//       }
//   },
//   toggleVisibleMyDb: function () {
//       if (PersonalMovieDB.privat) {
//           PersonalMovieDB.privat = false;
//       } else {
//           PersonalMovieDB.privat = true;
//       }
//   },
//   writeYourGenres: function () {
//       for (let i = 1; i < 2; i++) {
          //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);

          //   if (genre === '' || genre === null) {
          //       console.log('Вы ввели некорректные данные');
          //       i--;
          //   } else {
          //     PersonalMovieDB.genres[i - 1] = genre;
          //   }

//           let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
//           if (genres === '' || genres === null) {
//               console.log('Вы ввели некорректные данные');
//               i--;
//           } else {
//               PersonalMovieDB.genres[i - 1] = genres.split(', ');
//               PersonalMovieDB.genres.sort();
//           }

//       }

//       PersonalMovieDB.genres.forEach((item, i) => {
//           console.log(`Любтимый жанр ${i + 1} - это ${item}`);
//       });
//   }
// };
//======================================

console.log(typeof String(null));
console.log(typeof String(4));

// 2

console.log(typeof (4 + ""));

// const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// to number
// 1

console.log(typeof Number("hiii"));
// 2

console.log(typeof + "5");

// 3

console.log(typeof parseInt("15px", 10));

let answ = +prompt("Hello", "");

// to boolean

// 0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// 2

console.log(typeof(Boolean('4')));

// 3

console.log(typeof(!!"44444"));




//=======================================================================

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //#heart

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

//==========================================
// const box = document.getElementById("box"),
//     btns = document.getElementsByTagName("button"),
//     circles = document.getElementsByClassName("circle"),
//     hearts = document.querySelectorAll(".heart"),
//     oneHeart = document.querySelector(".heart"),
//     wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = "blue";
box.style.width = "500px";

box.style.cssText = `background-color: blue; width : 500px`;

btns[1].style.borderRadius = "41%";
circles[0].style.backgroundColor = "rgb(0, 255, 238)";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item) => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode('Тут был я');

div.classList.add("black");

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);


div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

//======================================================

// const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// btn.addEventListener('click', () => {
//  alert('good morning');
// });

let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //     btn.removeEventListener('click', deleteElement);
  // }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach(btn => {
    btn.addEventListener('mousedown', deleteElement, {once: false});
});


const link = document.querySelector('a');

link.addEventListener('click', function (event) {
      event.preventDefault();
      console.log(event.target);
});

//===================

console.log(document.documentElement);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild); 
console.log(document.body.lastElementChild);

console.log(document.querySelector('#current').parentElement);

console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
      continue;
  }
  console.log(node);
}

//================================================================

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
      movies: [
          "Логан",
          "Лига справедливости",
          "Ла-ла лэнд",
          "Одержимость",
          "Скотт Пилигрим против...",
      ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list"),
      advTitle = document.querySelector(".promo__adv-title"),
      promoAdv = document.querySelector(".promo__adv"),
      promoDescr = document.querySelector(".promo__descr"),
      addForm = document.querySelector("form.add"),
      addInput = addForm.querySelector(".adding__input"),
      checkBox = addForm.querySelector('[type ="checkbox"]');

  addForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let newFilm = addInput.value;
      const favorite = checkBox.checked;

      if (newFilm) {
          if (newFilm.length > 21) {
              newFilm = `${newFilm.substring(0, 22)}...`;
          }

          if (favorite) {
              console.log("Добавляем любимый фильм");
          }

          movieDB.movies.push(newFilm);
          sortArr(movieDB.movies);

          createMovieList(movieDB.movies, movieList);
      }

      event.target.reset();
  });

  const deleteAdv = (arr) => {
      arr.forEach((item) => {
          item.remove();
      });
  };

  advTitle.remove();
  promoAdv.remove();

  const makeChanges = () => {
      genre.textContent = "драма";

      poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  promoDescr.innerHTML = "Человек который покакал";

  const sortArr = (arr) => {
      arr.sort();
  };

  function createMovieList(films, parent) {
      movieList.innerHTML = "";
      sortArr(films);

      films.forEach((film, i) => {
          parent.innerHTML += `
  <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
  </li>
  `;
      });

      document.querySelectorAll(".delete").forEach((btn, i) => {
          btn.addEventListener("click", () => {
              btn.parentElement.remove();
              movieDB.movies.splice(i, 1);

              createMovieList(films, parent);
          });
      });
  }
  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});

//===========================================================

// touchstart - касание
// touchmove - движение
// touchend - палец оторвался
// touchenter - ведём пальцем и наскальзываем на элемент с событием
// touchleave - за пределы элемента (скольжение)
// touchcancel - 

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
     e.preventDefault();
     console.log('moveee');
     console.log(e.changedTouches );
     });


     box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
        });
   


// touches - список всех пальцев на экране
// targetTouches - пальцы на цели
// changedTouches - ззадействованные пальцы 
});


//===================================================

const p = document.querySelectorAll('p');
console.log(p);

// defer - загружать скрипт в фоновом режиме

// async - независимый

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); // async  если не false
      
}

loadScript("test.js");
loadScript("some.js");

//================================================


// const btns = document.querySelectorAll("button"),
//     wrapper = document.querySelector(".btn-block");
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener("click", () => {
    if (!btns[1].classList.contains("red")) {
        btns[1].classList.add("red");
    } else {
        btns[1].classList.remove("red");
    }

    btns[1].classList.toggle("red");
});

// wrapper.addEventListener('click', (event) => {
//    if (event.target && event.target.tagName == "BUTTON") {
//        console.log('Hello');
//    }
// });

wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log("Hello");
    }
});

// btns.forEach(btn => {
//    btn.addEventListener('click', () => {
//         console.log('Hello');
//    });
// });

const btn = document.createElement("button");
btn.classList("red");
wrapper.append(btn);

//==================================================

const btn = document.querySelector(".btn");
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
//     });

btn.addEventListener('click', myAnimation);

//     const timerID = setTimeout(logger, 2000);

// setTimeout(logger, 2000);

// const tiimerID = setTimeout(() => {
//     console.log('Девочка в 17 ряду');
// }, 3000);

// function logger () {
//     if (i === 3) {
//       clearInterval(timerId);
//     }
//     console.log('хэй девчонка в 16 ряду');
//     i++;
// }

// let id = setTimeout(function log() {
//   console.log('Hey devchonka v 16 ryadu');
//   id = setTimeout(log, 600);
// }, 600);

//===========================================================