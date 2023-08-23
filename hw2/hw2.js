// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let massive = [1,true, false, 'vasya', 23, 'vw', 2010, 'automatic', true, false, 'chevrolet' ]
console.log(massive[0])
console.log(massive[1])
console.log(massive[2])
console.log(massive[3])
console.log(massive[4])
console.log(massive[5])
console.log(massive[6])
console.log(massive[7])
console.log(massive[8])
console.log(massive[9])
console.log(massive[10])
let book1 = {
    title: 'macroeconomics',
    pageCount: 606,
    genre: 'scientific'
}
let book2 = {
    title: 'Tom Soyer',
    pageCount: 314,
    genre: 'novel'
}
let book3= {
    title: 'Eddar Po',
    pageCount: 441,
    genre: 'detective'
}
console.log(book3.genre)
console.log(book1)

let book12 = {
    title: 'macroeconomics',
    pageCount: 606,
    genre: 'scientific',
    authors: ['vasya',65]
}
let book22 = {
    title: 'Tom Soyer',
    pageCount: 314,
    genre: 'novel',
    authors: ['petya', 54]
}
let book32= {
    title: 'Eddar Po',
    pageCount: 441,
    genre: 'detective',
    authors: ['mark twen', 214]
}
console.log(book32.authors[1])
let users = [
    {name: 'bodia', username: 'shadow', password: 'rytujhgbhj'},
    {name: 'vasia', username: 'car', password: '123'},
    {name: 'petia', username: 'bullet', password: 'xxx'},
    {name: 'vasia', username: 'bottle', password: 'butter'},
    {name: 'olia', username: 'uagirl', password: 'flying'},
    {name: 'katia', username: 'happygirl', password: '09876'},
    {name: 'svitlana', username: 'darkgirl', password: 'aaa'},
    {name: 'yulia', username: 'lovedgirl', password: 'love'},
    {name: 'oleksandr', username: 'sashagrey', password: '111'},
    {name: 'serhiy', username: 'Serg', password: '2222'},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let x = +prompt ('enter the number');
if (x===0) {
    console.log('Wrong')
}
else {
    console.log('Right')
}

let time = +prompt ('enter the time');
if (time>0 && time<=15) {
    console.log('first');
} else if (time>15 && time<=30) {
    console.log('second')
} else if (time>30 && time<=45) {
    console.log('third')
} else if (time>45 && time<=60){
    console.log('fourth');
} else {
    console.log('???????????????')
}

let day = +prompt ('enter the day number');
if (day>0 && day<=10) {
    console.log('first');
} else if (day>10 && day<=20) {
    console.log('second')
} else if (day>20 && time<=30) {
    console.log('third')
} else {
    console.log('???????????????')
}

let schedule = prompt ('enter the day of the week')

switch (schedule) {
    case 'monday': console.log('schedule for monday');
    break;
    case 'tuesday': console.log('schedule for Tuesday');
    break;
    case 'wednesday': console.log('schedule for Wednesday');
    break;
    case 'thursday': console.log('schedule for Thursday');
    break;
    case 'friday': console.log('schedule for Friday');
    break;
    case 'saturday': console.log('schedule for Saturday');
    break;
    case 'sunday': console.log('schedule for Sunday');
    break;
    default: console.log('?????????????????');
    break;
}

let a=200;
let b= 285;
if (a>b) {
    console.log(a)
} else if (a<b) {
    console.log(b)
} else {console.log(a,b)}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до

let xx;
if (!xx) {
    console.log('default');
} else {
    console.log('true')
}
let xyz = true ? 'true' : 'false';

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 9}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Amazing')
}
if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('Amazing')
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Amazing')
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Amazing')
}
if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('Amazing')
}
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('Amazing')
}
if (coursesAndDurationArray[5].monthDuration>5) {
    document.write(`<div>${'amazing'}</div>`)
}
