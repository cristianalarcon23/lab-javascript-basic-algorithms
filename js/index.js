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

greetUser1();
greetUser2();

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




