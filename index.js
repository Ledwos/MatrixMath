var arr = [[1,  2,  3], [5,  6,  7], [8,  9,  4]];

const reducer = (a, b) => a + b;

// For values a-h, see matrix in README

const matrixMath = function(t) {
    let matrixOutput = [];
    // sums a-c
    for (let x = 0; x< t.length; x++) {
        let test = t[x].reduce(reducer);
        matrixOutput.push(test);
    }
    // diagonal d
    let d = t[0][0] + t[1][1] + t[2][2];
    matrixOutput.push(d);
    // sums e-g (order efg)
    for (let x = t.length -1; x >= 0; x--) {
        let test = t[0][x] + t[1][x] + t[2][x];
        matrixOutput.push(test);
    }
    let h = t[2][0] + t[1][1] + t[0][2];
    matrixOutput.push(h);
    let answer = `${t[0]}, | ${matrixOutput[0]} \n 
                  ${t[1]}, | ${matrixOutput[1]} \n 
                  ${t[2]}, | ${matrixOutput[2]} \n 
                  ______________ \n 
                  ${matrixOutput[7]} ${matrixOutput[6]} ${matrixOutput[5]} ${matrixOutput[4]} ${matrixOutput[3]} 
    `
    return answer
    
}

console.log(matrixMath(arr));
