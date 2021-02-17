#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// For values a-h, see matrix in README

// Split string to 2D matrix
const make2D = function(s) {
    let nuArr = [];
    // split into array / convert values to numbers
    s = s.split('').map(y => +y);
    // convert array into 2D array
    for (let x = 0; x < s.length; x+=3 ) {
        nuArr.push(s.slice(x, x+3));
    }
    return matrixMath(nuArr);
};

// Sum values
const matrixMath = function(t) {
    // placed 'reducer' here as it's used nowhere else
    const reducer = (a, b) => a + b;
    let matrixOutput = [];
    
    // sums a-c
    for (let x = 0; x< t.length; x++) {
        let test = t[x].reduce(reducer);
        matrixOutput.push(test);
    };
    
    // diagonal d
    let d = t[0][0] + t[1][1] + t[2][2];
    matrixOutput.push(d);
    
    // sums e-g (order efg)
    for (let x = t.length -1; x >= 0; x--) {
        let test = t[0][x] + t[1][x] + t[2][x];
        matrixOutput.push(test);
    };
    
    // diagonal h
    let h = t[2][0] + t[1][1] + t[0][2];
    matrixOutput.push(h);
    let answer = `   ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, | ${matrixOutput[0]} \n   ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, | ${matrixOutput[1]} \n   ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, | ${matrixOutput[2]} \n   ---------- \n${matrixOutput[7]} ${matrixOutput[6]} ${matrixOutput[5]} ${matrixOutput[4]} ${matrixOutput[3]}`;
    console.log(answer);
    rl.close();
}

function userInput() {
    rl.question("Enter a 9 digit string ", function(arrString) {
        if (arrString.match(/\b[0-9]{9}\b/)) {
            return make2D(arrString);
        } else {
            console.log("\nError: Please enter a 9 digit string\n");
            return userInput();
        }
    });
};

userInput();