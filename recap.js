//Maximum number

function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

const largestValue = largestElement([2, 5, 88, 44, 23]);
console.log(largestValue);

//Minimum number

function smallestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

const smallestValue = smallestElement([2, 5, 88, 44, 23]);
console.log(smallestValue);