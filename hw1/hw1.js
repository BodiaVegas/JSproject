// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let hello = 'hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let com = 'com';
console.log(com);

let ua = 'ua';
console.log(ua)

let one = 1;
console.log(one)

let onehun = 100;
console.log(onehun);

let nine = -999;
console.log(nine);

let a123 = 123;
console.log(a123);

let p = 3.1415926535;
console.log(p);

let two7= 2.7;
console.log(two7);

let sixteen = 16;
console.log(sixteen);

let tr=true;
console.log(tr);

let fl=false;
console.log(fl);

let firstName = 'Bohdan';
let middleName = 'Bohdanovych';
let lastName = 'Brychka';
let nameRes= firstName+' '+middleName+' '+lastName;
console.log(nameRes)

let nameres2= `${firstName} ${middleName} ${lastName}`
console.log(nameres2)

let a = 100; console.log(typeof a);
let b = '100'; console.log(typeof b);
let c = true; console.log(c);

let name1 = prompt ('enter your name, please');
let middlename = prompt ('enter your middle name, please')
let surname = prompt('enter your surname please');
let age1 = prompt ('enter your age, please')
if (!!!age1) {
    prompt ('I said, enter your name bl...!!!')
}
let result = name1 +' '+middlename+' '+surname+','+ ' '+(parseInt(age1))+ ' '+'years'
let res1=+age1
console.log(result);
console.log(res1)



