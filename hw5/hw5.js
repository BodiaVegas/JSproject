// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square1 = (a,b)=> a*b;
console.log(square1(10, 20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let square2 = (r)=> 3.14*r*r;
console.log(square2(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let square3= (r,h)=> (2*3,14)*r*h;
console.log(square3(2, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [1,3,4,6,76,3456,9876,-1234,'sdfg', 'wedf', true, false]
let literator = (arr)=>{if(arr.length) {
    for (const item of arr) {
        console.log(item)
    }

}}
literator(arr1);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let parCr=(a)=> console.log(a);
parCr('we have to be skilled');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulCr=(b)=> {
    document.write(`<ul>`)
    document.write(`<li>${b}</li> <li>${b}</li> <li>${b}</li>`)
    document.write(`</ul>`)
}
ulCr('we have to be qualified');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let licr=(a1,b1)=> {
    for (let i = 0; i < b1; i++) {
        document.write(`<ul>`)
        document.write(`<li>${a1}</li>`)
        document.write(`</ul>`)
    }
}
licr('we have to be strong',2)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr2 = [1,30,4,'sdfg', 'wedf', true, false]
let olCreator=(arr2)=> {
    for (const item of arr2) {
        document.write(`<ul><li>${item}</li></ul>`)
    }
}
olCreator(arr2)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let arrCr2=(array)=> {
    for (const user of users) {
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
    }
}
arrCr2(users);
// - створити функцію яка повертає найменьше число з масиву
let numbers = [789,1234,654,23,34,234,2345,-234,-234567,-98765,0,-123456789]

let minimizer =(array2)=> {
    let min = array2[0];
    for (const item of array2) {
        if(item<min) {min=item}
    }
    return min
}
console.log(minimizer(numbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let num=[2,1,3,9];
let summ=(data)=> {
    let summa = 0;
    for (const Element of data) {
        summa = summa + Element
    }
    return summa
}
console.log(summ(num));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr,index1,index2)=> {
   let number1=arr[index1];
   let number2=arr[index2];
   arr[index2]=number1;
   arr[index1]=number2;
console.log(arr)
}
swap([11,22,33,44,55,66,77],0,6);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
let exchanger = (sumUa,array,chosencurrency)=> {
    for (const cur of array) {
        if (cur.currency===chosencurrency) {
            return sumUa/cur.value
        }
    }
}
console.log(exchanger(10000,currencyValues,'USD'));