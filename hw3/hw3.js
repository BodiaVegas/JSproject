// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let u = [1,12345,'dfghj','srtyuhg',true,false,0,99, 78,false, 'bodia']
let u2 = [45,12345,'dfghj','srtyuhg',true,false,0,99, 78,false, 'bodia',45,12345,'dfghj','srtyuhg',true,false,0,99, 78,false, 'bodia']

for (let i = 0; i < u.length; i++) {
    document.write(`<div>${u[i]}</div>`)
}
for (let i = 0; i < u.length; i++) {
    document.write(`<div>${i}${' '}${u[i]}</div>`)
}
let i=0
while (i<u2.length){
    document.write(`<h1>${u2[i]}</h1>`);
    i++;
}
let i2=0
while (i2<u2.length){
    document.write(`<h1>${i2}  ${u2[i2]}</h1>`);
    i2++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let j = 0; j < listOfItems.length; j++) {
   document.write(`<ul><li>${listOfItems[j]}</li></ul>`);
}
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    for (const productKey in product) {
        if (productKey==='title') { document.write(`<div class="product-card"><h3>${productKey} : ${product[productKey]}</h3></div>`)};
        if (productKey==='price') {document.write(`<div class="product-card"><h3>${productKey} : ${product[productKey]}</h3></div>`)};
        if (productKey==='image')   {document.write(`<img src="${product[productKey]}"></img>`)};
    }}

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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
for (const user of users) {
        if (user.status) {
            document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
        }
}
document.write(`<div>-------------------------------</div>`)
for (const user1 of users) {
    if (!user1.status) {
        document.write(`<div>${user1.name} ${user1.age} ${user1.status}</div>`)
    }
}
document.write(`<div>-------------------------------</div>`)
for (const user2 of users) {
    if (user2.age > 30) {
        document.write(`<div>${user2.name} ${user2.age} ${user2.status}</div>`)
    }
}