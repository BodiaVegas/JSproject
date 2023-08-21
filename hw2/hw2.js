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


