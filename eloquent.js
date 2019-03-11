const simpleArray = [1, 2, 3, 4, 5];
// Exercise: The Sum of a Range
function sum(numbers) {
    let total = 0;
    numbers.forEach((number) => {
        total += number;
    });
    return total;
}

function range(start, end, step = 1) {
    const numbers = [];
    let strt = start;
    if (step > 0) {
        for (strt; strt <= end; strt += step) numbers.push(strt);
    } else {
        for (strt; strt >= end; strt += step) numbers.push(strt);
    }

    return numbers;
}

// Exercise: Reversing an Array
function reverseArray(array) {
    const newArray = [];
    array.forEach(index => newArray.unshift(index));
    return newArray;
}

function reverseArrayInPlace(array) {
    let ar = [];
    for (let i = 0; i < array.length; i += 1) {
        ar = array.pop().shift();
    }
    return ar;
}

sum(simpleArray); range(simpleArray); reverseArray(simpleArray); reverseArrayInPlace(simpleArray);
