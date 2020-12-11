
// If, else if & else


const pass = "abcd123d!s5";
const passLenght = 10;

if (pass.length >= passLenght && pass.includes("!")) {
console.log("That's a great password")
} else if (pass.lenght >= passLenght) {
 console.log("That's a good password")
} else {
console.log("masz slabe haslo")
};


//Switch 


const day = "piatek";

switch (day) {
    case "poniedzialek":
        console.log('Dzisiaj jest poniedzialek');
        break;
    case "wtorek":
        console.log("Dzisiaj jest wtorek ");
        break;
    case "sroda":
        console.log("dzisiaj jest sroda");
        break;
    case "czwartek":
        console.log("dzisiaj jest czwartek");
         break;
    
    default:
        console.log("dzisiaj jest weekend");
        break;
}



/* Zadania 

const x = 50;
const y = 30;

if (x >= y) {
 console.log("x jest wieksze niz y")
};

*/
const color = "blue";
const newColor = "green";

if (color === newColor){
    console.log("Kolory sie zgadzaja")
} else {
    console.log("Kolory sie nie zgadzaja")
};


const x = 100;
const y = 50;

if (x > y) {
    console.log("X jest wieksze niz y");
} 
    else if (x === y ) 
{
    console.log("x jest rowne y");
}
 else  {
     console.log(" x jest mniejsze niz y");
 };
    




// Zadanie switch 

const promo = "20%";


switch (promo) {
    case "10%":
        console.log("Dzisiaj mamy 10% znizki");
        break;

    case "20%":
        console.log("Dzisiaj mamy 20% znizki");
        break;

    case "30%":
        console.log("Dzisiaj mamy 30% znizki");
        break;

    default:
        console.log("Dzisiaj nie mamy znizki");
}





const z = 10;


if(z%2===0){
    console.log("jest ok")
}


(z%2===0) ? console.log("jest ok") : console.log("nie jest ok");





const u = 50;

let $txt;

if (u>=100){
    $txt = "X jest wiekszy";
} else if (u<100 && u>30){
    $txt = "x jest sredniakiem";
} else {
    $txt = "x jest maly";
}


console.log($txt.toUpperCase());





const liczby = [1,2,3,4,5,6,8,9];

for (let i = 0; i < liczby.length; i++){
    console.log(liczby[i])
}



const kolory = ['zielony', 'czerwony', 'niebieski']

for(let i = 0; i < kolory.length; i++) {
    console.log(kolory[i])
};


//WHILE 

/*let i = 0;

while (i<5) {
    console.log(i);
    i++;
}
*/
// DO while 
/*
let i = 0;

do{
    console.log(`I przed inkrementacji ${i}`)
    i++;
    console.log(`I po inkrementacji ${i}`)

}

while(i<5);
*/


// For of

const numbers = [1,2,3,4,5,6]

for ( let number of numbers) {
    console.log(number * 2)

}


// for each



const numbers2 = [1,2,3,4,5];
const newNumbers = numbers.forEach((x) => {console.log(x*2)})



const arr = ['red', 'green', 'blue'];

arr.forEach((el) => {console.log(el)});



const cities = ['Radom', 'Warszawa', 'Berlin'];

for(let i=0; i<cities.length; i++){
    console.log(`to jest miasto: ${cities[i]}`);

}

