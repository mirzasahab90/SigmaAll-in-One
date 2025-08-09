let inputWord = prompt("Enter a word to check palindrome");
let reversedWord = "";

for (let i = 0; i < inputWord.length; i++) {
    reversedWord = inputWord[i] + reversedWord; 
}

if (inputWord == reversedWord){
    console.log("The given word is palindrome")
}
else 
{
    console.log("The given word is not palindrome")
}
