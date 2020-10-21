// Iteration 1: Names and Input
let hacker1 = "Zach";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sammy";

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 Without loop
console.log(hacker1.toUpperCase().split('').join(' '));

//3.1 With loop
let spacedHacker1 = '';

for (i = 0; i < hacker1.length; i++) {
    spacedHacker1 += (hacker1[i] + ' ')
}

console.log(spacedHacker1.toUpperCase())

//3.2 Without loop
console.log(hacker2.split('').reverse().join(''));

//3.2 With loop
let reverseHacker2 = "";


for (i = hacker2.length - 1; i >= 0; i--) {
    reverseHacker2 += hacker2[i]
}

console.log(reverseHacker2)

//3.3 
let hackers = [hacker1, hacker2].sort()


if (hackers[0] == hackers[1]) {
    console.log("What?! You both have the same name?")
} else if (hackers[0] == hacker1) {
    console.log("The driver's name goes first.")
} else if (hackers[0] == hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}