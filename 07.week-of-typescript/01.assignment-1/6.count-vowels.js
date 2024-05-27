// Write a program that counts the number of vowels in a sentence.
var sentence = prompt("Input a sentence to check vowels here: ");
var vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelCount = 0;
function countVowels(sentence) {
    // Iterate through each character in the sentence
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i].toLowerCase();
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
var totalVowels = countVowels(sentence);
console.log("there are ".concat(totalVowels, " vowels present in your senetence"));
