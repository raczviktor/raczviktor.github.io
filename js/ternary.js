//A példa.
let age6 = 33;
let canVote;

if (age6 < 18) {
    canVote = false;
} else {
    canVote = true;
}

console.log(canVote);

//A példa összevonása.
let age7 = 33;
let canVote2 = age < 18 ? false : true;

console.log(canVote2);

//A példa "jobban" összevonása.
let age8 = 33;

console.log(canVote3 = age8 >= 18);

//Példa több feltételnek való megfeleltetésre.
let age9 = 33;
let canVote4;
let city = "NY";

console.log(canVote4 = [age9 >= 18 && city == "NY"] ? true : false);

//Példa konkrét értékkel.
let level = 1;
let salary = level > 2 ? "1.2M" : "0.8M";

console.log(salary);