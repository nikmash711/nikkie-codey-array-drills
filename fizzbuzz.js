'use strict';

function fizzBuzz(countTo){
  let myArray =[];
  
  for(let i =1; i <=countTo; i++){
    if (i%3===0 && i%5===0){
      myArray.push('fizzbuzz');
    }
    else if(i%3===0){
      myArray.push('fizz');
    }
    else if(i%5===0){
      myArray.push('buzz');
    }
    else{
      myArray.push(i);
    }
  }

  return myArray;
}

