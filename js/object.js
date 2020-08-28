//Objektumok: kulcs+érték
let user = {
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"
};

//kiválasztás kulcsal
console.log(user.name);
//kulcsok kilistázása
console.log( Object.keys( user ));
//értékek kilistázása
console.log( Object.values( user ));
//teljes tartalom listázása
console.log( Object.entries ( user ));
//index alapján kiválasztás
console.log( Object.entries(user)[1]);

//Objectum létrehozása érték nélkül
let admin = new Object();
//Objectum létrehozása érték nélkül rövidebben
let customer = {};
