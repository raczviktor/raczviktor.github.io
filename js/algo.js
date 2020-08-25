//Példa szöveges algoritmusra
/*
kávéfőző bekapcsolása
if nincs elég kávé then 
    kávé hozzáadása
endif
if nincs elég víz then
    víz hozzáadása
endif
while nem melegedett fel
    10mp várakozás
endwhile
csésze odahelyezése
gomb megnyomása
*/




//NEVEZETES ALGORITMUSOK

//Összegzés algoritmusa
/*

összeg = 0
ciklus amíg van még szám, addig
    szám = következő elem
    összeg = összeg + szám
ciklus vége
*/
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;

for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);

//Számlálás algoritmusa
/*

db = 0
ciklus amíg van még szám, addig
    szám = következő elem
    ha feltétel igaz a számra, akkor
        db = db+1
    feltétel vége
ciklus vége
*/
let numericArray2 = [1, 3, 2, 5, 4, 7, 6, 9];
let db = 0;

for (let i2 = 0; i2 < numericArray2.length; i2++) {
    if (numericArray2[i2] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

//Szélső érték keresés algoritmusa
/*

legnagyobb = első elem
ciklus amíg van még szám, addig
    szám = következő szám
    ha szám > legnagyobb, akkor 
        legnagyobb = szám
    feltétel vége
ciklus vége
*/

//Eldöntés algoritmusa
/*
találat = hamis
ciklus amíg van elem és nem találat, addig
    szám = következő elem
    ha igaz  a feltétel a számra, akkor
        találat = igaz
    feltétel vége
ciklus vége
*/

