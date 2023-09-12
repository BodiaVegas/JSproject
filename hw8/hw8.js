// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id,name,surname,email,phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let user1= new User(1,'vasya','kokos','vasyakokos.ukr.net','097-567-78-45');
console.log(user1);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users=[
    new User(23,'petya','abricos','abri@ukr.net','067-678-23-43'),
     new User(32,'petya','abricos','abri@ukr.net','067-678-23-43'),
    new User(-4,'hetya','abricos','abri@ukr.net','067-678-23-43'),
    new User(59,'vetya','abricos','abri@ukr.net','067-678-23-43'),
    new User(66,'betya','abricos','abri@ukr.net','067-678-23-43'),
    new User(71,'retya','abricos','abri@ukr.net','067-678-23-43'),
    new User(18,'setya','abricos','abri@ukr.net','067-678-23-43'),
    new User(999,'metya','abricos','abri@ukr.net','067-678-23-43'),
    new User(-10,'aetya','abricos','abri@ukr.net','067-678-23-43'),
    new User(-111,'tetya','abricos','abri@ukr.net','067-678-23-43'),
]
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userid = users.filter(x => x.id%2===0);
console.log(userid);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort1 = users.sort((a, b) => {
    return a.id- b.id;
})
console.log(sort1);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 class Client {
     constructor(id,name,surname,email,phone,order) {
         this.id=id;
         this.name=name;
         this.surname=surname;
         this.email=email;
         this.phone=phone;
         this.order=order;
     }
 }
 let ClientsList= [
     new Client(45,'anna1','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc','asdf']),
     new Client(45,'anna2','felipenko','456@ukr.net','097-788-56-23',['sd']),
     new Client(45,'anna3','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc']),
     new Client(45,'anna4','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc','asdf','sd','asd']),
     new Client(45,'anna5','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc','asdf','sdf']),
     new Client(45,'anna6','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc','asdf','qwerf','asd','asd']),
     new Client(45,'anna7','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc']),
     new Client(45,'anna8','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc']),
     new Client(45,'anna9','felipenko','456@ukr.net','097-788-56-23',['sd']),
     new Client(45,'anna10','felipenko','456@ukr.net','097-788-56-23',['sd','sdxc','asdf']),
 ]
console.log(ClientsList);
let sort2 = ClientsList.sort((a, b) => {
    return a.order.length- b.order.length;
})
console.log(sort2);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,maxspeed,v) {
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.v=v;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed}`);
    };
    this.info = function () {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}`);
    }
    this.increaseMaxspeed = function (newspeed) {
        this.maxspeed=maxspeed+newspeed;
    }
    this.newyear = function (newvalue) {
        this.year=year+newvalue;
    }
    this.adddriver=function (driver) {
        this.driver=driver;
    }
}
let car1= new Car('q7','audi',2012,250,3.5);
console.log(car1)
car1.drive();
car1.info();
car1.increaseMaxspeed(50);
car1.newyear(6);
car1.adddriver('bodia');
console.log(car1);


console.log(car1);
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarClass {
    constructor(model,producer,year,maxspeed,v) {
        this.model=model;
        this.producer=producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.v=v;
    };
    speed () {
        console.log(`їдемо зі швидкістю ${this.maxspeed}`);
    };
    info1 () {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}`);
    };
    increaseMaxspeed1 (newspeed) {
        this.maxspeed =  newspeed;
    };
    newyear1 (newvalue) {
        this.year=newvalue;
    };
    adddriver1 (driver) {
        this.driver=driver;
    };
}
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let car2= new CarClass('s500','mercedes',2015,200,4);
car2.speed();
car2.info1();
car2.increaseMaxspeed1(350);
car2.newyear1(2023);
car2.adddriver1('anna');


console.log(car2)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function cinderella (name,age,footS) {
    this.name=name;
    this.age=age;
    this.footS=footS;
}
let cinderellas = [
    new cinderella('anna',17,35),
    new cinderella('maryana',18,34),
    new cinderella('halyna',18,36),
    new cinderella('roxana',21,37),
    new cinderella('oksana',12,37),
    new cinderella('natalia',23,38),
    new cinderella('nadiya',15,35),
    new cinderella('vira',19,34),
    new cinderella('hanna',27,35),
    new cinderella('tetiana',31,40)

]
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prince {
    constructor(name,age,foundshoe) {
        this.name=name;
        this.age=age;
        this.foundshoe=foundshoe;
    };
}
let prince1= new prince('kokos',30,36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let choice = function choice(arr) {
    for (const cinderella of cinderellas) {
        if(cinderella.footS===prince1.foundshoe) {
            return `Prince loves ${cinderella.name}`;
        }

    }
};
console.log(choice(cinderellas));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let chosen_cinderella = cinderellas.find(x => x.footS===prince1.foundshoe);
console.log(chosen_cinderella);