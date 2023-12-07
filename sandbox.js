/*  constante et variable  */
// declarer uen constante
let n = 2; // nombre
n = "2"; // string
let r = 2; // variable pour chaine caractere .
// acceder a ca valeur
const sum = 4 + n;

/* tableaux  */
/** @type {String[]} */
const students = ["soni", "quention", "romain", "terry", "lea", "colyne"];
const romain = students[2]; // ' romain '

/* objet   */
/** @type {{ name : string , age : number}[]} */
const completeStudents = [
    { name: "soni", age: 23 },
    { name: "quentin", age: 28 },
    { name: "romain", age: 18 },
    { name: "terry", age: 23 },
    { name: "lea", age: 20 },
    { name: "colyne", age: 18 },
];

const soni = completeStudents[0].name; //'soni'
const soniAge = completeStudents[0];
// 23

/*  fonction  */

// trois facon de declarer
function greetingOne() {
    console.log("bonjour");
}
const greetingTwo = function () {
    console.log("bonjour");
};
const greetingThree = (students) => {
    //  const name = students.name
    //  const age = students.age
    const { name, age } = students;
    console.log(`bonjour ${name} , tu as ${age} ans`);
};
// une seule facon d'appeller
greetingOne();
greetingTwo();
greetingThree(completeStudents[2]);
greetingThree(completeStudents[1]);
