//Exercise 1 

const maxOfTwoNumbers = (x,y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
} 
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9)); 




//Exercise 2 

function isAdult(num){
 if(num >= 18){
    return 'Adult';
 }else{
    return 'Minor';
 }
} 
console.log('Exercise 2 Result:', isAdult(21));

// ORIGINAL mess up (had to put everythting in the num (here))):
/*
function isAdult(num){
  if (num) >= 18 { *had to fix this syntax)
    return 'Adult';
  } else {
    return minor;
  }
}
*/ 


// Exercise 3 
function isCharAVowel(char){
 if (char === 'a' || char ==='e' || char ==='i' || char === 'o' || char === 'u'){
    return true;
 }
 return false;
} 
console.log(isCharAVowel("a"))
console.log(isCharAVowel("b")) 


// Exercise 4  

function generateEmail(string1, string2){
    return string1 + string2 
} 
console.log(generateEmail("Johnsmith","Example.com")) 


// Exercise 5 

function greetUser(name, timeOfDay) {
  if (timeOfDay === 'morning')   return `Good morning, ${name}!`;
  if (timeOfDay === 'afternoon') return `Good afternoon, ${name}!`;
  if (timeOfDay === 'evening')   return `Good evening, ${name}!`;
  return `Hello, ${name}!`;
}

console.log(greetUser("Sam", "morning")); 






function maxOfThree(num1, num2, num3){
    let max = num1; 
   
    if (num2 > max) max = num2;
    if(num3 > max) max = num3;
    return max;
} 

console.log(maxOfThree(45,91,16))


