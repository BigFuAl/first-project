console.log("JavaScript is working!");
let name = "Aliou";
let age = 28;
let lovesCoding = true;

console.log(name);
console.log(age);
console.log('Loves coding?', lovesCoding);

function greetUser(name,age) {
    return `Hello, ${name}. You are ${age} years old.`;
}

let greeting = greetUser(name,age);
console.log(greeting);

function changeMessage() {
    document.getElementById("message").textContent = "You clicked the button!";
}

function changeMessage() {
    document.getElementById('message').innerText = 'Message changed!';
}

const button = document.getElementById('updateBtn');
const output = docoument.getElementById('outputText');

button.addEventListener('click', function() {
    output.innerText = 'You just changed this using addEventListener!';
});
