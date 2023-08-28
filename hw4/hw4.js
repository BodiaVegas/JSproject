// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sq1(a,b) {
    let res1=a * b;
    console.log(res1)
    return res1;
}
sq1 (11,11)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sq2(a1) {
    let res2=(3,14)*(a1*a1);
    console.log(res2)
    return res2;
}
sq2 (11)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sq3(r,h) {
    let res3=(2*3,14)*r*h;
    console.log(res3)
    return res3;
}
sq3 (2,3)
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [1,3,4,6,76,3456,9876,-1234,'sdfg', 'wedf', true, false]
function arrR() {
    for (const rElement of arr1) {
        console.log(rElement)
    }
}
arrR (arr1)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function parCr(a) {
    console.log(a)
}
parCr('we have to be skilled');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCr(b) {
    document.write(`<ul><li>${b}</li> <li>${b}</li> <li>${b}</li></ul>`)
}
ulCr('we have to be skilled');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator(a1,b1) {
    for (let i = 0; i < b1; i++) {
        document.write(`<ul><li>${a1}</li></ul>`)
    }
}
ulCreator('we have to be qualified',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr2 = [1,3,4,6,76,3456,9876,-1234,'sdfg', 'wedf', true, false]
function olCreator() {
    for (const a1Element of arr2) {
        document.write(`<ul><li>${a1Element}</li></ul>`)
    }
}
olCreator()
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
function arrCr2() {
    for (const user of users) {
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
    }
}
arrCr2();
// - створити функцію яка повертає найменьше число з масиву
let numbers = [789,1234,654,23,34,234,2345,-234,-234567,-98765,0,123456789]
function minimizer(data) {
    let min = data[0];
    for (const item of data) {
        if(item<min) {min=item}
    }
    return min
}
console.log(minimizer(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
numbers2 =[1,3,1,4,4,2,5];
function summarizer (data) {
        let sum = data[0];
        for (const item of data) {
        sum = sum + item;
}
return sum
}
console.log(summarizer(numbers2));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {

    console.log(arr[index1,index2])

}
swap([11,22,33,44],0,1);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
function exchange(sumUAH,currencyValues,exchangeCurrency) {

        if (exchangeCurrency='usd') {
            usd = sumUAH/currencyValues[0].value;
            console.log(usd);
        }
        if (exchangeCurrency='eur') {
            eur = sumUAH/currencyValues[1].value;
            console.log(eur);
        }
}
exchange (40,currencyValues,'usd');