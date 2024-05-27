// Write a program that counts the number of vowels in a sentence.

const sentence:string = prompt(`Input a sentence to check vowels here: `)

const vowels = ['a','e','i','o','u']
let vowelCount:number = 0

function countVowels(sentence: string){

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const totalVowels = countVowels(sentence);
  console.log(`there are ${totalVowels} vowels present in your senetence`);
  