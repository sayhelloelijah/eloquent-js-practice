document.addEventListener('DOMContentLoaded', () => {
    const simpleArray = [1, 2, 3, 4, 5];
    // Exercise: The Sum of a Range
    /* Get the sum of all the numbers in a given array */
    function sum(numbers) {
        let total = 0;
        numbers.forEach((number) => {
            total += number;
        });
        return total;
    }

    /*
    Get the sum of all numbers from the given
    range from [least] to [greatest] and step through
    them by a given step count
    */

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

    /*
    Creating new array leaving the original array unchanged
    */
    function reverseArray(array) {
        const newArray = [];
        array.forEach(index => newArray.unshift(index));
        return newArray;
    }

    /*
    Mutating the array
    */
    function reverseArrayInPlace(array) {
        let ar = [];
        for (let i = 0; i < array.length; i += 1) {
            ar = array.pop();
            ar = array.shift();
        }

        return ar;
    }

    sum(simpleArray); range(simpleArray); reverseArray(simpleArray);
    reverseArrayInPlace(simpleArray);

    // Exercise: A List
    function prepend(el, list) {
        this.el = el;
        this.list = list;
    }

    // function arrayToList() {

    // }

    // prepend('element', arrayToList());
    // Exercise: Deep Comparison
});
