//Global scope
var globalName = "Joe";

function something() {
    var globalName = "Jack";
    console.log(globalName);
}
something();

console.log(globalName);

//Global scope
var globalName2 = "Jancsi";

function something2() {
    globalName2 = "Juliska";
    console.log(globalName2);
}
something2();

console.log(globalName2);

//Global scope
let name3 = "Sanyi";

{
    let name3 = "Pisti";
    console.log(name3);
}

console.log(name3);


//Global scope
let name4 = "Joli";

{
    name4 = "Marci";
    console.log(name4);
}

console.log(name4);


//Global scope
const NAME5 = "Gizi";

{
    const NAME5 = "Laci";
    console.log(NAME5);
}

console.log(NAME5);


//Global scope
const NAME6 = "Bobi";

{
    NAME6 = "Gazsi";
    console.log(NAME6);
}

console.log(NAME6);
