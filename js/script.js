//Function
//Function are reusable block of code.
//There are 2 ways to define a function.
//1. Old way or classic way from 1995.
//2. New way or Fat Arrow function from ES6 2015.

//1. Function Definition in old way
function myFun(){
    //function body
    //Every function may return something.
    console.log("Hello from old way");
}
//2. Function calling
myFun();


//1. Function definition in new style/fat arrow style.
let myNewFun = () => {
    //function body
    //Every function may return something.
    console.log("Hello from New way");
}
//2. Function Invoking
myNewFun();

//1. Function definition in new style/fat arrow style.
let myNewFunA = (n) => { //n is a formal argument.
    //function body
    //Every function may return something.
    console.log("Hello "+n+"! How r you?");
}
//2. Function Invoking
myNewFunA("Anil"); //Anil is a actual argument.

//1. Function definition in new style/fat arrow style.
let myNewFunB = (n) => { //n is a formal argument.
    //function body
    //Every function may return something.
    console.log("Hello "+n+"! How r you?");
}
//2. Function Invoking
myNewFunB("Bittu"); //

//1. Function definition in new style/fat arrow style.
let myNewFunC = (name) => { //name is a formal argument/parameter.
    //function body
    //Every function may return something.
    console.log("Hello "+name+"! How r you?");
}
//2. Function Invoking
myNewFunC("Chandan"); //Chandan is an actual argument.

let myNewFunD = (d) =>{
    console.log("Hello "+d+"! how are you?");
}
myNewFunD("Dharmesh");

let myNewFunE = (e,f) =>{//e & f is formal operator
    return e+f; //here i have used addition operator.
}
let result = myNewFunE(40,30); //40 & 30 is an actual operator.
console.log(result);

let myNewFunG = (g,h) => { //g & h is an formal argument.
    //Every function return something.
    return g-h;
}
console.log(myNewFunG(50,20)); //50 & 20 is an actual argument.

let students = ["Raju","Shyam","Sohan","Mohan","Rohan"]
console.log(students);
console.log(students[0]);
console.log(students[4]);

let myNewFunI = (n) => { //n is a formal argument.
    console.log(n);
}

for(var i=0;i<=students.length-1;i++){ //I use all the array value as an actual argument.
    myNewFunI(students[i]);
}


let students2 = [...students, "Jyoti", 'Riya', `Janhvi`, 'Aarti'] //I call all the argument from another array using spred operator.

var allStudent = '';
for(var i=0;i<=allStudent.length-1;i++){
    console.log(allStudent[i]);
    allStudent = allStudent + allStudent[i]+' ';
}
console.log(allStudent);

let myNewFunJ = (std) => { //std is a formal argument.
    console.log(`Hello `+std+` greet from the day of ahed.`);
}

for(let i=students2.length-1; i>=0; i--){ //i have used loop in decreasing order.
    myNewFunJ(students2[i]);
}