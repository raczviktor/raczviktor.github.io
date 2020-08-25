//Példa for ciklusra.
//Addig ad hozzá egyet az i-hez, amíg kisebb, mint 5.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Példa for ciklusra tömbbel.
//Addig írja ki a tömb elemeit, amíg el nem éri a tömb hosszát. 
let fruits2 = ["Pear", "Avocado", "Apple"];

for (let i2 = 0; i2 < fruits2.length; i2++) {
    console.log( fruits2[i2] );
}

//Példa megszakításra
//Megegyezik az előzővel, kivéve, hogy megáll ha eléri a több, mint 1 helyiértékű elemet. 
//A continue visszaugrasztja a folyamatot a folyamat elejére.
let fruits3 = ["Pear", "Avocado", "Apple"];

for (let i3 = 0; i3 < fruits3.length; i3++) {
    if (i3 > 1) {
        continue;
    }
    console.log( fruits3[i3] );
}

//Példa megszakításra
//Megegyezik az előzővel, kivéve, hogy a break befejezi a folyamatot.
let fruits4 = ["Pear", "Avocado", "Apple"];

for (let i4 = 0; i4 < fruits4.length; i4++) {
    if (i4 > 1) {
        break;
    }
    console.log( fruits4[i4] );
}

