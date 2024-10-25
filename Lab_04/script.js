// PROBLEM 1: SLEEPING IN
// Write a function called sleepIn that takes in two boolean parameters: weekday and vacation.
// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on
// vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in. 
// So some example input and output:

function sleepIn(weekday, vacation) {
    return !weekday || vacation;
}

console.log(sleepIn(false, false)); // true
console.log(sleepIn(true, false));  // false
console.log(sleepIn(false, true));  // true
console.log("");

// PROBLEM 2: MONKEY TROUBLE
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We
// are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
// Example Input and Output:

function monkeyTrouble(aSmile, bSmile) {
    return aSmile === bSmile;
}

console.log(monkeyTrouble(true, true));   // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false));  // false
console.log("");

// PROBLEM 3: STRING TIMES
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.
// Example input and output:

function stringTimes(str, n) {
    return str.repeat(n);
}

console.log(stringTimes("Hi", 2)); // "HiHi"
console.log(stringTimes("Hi", 3)); // "HiHiHi"
console.log(stringTimes("Hi", 1)); // "Hi"
console.log(stringTimes("Hi", 0)); // ""
console.log("");

// PROBLEM 4: LUCKY SUM
// Given 3 numerical values, a b c, return their sum. However, if one of the values is 13 then it does not
// count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
// Hint (Explore using multiple return statements inside a single function!)
// Example input and output:

function luckySum(a, b, c) {
    if (a === 13) return 0;
    if (b === 13) return a;
    if (c === 13) return a + b;
    return a + b + c;
}

console.log(luckySum(1, 2, 3));    // 6
console.log(luckySum(1, 2, 13));   // 3
console.log(luckySum(1, 13, 3));   // 1
console.log(luckySum(13, 2, 3));   // 0
console.log("");

// PROBLEM 5:
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is
// 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5
// higher in all cases. Here are some example inputs and outputs:

function caught_speeding(speed, is_birthday) {
    // Increase speed limit by 5 if it's the user's birthday
    let speedLimit = is_birthday ? speed - 5 : speed;
    
    if (speedLimit <= 60) {
        return 0; // No ticket
    } else if (speedLimit <= 80) {
        return 1; // Small ticket
    } else {
        return 2; // Big ticket
    }
}

console.log(caught_speeding(60, false)); // 0
console.log(caught_speeding(65, false)); // 1
console.log(caught_speeding(65, true));  // 0
