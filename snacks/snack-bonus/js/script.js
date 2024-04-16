let numberArray = [1, 34, 33, 55, 75, 46, 76, 82, 93, 100];

let a = prompt("inserire un numero");

let b = prompt("inserire un numero più grande del precedente")

let arrayReturn = [];

let x = 0

console.log(numberArray);

function returner (array, num1, num2) {

    x = 0

    array.forEach((curArray) => {

        if (x >= num1 && x <= num2) {
            arrayReturn.push(numberArray[x]);
        };

        x = x + 1;

    })

    return arrayReturn

}

returner (numberArray, a, b);

console.log(arrayReturn);
