const greetings = 'Hello, how are you';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
}
const reverseLetter = reverseString(greetings);
console.log(reverseLetter);