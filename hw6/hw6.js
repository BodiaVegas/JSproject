// let str = 'hello world !!!';
// let indxOfSpace = str.indexOf(' ');
// console.log(indxOfSpace);
// console.log(str.substring(0, indxOfSpace));
// let split = str.split(' ');
// console.log(split);
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1='hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
let length1= str1.indexOf('d');
console.log(length1+1);
let length2 = str2.lastIndexOf('m');
console.log(length2+1);
let length3= str3.indexOf('l');
console.log(length3+1);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up1 = str1.toUpperCase()
console.log(up1);
let up2 = str2.toUpperCase()
console.log(up2);
let up3 = str3.toUpperCase()
console.log(up3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let down1 = str1.toLowerCase()
console.log(down1);
let down2 = str2.toLowerCase()
console.log(down2);
let down3 = str3.toLowerCase()
console.log(down3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let replacer = str.replace(' ', '');
console.log(replacer);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str4 = 'Ревуть воли як ясла повні';
let stringtoArray = str4.split(' ');
console.log(stringtoArray);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1=[10,8,-7,55,987,-1011,0,1050,0];
let strmaker = arr1.map(function (n) {
    n === 'n';
    return n;
})
console.log(strmaker);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function  sortNums (array, direction) {
    if (direction === 'ascending') {
        array.sort((a,b)=>a-b);
}
  if(direction === 'descending') {
      array.sort((a,b)=>b-a);
  } }
let x= sortNums(nums, 'ascending');
console.log(x)
//
// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

    let sort1 = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
})
console.log(sort1);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sort2 = coursesAndDurationArray.filter((x) => {
    if  (x.monthDuration > 5) {
        return x;
    };
})
console.log(sort2);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker