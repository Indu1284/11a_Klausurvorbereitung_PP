/* DATENSTRUKTUREN */

/* Primitives */

// let a; // var - Definition oder Deklaration

// // Wertzuweisung / Assignment
// a = true; // boolean (true, false)
// a = "Hallo"; // string
// a = 2; // number

// console.log(a);
// console.log(typeof a);

/* Arrays */
/* Aufgabe eines*/

let testArr;
testArr = new Array();
testArr = ["apple","bat","cat","dog"];
console.log(testArr[testArr.length-1]);

/* Aufgabe eines*/

////let arr;
//arr = new Array();
// arr = [];
// arr = [false,true,false,false];
//arr = ["apple","bat","cat","dog"];
//console.log(arr);

// // Index beginnt mit 0
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[arr.length-1]);
// console.log(arr[7]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */

// let obj = {};
// obj = {x:10, y:"Hallo"};

// console.log(obj);
// console.log(obj.x);
// console.log(obj.y);

// obj = {
//             val0: 10,
//             sub1: {
//                     val1: "hi",
//                     val2: 2
//             }
// }

// // {{{  ... }}}  - nested object
// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val1);
/* aufgabe 2
var struc =
{
level1:
{
level2:
{
param1: 3.14,
param2: 10.01
}
}
};

console.log(struc.level1.level2.param1);
console.log(struc.level1.level2.param2);
console.log(struc.level1.level2);*/

/*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite 

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerHTML = "Hi";
// console.log(document.body.children[1]);
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!";

/* ENTSCHEIDUNGSSTRUKTUREN */

// let cond;

// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == "4"); // Test auf Wert
// cond = (4 === "4"); // Test auf Wert UND Typ

// console.log(cond);

// if (6 < 4) {
//     console.log("Aussage wahr");
// } else {
//     console.log("Aussage falsch");
// }

// if - else if | switch()

/* FUNKTIONEN */

// 1. Kapselung
// test(); // Funktionscall
// function test() // Funktionsrumpf
// {
//     console.log("Testausgabe");
// }

// 2. return
// console.log(test()); // call
// function test() // Funktionsrumpf
// {
//     // .. macht irgend etwas
//     let ausgabe = "Testausgabe";
//     return ausgabe;  // Lieferung an die Stelle des calls
//     console.log("Hallo");  // nach return Abbruch!
// }

// 3. Parameter
// function test(firstName) // Parameter (p1,p2, ..pN)
// {
//     // .. macht irgend etwas
//     let ausgabe = "Hallo " + firstName + "!";
//     return ausgabe;  
// }

// console.log(test("Anna")); // Argument(e)

// 4. Fkt-Call aus Funktionen
// function test(firstName) // Parameter
// {
//     let ausgabe = grussformel() + firstName + "!";
//     return ausgabe;  
// }

// function grussformel() {
//     return "Hola, ";
//    // return "Hello, ";
// }

// console.log(test("Anna"));  // call

// rechner()





