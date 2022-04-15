const hacker1 = "Set";
const hacker2 = "Trau";

function greetUser1 () {
    return(`The driver's name is ${hacker1}`);
    console.log(`The driver's name is ${hacker1}`)
}

function greetUser2 () {
    return(`The navigator's name is ${hacker2}`);
    console.log(`The navigator's name is ${hacker2}`);
}

console.log(greetUser1(hacker1));
console.log(greetUser2(hacker2));

function userLength () {
    if (hacker1.length < hacker2.length) {
        return(`The driver has the longest name, it has ${hacker1.length} characters`);
        console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    }
    else if (hacker1.length > hacker2.length) {
        return(`The navigator has the longest name, it has ${hacker2.length} characters`);
        console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
    }
    else {
        return("What? You both have same name")
        console.log("What? You both have same name");
    }
}

userLength();

function upperName (hacker1) {
    return hacker1.toUpperCase();
    console.log(hacker1.toUpperCase());
}

upperName();

function upperNameSplit () {
  const upperSplit = upperName();
  return upperSplit.split(" ");
}

upperNameSplit();

function compareNames (hacker1, hacker2) {
    if (hacker1.localeCompare(hacker2) < 0) {
        return ("Driver's name go first")
    } 
    else {
        return ("Navigator's name goes first")
    }
}
console.log(compareNames(hacker1, hacker2));

function compareNamesEquals (hacker1, hacker2) {
    if (hacker1.localeCompare(hacker2) = 0) {
        return ("You both have same names!")
    }
}

compareNamesEquals();