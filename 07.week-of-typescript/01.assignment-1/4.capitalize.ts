// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter
//  of each word in the string, and then returns the result string

let text:string = prompt(`input a sentence you'd like capitalized? `) 

function capitalizeWords(text): string {
    const words = text.split(' ')
  
    const turnToUpper = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  
    return turnToUpper.join(' ')    //join capitalized words to form senetence
  }
  

 
  console.log(capitalizeWords(text)) 
  