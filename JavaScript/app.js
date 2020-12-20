
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

//for(let i = 0; i < kolory.length; i++) {
////    console.log(kolory[i])
///};


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



/*const cities = ['Radom', 'Warszawa', 'Berlin'];

for(let i=0; i<cities.length; i++){
    console.log(`to jest miasto: ${cities[i]}`)};





let xx = 0;

while (xx <=10) {
    console.log(xx);
    xx += 2;

}

*/









let cities = ["radom","warszawa","krakow","bytom"];

for (let i = 0; i < cities.length; i++) {
    console.log(`To jest dokladnie : ${cities[i]}`)
}






let k = 20;

do { k-=3;
} while (k=0);


console.log(k)




let numberos = [5,8,10,25,48,60];








for ( let numbern of numberos) {
    if ( numbern%2 === 0)
    {
    console.log(`liczba ${numbern} jest po dzielna przez 2`);
    }
    else {
console.log(`liczba ${numbern} nie jest podzielna przez 2 `);
    };
}



//

//console.log(tablica);


//tablica.unshift()





//METOD MAP - sluzy do wykonywania funkcji na kazdym elemencie zbioru


const tablica = [1,2,3,4,5];


function multiply(x){
    console.log(x*2)


}

tablica.map(multiply);


const lol = ['ashe','graves','lee'];


function bigLol(x){
    console.log(x.toUpperCase());

}
lol.map(bigLol);

// METODA CONCAT - sluzy do dodawania tablic

const nums = [1,2,3];
const abcd = ['a','b','c'];



const newNum = nums.concat(abcd);

console.log(newNum);


//Spread 
const piciu = ['piwko','pepsi','winko'];

const jedzenie = ['burger','pizza','alicja'];


const dzisiaj = [...piciu,...jedzenie];
console.log(dzisiaj);


//SLICE  metoda niedestrukcyjna - metoda do wyciniania fragmentow tablicy

// 1 argument to  index elementu rozpoczynajacego
// 2 argument to index elementu to ktorego wycielismy ale bez tego elementu

const n = [1,2,3,4,5,6];
const n2 = n.slice(0,3);
console.log(n2);


//SPLICE -  metoda destrukcyjna

//1 argument to index elementu rozpoczynajacego
//2 argument to ilosc elementow ktore chcemy wyciac
//3 nowy element ktory dodajemy w miejsce wycietych


const liczby2 = [1,2,3,4,5,6,7,8,9,0]
const liczny2 = liczby2.splice(0,5);

console.log(liczny2)




const arrr = ['zielony','czerwony','niebieski'];


console.log(arrr.join());


const mimi = "asdasdasd asdasdasdasd 1211d12131d13d1d13d13d13d1rgg3g";

console.log(mimi.split('1'));





let nunu = [1,34343,23,45,66,88,90]

function nun (x){
    return x % 2 === 0;
}


console.log(nunu.filter(nun)); 


const newNunu = nunu.forEach(x => console.log(x*2));



console.log(nunu.sort((x,y) => x-y));



console.log(nunu.includes(1));









let tabliczka = [1,2,3,4,5];
tabliczka.unshift(1);
console.log(tabliczka);


let newTabliczka = tabliczka.pop();
console.log(newTabliczka);
console.log(tabliczka);




let nowaczek = [];
nowaczek.push('eloszka');
console.log(nowaczek);




let tab1 = [1,2,3];
let tab2 = [4,5,6];
let tab3 = tab1.concat(tab2);


console.log(tab3);


let tab4 = [...tab1,...tab2];
console.log(tab4);



let forfor = [1,2,3,4,5,6];


forfor.forEach(x => console.log(x*5));



let  koloryZadanie = ['zielony'];
koloryZadanie.push('niebieski');
koloryZadanie.unshift('czerwony');

console.log(koloryZadanie);



console.log(koloryZadanie.join())


let stringg = 'zielony';

console.log(stringg.charAt(0).toUpperCase() + stringg.slice(1,7));





//for (let i = 0; i<koloryZadanie.length ; i++) {
  //  console.log(`Moj ulubiony kolor to ${koloryZadanie[i].charAt(0).toUpperCase() + koloryZadanie[i].slice(1)}`)





//}


let samochody = 'Audi,Mercedes,Bmw,Nissan,Dodge';
console.log(samochody);

let arrSamochody = samochody.split(',')
console.log(arrSamochody);


(arrSamochody.length > 3) ? console.log("Jest ok") : console.log("nie jest ok");


if (arrSamochody.includes('Audi')) {
    console.log(arrSamochody.push('Fiat'));
} else {
    console.log(arrSamochody.pop());
};

console.log(arrSamochody);

for (let i = 0; i < arrSamochody.length; i++) {
    console.log(`${arrSamochody[i].toUpperCase()}`);
}


// Deklaracja funkcji;

function test (){
    console.log("czesc mordo");

};

test();

// wyrazenie funkcyjne;


let funkcja = function () {console.log('elo mordziatko')};

funkcja();



function num (x,y){console.log(x+y)}

num(2,5);


function hello (name,age) {
    console.log(`Mam na imie ${name} i mam ${age}lat`)
};

hello('Karol',30);



const h1 = document.querySelector('h1');

h1.addEventListener('click', function (){
    console.log('kliknieto mnie w leb');
})



// Funkcja strzalkowa

const test1 = function (name) {console.log('Piekne imie')};
test1('');


const test2 = (name) => {console.log(name)};

test2("ania");


// ZASADY


//1 NIE MUSIMY PODAWAC ARGUMENTOW DO FUNKCJI STRZALKOWEJ

let test10 = () => {};


//2 JEZELI FUNKCJA WYKONUJE JEDNO ZADANIE I MA JEDEN ARGUMENT NIE MUSIMY KORZYSTAC Z NAWIASOW


const test11 = imie => console.log(imie);
test11('karol');


function add (a,b) {
    return a * b
}

console.log(add(2,5))

//3 Jezeli funkcja jedynie zwraca wartosci, nie musimy uzywac slowa return

const mnozenie = (x,y) => x * y;

console.log(mnozenie(4,5))


const days = ['pon', 'wt', 'sr'];

const newDays = days.forEach(function(x){
    console.log(x);
})

const newwDays = days.forEach(e =>  console.log(e));

// domysle parametry funkcji


const helloo = (name = `drogi uzytkowniku`) => { return `Witaj ${name} jak sie masz?`}

console.log(helloo('Ania'));


const dodanko = (x=10,y=20) => (x+y);
console.log(dodanko(5));






const imionka = name => console.log(`Mam na imie ${name}`);

imionka('karol');



const prosteDodawanie = (x,b) => (x+b);

console.log(prosteDodawanie(5,6));



//Spread sluzy do rozsmarowywania tablicy, zamiast tablicy oddaje pojedynczy string 

const tabu = [1,2,3,4,5];

console.log(...tabu);


//Rest 
function podwojamy(x){
    return x *2 
}

function numerki (x,y,...z) {
    console.log(x,y,z);
    console.log(z.map(podwojamy));
}
;
numerki(1, 2, 3,4,5,6,7,9);



const name = 'Klaudia';

function test () {
    const name = "Adam";
    const age = "20";
    console.log(`Clg w funkcji ${name}`);
    console.log(`clg w funkcji ${age}`);


}
test();

console.log(name);


const zbiorek = [0.3,5,'ghj'];


// forEach

const nowyZbiorek = zbiorek.forEach(e=>console.log(`${e} podniesione do kwadratu to ${e**2}`));



// callback
const im = ['Ania', "Bania", "JudytaS", 'Ziomek'];

const bigNames = name => name.toUpperCase();


const biggies = im.map(bigNames);


console.log(biggies);


//////////////////////////////////////////////////

let $score;

const dodaj = (a,b) => {
    $score = a + b;

    if ($score%2==0) { parzysta()

    } else {
        nieparzysta()
    }
};

function parzysta () {
    console.log(`Liczba ${$score} jest parzysta`);
}

const nieparzysta = function (){
    console.log(`Liczba ${$score} jest nieparzysta`)
};

dodaj(1,3);






let $celsius;
let $temp;

const fahrenheit = c => {
 $celsius = c;
 $temp = c*1.8+32; 
}

fahrenheit(20);

console.log(`${$celsius}\u00B0C to ${$temp}\u00B0F`);




// zmiennia, tablica, petla for, funkcja strzalkowa, modulo, foreach, callback


const numP = 10;
let numberries = [];

for (i=0; i<numP; i++) {
numberries.push(i);
};

console.log(numberries);

let funk = x => {
    if (x%3===0 && x!==0){console.log(`${x} jest podzielne przez 3`)}
    else {console.log(`${x} nie jest podzielne przez 3`)}
}

let podzielniaki = numberries.forEach(funk);




//API to nie biblioteka!!!!


// API to aplikacja ktora komunikuje sie z innym programem
// API wysyla zapytanie do aplikacji a nastepnie dostaje od niej odpowiedz


// DOM DOCUMENT OBJECT MODEL
// reprezentuje caly plik html


// WINDOW najwyzej w hierarchi, zawiera wszystkie mozliwe komendy



//HOISTING - wynoszenie na gore niektorych rzeczy
// np VAR lub funkcja np

// test()
// function test = () {};


//nie wynosi funkcji ktore zostana przypisane do jakies zmiennej

// np test2()
//const test 2 =() => {};







// POBIERANIE ELEMEmNTOW 

// getElementById
const liID = document.getElementById('item');

//getElementByTagName

const liTags = document.getElementsByTagName('li');
console.log(liTags);

//getElementByClassName
const liList = document.getElementsByClassName('item-class');

//querySelector
// const qsList = document.querySelectorAll('#id lub .klasa')
// mozemy korzystac z dziedziczenia jak w css np ul li:last child
const qsList = document.querySelector('.item-class');

//querySelectorAll
const qsAllList = document.querySelectorAll('li');




//ZYWE KOLEKCJE

// W przypadku pracy np na petlach pobranymi elementami, querySelectorAll nie bedzie widzial "sztucznie dodanych"
// elementow w java scripcie. Nalezy skorzystac z z getElemementsByTagName lub getElementsByTagName


// TWORZENIE ELEMEmNTOW

//INNERHTML - zwraca to co znajduje sie w tagu
//OUTERHTML - zwraca caly pobrany obiekt


const ulList = document.createElement('ul');
document.body.appendChild(ulList)    
const liItem = document.createElement('li');
ulList.appendChild(liItem);
//liItem.textContent = " mOr D o "

const btn = document.querySelector('button');
console.log(btn.innerHTML);

btn.innerHTML ="czesc";

const one = document.querySelector('.one');
const two = document.querySelector('.two');

one.textContent = "morda";
two.innerText = "borda";


// Usuwanie elementow

const usunDiv = document.querySelector('.usunDiv');
const usunP = document.querySelector('.usunP');


// usuniecie tresci w tagu, ale tag zostaje

//p.innerHTML = "";

// nie pokazuje tresci w tagu
//p.style.display = "none";\



// rodzic.removeChild(dziecko)

const usuwanie = usunDiv.removeChild(usunP);
console.log(usuwanie);


/*
1.attributes - Zwraca tablicę atrybutów elementu.

2.childNodes - Zwraca tablicę węzłów potomnych elementu

3.className - Pobiera/ustawia klasę elementu.

4.clientHeight - Własność DHTML-a, reprezentuje wewnętrzną wysokość elementu.

5.clientLeft - Długość od lewego obramowania elementu wyrażona w pikselach. Aktualnie nie obsługiwana.

clientTop
Długość od górnego obramowania elementu wyrażona w pikselach. Aktualnie nie obsługiwana.

clientWidth
Własność DHTML-a, reprezentuje wewnętrzną szerokość elementu.

dir
Pobiera/ustawia kierunkowość (ang. directionality) elementu.
firstChild
Zwraca pierwsze dziecko bieżącego węzła.
id
Pobiera/ustawia id elementu.
innerHTML
innerHTML zwraca całą zawartość elementu wraz ze znacznikami.
lang
Określa język bazowy dla wartość atrybutów i tekstowej zawartości elementu.
lastChild
Zwraca ostatnie dziecko bieżącego węzła.
length
Zwraca ilość elementów listy (np. childNodes).
localName
Zwraca lokalną część uściślonej nazwy węzła.
name
Pobiera lub ustawia atrybut name - dostępne nie dla wszystkich elementów.
namespaceURI
URI przestrzeni nazw węzła lub NULL, jeśli nie określono przestrzeni nazw.
nextSibling
Zwraca węzeł bezpośrednio następny w drzewie dokumentu.
nodeName
Zwraca nazwę biężącego węzła.
nodeType
Zwraca typ bieżącego węzła.
nodeValue
Zwraca wartość bieżącego węzła.
offsetHeight
offsetHeight jest własnością DHTML-a, zwracającą wysokość elementu względem układu.
offsetLeft
offsetLeft pobiera/ustawia ilość pikseli, jaka dzieli element od lewej strony wewnątrz węzła offsetParent.
offsetParent
offsetParent zwraca referencję do obiektu, w którym obecny element się znajduje (tj. rodzica).
offsetTop
offsetTop zwraca pozycję obecnego elementu względem góry węzła offsetParent.
offsetWidth
offsetWidth jest własnością DHTML-a, zwracającą szerokość elementu względem układu.
ownerDocument
Zwraca dokument, w którym znajduje się bieżący węzeł.
parentNode
Zwraca rodzica bieżącego węzła.
prefix
Zwraca prefiks przestrzeni nazw obecnego węzła bądź NULL, jeśli nie określono przestrzeni nazw.
previousSibling
Zwraca węzeł bezpośrednio poprzedni w drzewie dokumentu.
scrollHeight
Własność DHTML-a, zwraca wysokość zawartości elementu z paskiem przewijania.
scrollLeft
pobiera bądź ustawia liczbę pikseli, o którą zostanie przewinięta zawartość dokumentu. Kierunek przewijania odbywa się w lewo.
scrollTop
Własność DHTML-a, która ustawia bądź pobiera odległość między górą elementu a najwyższym punktem zawartości elementu z paskiem przewijania.
scrollWidth
Zwraca the width of the scroll view of an element.
style
Zwraca blok reguł stylów dla elementu.
tabIndex
Pobiera/ustawia pozycję elementu w porządku tabulacji.
tagName
Zwraca nazwę elementu.
textContent
Pobiera/ustawia zawartość tekstu elementu włączając jego potomków.
Metody
addEventListener
Pozwala zarejestrować obserwatora zdarzeń dla celu zdarzenia.
appendChild
Wstawia określony węzeł do listy węzłów dokumentu.
blur
Dezaktywuje bieżący element.
click
Wywołuje kliknięcie na elemencie.
cloneNode
Zwraca kopię bieżącego węzła.
dispatchEvent
Pozwala przekazać wywołania zdarzeń do modelu zdarzeń w implementacji DOM.
focus
Aktywuje bieżący element.
getAttribute
Zwraca wartość atrybutu o podanej nazwie.
getAttributeNS
Zwraca wartość atrybutu o podanej nazwie i przestrzeni nazw.
getAttributeNode
Zwraca atrybut elementu jako osobny węzeł.
getElementsByTagName
Zwraca elementy o podanej nazwie będące potomkami bieżącego elementu.
hasAttribute
Zwraca wartość logiczną zależnie od tego, czy element posiada atrybut o podanej nazwie.
hasAttributeNS
Zwraca wartość logiczną zależnie od tego, czy element posiada atrybut o podanej nazwie i przestrzeni nazw.
hasAttributes
Zwraca wartość logiczną zależnie od tego, czy element posiada jakiekolwiek atrybuty.
hasChildNodes
Zwraca wartość logiczną zależnie od tego, czy element posiada dzieci.
insertBefore
Metoda pozwala wstawić węzeł przed bieżącym elementem w DOM.
item
Zwraca węzeł z drzewa wg podanego indeksu.
normalize
Metoda zapisuje bieżący węzeł i całe drzewo znajdujące się wewnątrz w "znormalizowanej" formie.
removeAttribute
Usuwa atrybut elementu.
removeAttributeNode
Usuwa określony atrybut elementu.
removeChild
Usuwa węzeł potomny bieżącego elementu.
removeEventListener
Pozwala usunąć obserwatora zdarzeń z celu zdarzenia.
replaceChild
Metoda replaceChild() zastępuje węzeł potomny bieżącego elementu innym węzłem.
setAttribute
Dodaje nowy atrybut bądź zmienia wartość atrybutu bieżącego elementu.
setAttributeNS
Dodaje nowy atrybut bądź zmienia wartość atrybutu bieżącego elementu, wg podanej nazwy i przestrzeni nazw.
setAttributeNode
Dodaje nowy węzeł atrybutu do bieżącego elementu.
setAttributeNodeNS
Dodaje nowy węzeł atrybutu do bieżącego elementu wg podanej nazwy i przestrzeni nazw.
supports
Sprawdza, czy implementacja DOM pozwala na wykorzystanie konkretnej możliwości. */

// ADD EVENT LISTENER 

//target.addEventListener(type,listener,useCapture);

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', function(){
    console.log('kliknieto mnie xD');
});


const najazd = () => console.log('najechano mnie');


btn2.addEventListener('mouseover', najazd);

console.log(btn2);


btn3.addEventListener('dblclick', function(){
    console.log('double click');
});


// addEventListener na dole !  - pierwsza funkcja 
/*
click	            odpalane, gdy element został kliknięty (np. input)
mouseover	        odpalane, gdy kursor znalazł się na elemencie
mouseout	        odpalane, gdy kursor opuścił element
mouseenter	        odpalane, gdy kursor znalazł się na elemencie
mouseleave	        odpalane, gdy kursor opuścił element
dblclick	        odpalane, gdy podwójnie klikniemy na element (np. input)
change	            odpalane, gdy opuściliśmy element, i zmienił on swoją zawartość (np. pole tekstowe), ale też na zmianę np. selekta, checkboxa itp.
submit	            odpalane, gdy formularz jest wysyłany
resize	            odpalane, gdy rozmiar okna przeglądarki jest zmieniany
focus	            odpalane, gdy element stał się aktywny (np. pole tekstowe, odnośnik, button, element z tabindex)
blur	            odpalane, gdy element przestał być aktywny (np. opuściliśmy input)
keydown	            odpalane, gdy został naciśnięty klawisz na klawiaturze
keyup	            odpalane gdy puścimy klawisz na klawiaturze
keydown	            odpalane gdy naciśniemy klawisz, lub go przytrzymamy
input	            odpalany gdy coś wpiszemy do pola, wybierzemy coś z selecta, klikniemy na input itp.
load	            odpalane, gdy obiekt został załadowany (np. cała strona, pojedyncza grafika)
contextmenu	        odpalane, gdy kliknięto prawym klawiszem myszki i pojawiło się menu kontekstowe
wheel	            odpalane, gry kręcimy kółeczkiem myszki
select	            odpalane, gdy zawartość obiektu została zaznaczona
unload	            odpalane, gdy użytkownik opuszcza dana stronę
animationstart	    odpalane, gdy animacja css się zacznie
animationend	    odpalane, gdy animacja css się zakończy
animationiteration	odpalane, gdy animacja css zrobi jedną iterację
transitionstart	    odpalane, gdy transition css się zacznie
transitionend	    odpalane, gdy transition css się zakończy
transitionrun	    odpalane, gdy transition zostanie stworzone (odpalane przed rozpoczęciem opóźnienia)
*/
