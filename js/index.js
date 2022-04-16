let hacker1 = "Set";
let hacker2 = "Trau";

function greetUser1 () {
    return (`The driver's name is ${hacker1}`);
}

function greetUser2 () {
    return (`The navigator's name is ${hacker2}`);
}

console.log(greetUser1(hacker1));
console.log(greetUser2(hacker2));

function userLength () {
    if (hacker1.length < hacker2.length) {
        return(`The driver has the longest name, it has ${hacker1.length} characters`);
    }
    else if (hacker1.length > hacker2.length) {
        return(`The navigator has the longest name, it has ${hacker2.length} characters`);
    }
    else {
        return("What? You both have same name")
    }
}

console.log(userLength());

function upperName () {    
    return hacker1.toUpperCase();
}

console.log(upperName())

function upperNameSplit () {
  const upperSplit = upperName();
  return upperSplit.split("");
}


console.log(upperNameSplit());

let newString = ""

function reverseName (hacker2) {
    for (let i = hacker2.length - 1; i >= 0; i--) 
      { 
      newString += hacker2[i]
      }; 
    return newString 
    }


console.log(reverseName(hacker2));

function compareNames (hacker1, hacker2) {
    if (hacker1.localeCompare(hacker2) < 0) {
        return ("Driver's name go first")
    } 
    else if (hacker1.localeCompare(hacker2) = 0) {
        return ("You both have same names!")
    }
    else {
        return ("Navigator's name goes first")
    }
}
console.log(compareNames(hacker1,hacker2));

