//Remove duplicate name

const names = ['Rahim', 'Karim', 'Judu', 'Mudu', 'Kudu', 'Rahim', 'Alum', 'Judu', 'Kudu'];

function removeDuplicate(names) {
    const unique = [];
    /* for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);
    } */
    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
//console.log(uniqueNames); 



//Remove duplicate number

const numbers = [1, 4, 6, 7, 9, 4, 8, 9, 7, 1, 2, 34, 78];

function removeDuplicate(numbers) {
    const unique = [];
    for (const element of numbers) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNumber = removeDuplicate(numbers);
console.log(uniqueNumber);