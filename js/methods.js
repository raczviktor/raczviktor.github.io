//Metodusok

//saját metódus
let userM = {
    name: "John Doe",
    age: 30,
    sayHi: function() {
        console.log("Hi");
    }
};

console.log(userM.sayHi());

//Változó a metóduson belül
//Stringbe csak akkor tudunk változót megadni ha nem macskaköröm, hanem back-tic(AltGr+7) jelek közé teszem.
let userN = {
    name: "Dimitri",
    age: 30,
    sayHi: function() {
        return `Hi, my name is ${this.name}!`;
    }
};

console.log(userN.sayHi());


//This
/*
let btn = document.querySelector('form button.btn-primary');
btn.onclick = function() {
    console.log( this.style.display = "none" );
};
*/

user = {
    "_id": "ldsaifhnafflmwl222e2",
    index: 0,
    isActive: true,
    balance: 1434433,
    picture: "http://placeholder.it/32x32"
}

user.minusBalance = function(amount) {
    this.balance -=amount;
}

user.plusBalance = function(amount) {
    this.balance +=amount;
}

user.getBalance = function() {
    return `$ ${this.balance}`;
}

console.log(user.balance);
user.minusBalance(1);
console.log(user.balance);
user.plusBalance(2);
console.log(user.balance);

//Arrow function
//alappélda
let adder = function(n1,n2) {
    return n1 + n2;
}

console.log(adder(4,4));

//arrow function
let adder2 = (n1,n2) => n1 + n2;
console.log(adder2(4,4));

//vagy
let greeter = name => `Hello ${name}!`;

console.log(greeter("Joe"));