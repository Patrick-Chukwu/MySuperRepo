
// using break statement
let number = [0, 1, 3, 4, 5, 6,, 13, 34];
let target = 13;
let found = false;

for (let i = 0; i < number.length; i++){
    if (number[i] === target) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Target met");
} else {
    console.log("still searching");
}

// using continue statement

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`${i} is skipped `)
        continue
    }

    console.log (i);
}

// anonymous function or function expressions
let area = function(r) {
    return 22 / 7 * r * r;
}

let cycle = area(7);
console.log(`Area of cycle with radius 7 is ${cycle} `);

console.log(area(5));

// arrow functions
const cube = y => y ** 3;
let a = cube(5);
console.log(a)

// using functions without a return statement
let total = 5;

let addToTotal = number => total += number;

let b = addToTotal(4)
console.log(total)
console.log(addToTotal(5))
console.log(b)
console.log(addToTotal(4))

// using anonymous function

let runningSum = 0;

let y = function(x) {
  let result =   runningSum += x;
  console.log(`result is ${result}`)
}

// console.log(y(5));
console.log(runningSum)
y(7)
console.log(runningSum)
y(8)



// Working with object in JS

let person = {
    firstName : "Patrick",
    lastName : "Chukwu",
    age : 24,
    work: function() {
        console.log("I will get to work.")
    },
    rest : function() {
        console.log("I am resting now!")
    }

};

console.log(person.firstName);
console.log(person["lastName"]);

person.age = 30;

console.log(person.work);
person["lastName"] = "Smith";
console.log(person.lastName)

console.log (person);
for (let i in person) {
    console.log(`${i}: ${person[i]}`);
};
person.work();

person.rest();